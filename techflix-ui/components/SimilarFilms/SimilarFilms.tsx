import React, {FunctionComponent} from "react";
import {PortraitCardData} from "../CardList/PortraitCard/PortraitCard";
import styles from "./SimilarFilms.module.scss";
import {CardList} from "../CardList/CardList";
import {Section} from "../Section/Section";

interface SimilarFilmsProps {
    films: PortraitCardData[];
}

export const SimilarFilms: FunctionComponent<SimilarFilmsProps> = ({films}) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>You may also like</h2>
            <CardList dataArray={films}/>
        </section>
    );
};

export const WatchNext: FunctionComponent<SimilarFilmsProps> = ({films}) => {
    return (
        <Section title={"Watch Next"}>
            <CardList dataArray={films}/>
        </Section>
    );
};