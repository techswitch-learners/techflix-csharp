import { Person } from "../models/person";
import { SearchModel } from "../models/searchModel";
import { ListResponse } from 'src/models/listResponse';
import {runReadTransaction, runWriteTransaction} from "@daos/neo4jClient";
import {int, Record} from "neo4j-driver";
import {toPerformance} from "./filmsService";

export async function getPeople(searchModel: SearchModel): Promise<ListResponse<Person>> {
    const records = runReadTransaction(
        "MATCH (person:Person) RETURN person SKIP $skip LIMIT $limit",
        {
            skip: int((searchModel.page - 1) * searchModel.perPage),
            limit: int(searchModel.perPage),
        });
    const count = runReadTransaction("MATCH (person:Person) RETURN count(person)");
    return {
        count: (await count)[0].get("count(person)").toNumber(),
        items: (await records).map(toPerson)
    };
}

export async function getPerson(id: number): Promise<Person> {
    const records = await runReadTransaction("MATCH (person:Person) WHERE person.id = $id RETURN person", {id: int(id)});
    return toPerson(records[0]);
}

export async function createPerson(id: number, person: Person): Promise<Person> {
    const records = await runWriteTransaction(
        "CREATE (person:Person { id: $id }) RETURN person", {id: int(id)})
    return toPerson(records[0]);
}

export async function updatePerson(id: number, person: Person): Promise<Person> {
    throw "Not implemented";
}

export async function deletePerson(id: number): Promise<Person> {
    const records = await runWriteTransaction("DELETE (person:Person) WHERE person.id = $id RETURN person", {id: int(id)});
    return toPerson(records[0]);
}

export async function actedIn(id: number, filmId: number, character: string) {
    await runWriteTransaction(
        "MATCH (a:Person {id: $id}), (b:Film {id: $filmId}) CREATE (a)-[acted:ActedIn {character: $character}]->(b)",
        {id: int(id), filmId: int(filmId), character: character}
    )
}

export async function getFilms(id: number) {
    const records = await runReadTransaction(
        "MATCH (film:Film)<-[actedIn:ActedIn]-(person:Person {id: $id}) RETURN film, actedIn, person",
        {id: int(id)}
    );
    return records.map(toPerformance);
}

function toPerson(record: Record): Person {
    const feature = record.get("person").properties;
    return {
        id: feature.id.toNumber(),
    }
}