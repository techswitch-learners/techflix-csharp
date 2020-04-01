import fetch from "node-fetch";
import {FilmModel, toFilm} from "./filmsApiClient";

export interface PersonModel {
    name: string;
    url: string;
    imageUrl: string;
    id: number;
    dateOfBirth: string;
    placeOfBirth: string;
    knownFor: string;
    biography: string;
    popularity: number;
    profileImageUrl: string;
    homePage: string;
    alsoKnownAs: string[];
}

export async function GetPopularActors(): Promise<PersonModel[]> {
    const response = await fetch(`${baseUrl()}/people/popular`);
    const json = await response.json();
    return json.items.map(toPerson);
}

export async function GetPerson(id: any): Promise<PersonModel> {
    const response = await fetch(`${baseUrl()}/people/${id}`);
    const json = await response.json();
    return toPerson(json);
}

export async function GetFilms(id: any): Promise<FilmModel[]> {
    const response = await fetch(`${baseUrl()}/people/${id}/films`);
    const json = await response.json();
    return json.items.map(toFilm);
}

export function toPerson(item: any): PersonModel {
    return {
        ...item,
        url: `/people/${item.id}`,
        imageUrl: item.profileImageUrl,
    }
}

function baseUrl() {
    return process.env.URL_INTERNAL_API || "http://localhost:8000"
}
