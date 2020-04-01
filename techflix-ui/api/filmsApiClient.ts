import fetch from "node-fetch";
import {PersonModel, toPerson} from "./peopleApiClient";

export interface FilmModel {
    id: number;
    url: string;
    imageUrl: string;
    name: string;
    title: string;
    heroImageUrl: string;
    posterImageUrl: string;
    budget: number;
    homePage: string;
    synopsis: string;
    releaseDate: string;
    revenue: number;
    runtime: number;
    tagline: string;
}

export async function GetPopularFilms(): Promise<FilmModel[]> {
    const response = await fetch(`${baseUrl()}/films/popular`);
    const json = await response.json();
    return json.items.map(toFilm);
}

export async function GetRecommendedFilms(): Promise<FilmModel[]> {
    const response = await fetch(`${baseUrl()}/films/recommended`);
    const json = await response.json();
    return json.items.map(toFilm);
}

export async function GetFilm(id: any): Promise<FilmModel> {
    const response = await fetch(`${baseUrl()}/films/${id}`);
    const json = await response.json();
    return toFilm(json);
}

export async function GetSimilarFilms(id: any): Promise<FilmModel[]> {
    const response = await fetch(`${baseUrl()}/films/${id}/similar`);
    const json = await response.json();
    return json.items.map(toFilm);
}

export async function GetCast(id: any): Promise<PersonModel[]> {
    const response = await fetch(`${baseUrl()}/films/${id}/cast`);
    const json = await response.json();
    return json.items.map(toPerson);
}

export function toFilm(item: any): FilmModel {
    return {
        ...item,
        url: `/films/${item.id}`,
        imageUrl: item.posterImageUrl,
        name: item.title,
    }
}

function baseUrl() {
    return process.env.URL_INTERNAL_API || "http://localhost:8000"
}