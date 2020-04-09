import { Film } from "../models/film";
import { Performance } from "../models/performance";
import { SearchModel } from "../models/searchModel";
import { ListResponse } from 'src/models/listResponse';
import {runReadTransaction, runWriteTransaction} from "@daos/neo4jClient";
import {int, Record} from "neo4j-driver";

export async function getFilms(searchModel: SearchModel): Promise<ListResponse<Film>> {
    const records = runReadTransaction(
        "MATCH (film:Film) RETURN film SKIP $skip LIMIT $limit",
        {
            skip: int((searchModel.page - 1) * searchModel.perPage),
            limit: int(searchModel.perPage),
        });
    const count = runReadTransaction("MATCH (film:Film) RETURN count(film)");
    return {
        count: (await count)[0].get("count(film)").toNumber(),
        items: (await records).map(toFilm)
    };
}

export async function getFilm(id: number): Promise<Film> {
    const records = await runReadTransaction("MATCH (film:Film) WHERE film.id = $id RETURN film", {id: int(id)});
    return toFilm(records[0]);
}

export async function createFilm(id: number, film: Film): Promise<Film> {
    const records = await runWriteTransaction(
        "CREATE (film:Film { id: $id }) RETURN film", {id: int(id)});
    return toFilm(records[0]);
}

export async function updateFilm(id: number, film: Film): Promise<Film> {
    throw "Not implemented";
}

export async function deleteFilm(id: number): Promise<Film> {
    const records = await runWriteTransaction("DELETE (film:Film) WHERE film.id = $id RETURN film", {id: int(id)});
    return toFilm(records[0]);
}

export async function linkSimilarFilms(firstId: number, secondId: number): Promise<void> {
    await runWriteTransaction(
        "MATCH (a:Film {id: $firstId}), (b:Film {id: $secondId}) CREATE (a)-[similar:SimilarTo]->(b)",
        {firstId: int(firstId), secondId: int(secondId)}
    );
}

export async function getSimilarFilms(id: number): Promise<Film[]> {
    const records = await runReadTransaction(
        "MATCH (a:Film {id: $id})-[r:SimilarTo]->(film:Film) RETURN film",
        {id: int(id)}
    );
    return records.map(toFilm);
}

export async function getCast(id: number): Promise<Performance[]> {
    const records = await runReadTransaction(
        "MATCH (film:Film {id: $id})<-[actedIn:ActedIn]-(person:Person) RETURN film, actedIn, person",
        {id: int(id)}
    );
    return records.map(toPerformance);
}

export function toPerformance(record: Record): Performance {
    return {
        filmId: record.get("film").properties.id.toNumber(),
        personId: record.get("person").properties.id.toNumber(),
        character: record.get("actedIn").properties.character,
    }
}

function toFilm(record: Record): Film {
    const feature = record.get("film").properties;
    return {
        id: feature.id.toNumber(),
    }
}