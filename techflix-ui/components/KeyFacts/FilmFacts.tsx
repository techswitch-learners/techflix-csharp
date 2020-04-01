import React, {FunctionComponent} from "react";
import styles from "./FilmFacts.module.scss";
import {Fact} from "./Fact";
import {FilmModel} from "../../api/filmsApiClient";

interface FilmFactsProps {
    film: FilmModel;
}

export const FilmFacts: FunctionComponent<FilmFactsProps> = ({film}) => {
    return (
        <section className={styles.section}>
            <img className={styles.posterImage} src={film.posterImageUrl} alt="Poster Image"/>>
            <h2 className={styles.title}>Trivia</h2>
            <Fact name="Budget" value={film.budget}/>
            <Fact name="Revenue" value={film.revenue}/>
            <Fact name="Runtime" value={film.runtime}/>
            <Fact name="Homepage" value={film.homePage}/>
            <Fact name="Release Date" value={film.releaseDate}/>
        </section>
    );
};