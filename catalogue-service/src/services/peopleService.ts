import { Person } from "../models/person";

const people: Person[] = [
    {
        id: 3223,
        films: [299534, 1726],
    },
    {
        id: 16828,
        films: [299534],
    },
    {
        id: 74568,
        films: [299534, 284053],
    },
];

export async function getPeople(): Promise<Person[]> {
    return people;
}

export async function getPerson(id: number|string): Promise<Person> {
    return people.filter(f => f.id == id)[0];
}