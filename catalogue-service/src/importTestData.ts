import {countFeatures, createFeature} from "./services/featuresService";
import {runWriteTransaction} from "@daos/neo4jClient";
import {createFilm, linkSimilarFilms} from "./services/filmsService";
import {actedIn, createPerson} from "./services/peopleService";

export async function importTestData() {
    if (!await databaseIsEmpty()) {
        console.log("database has data");
        return;
    }
    
    console.log("database is empty - adding content");
    
    await addConstraints();
    await addFeatures();
    await addFilms();
    await addActors();
    await addCastMembers();
    await addRelatedFilms();
    
    console.log("database restore complete")
}

async function addConstraints() {
    await runWriteTransaction("CREATE CONSTRAINT feature_id ON (feature:Feature) ASSERT feature.id IS UNIQUE");
    await runWriteTransaction("CREATE CONSTRAINT film_id ON (film:Film) ASSERT film.id IS UNIQUE");
    await runWriteTransaction("CREATE CONSTRAINT person_id ON (person:Person) ASSERT person.id IS UNIQUE");
}

async function databaseIsEmpty(): Promise<boolean> {
    return await countFeatures() === 0;
}

async function addFeatures() {
    await Promise.all(
        [
            createFeature(1, {id: 1, linkUrl: "/films/1726", imageUrl: "https://image.tmdb.org/t/p/original/zuxaH2oakoDyo6vXgV8q54ChYTP.jpg"}),
            createFeature(2, {id: 1, linkUrl: "/films/1726", imageUrl: "https://image.tmdb.org/t/p/original/zuxaH2oakoDyo6vXgV8q54ChYTP.jpg"}),
            createFeature(3, {id: 1, linkUrl: "/films/1726", imageUrl: "https://image.tmdb.org/t/p/original/zuxaH2oakoDyo6vXgV8q54ChYTP.jpg"}),
            createFeature(4, {id: 1, linkUrl: "/films/1726", imageUrl: "https://image.tmdb.org/t/p/original/zuxaH2oakoDyo6vXgV8q54ChYTP.jpg"}),
            createFeature(5, {id: 1, linkUrl: "/films/1726", imageUrl: "https://image.tmdb.org/t/p/original/zuxaH2oakoDyo6vXgV8q54ChYTP.jpg"}),
        ]
    );
}

async function addFilms() {
    await Promise.all(
        [
            createFilm(1726, {id: 1726, title: "Iron Man"}),
            createFilm(299534, {id: 299534, title: "Avengers: Endgame"}),
            createFilm(284053, {id: 284053, title: "Thor: Ragnarok"}),
            createFilm(315837, {id: 315837, title: "Ghost in the Shell (2017)"}),
            createFilm(74465, {id: 74465, title: "We Bought a Zoo"}),
            createFilm(286217, {id: 286217, title: "The Martian (2015)"}),
            createFilm(55721, {id: 55721, title: "Bridesmaids"}),
        ]
    )
}

async function addActors() {
    await Promise.all(
        [
            createPerson(3223, {id: 3223, name: "Robert Downey Jr."}),
            createPerson(16828, {id: 16828, name: "Chris Evans"}),
            createPerson(74568, {id: 74568, name: "Chris Hemsworth"}),
            createPerson(1245, {id: 1245, name: "Scarlett Johansson"}),
            createPerson(1892, {id: 1892, name: "Matt Damon"}),
            createPerson(83002, {id: 83002, name: "Jessica Chastain"}),
            createPerson(41091, {id: 41091, name: "Kristen Wiig"}),
        ]
    )
}

async function addCastMembers() {
    await Promise.all(
        [
            actedIn(3223, 299534, "Iron Man / Tony Stark"),
            actedIn(3223, 1726, "Iron Man / Tony Stark"),
            actedIn(16828, 299534, "Captain America / Chris Rodgers"),
            actedIn(74568, 299534, "Thor Odinson"),
            actedIn(74568, 284053, "Thor Odinson"),
            actedIn(1245, 1726, "Natasha Romanoff / Black Widow"),
            actedIn(1245, 299534, "Natasha Romanoff / Black Widow"),
            actedIn(1245, 315837, "Major Mira Killian / Motoko Kusanagi"),
            actedIn(1245, 74465, "Kelly Foster"),
            actedIn(1892, 74465, "Benjamin Mee"),
            actedIn(1892, 286217, "Mark Watney"),
            actedIn(83002, 286217, "Melissa Lewis"),
            actedIn(41091, 286217, "Annie Montrose"),
            actedIn(41091, 55721, "Annie Walker"),
        ]
    )
}

async function addRelatedFilms() {
    await Promise.all(
        [
            linkSimilarFilms(1726, 299534),
            linkSimilarFilms(1726, 284053),
            linkSimilarFilms(299534, 1726),
            linkSimilarFilms(299534, 284053),
            linkSimilarFilms(284053, 1726),
            linkSimilarFilms(284053, 299534),
        ]
    )
}

