import { Film } from "../models/film";

const films: Film[] = [
    {
        id: 1726,
        cast: [3223],
        similarFilms: [299534, 284053],
    },
    {
        id: 299534,
        cast: [3223, 16828, 74568],
        similarFilms: [1726, 284053],
    },
    {
        id: 284053,
        cast: [74568],
        similarFilms: [1726, 284053],
    },
];

export async function getFilms(): Promise<Film[]> {
    return films;
}

export async function getFilm(id: number|string): Promise<Film> {
    return films.filter(f => f.id == id)[0];
}