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
            createFilm(1726, {id: 1726}),
            createFilm(299534, {id: 299534}),
            createFilm(284053, {id: 284053}),
        ]
    )
}

async function addActors() {
    await Promise.all(
        [
            createPerson(3223, {id: 3223}),
            createPerson(16828, {id: 16828}),
            createPerson(74568, {id: 74568}),
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

