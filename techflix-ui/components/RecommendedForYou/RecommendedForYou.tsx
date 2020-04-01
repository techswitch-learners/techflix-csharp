import React, {FunctionComponent} from "react";
import {Section} from "../Section/Section";
import {CardList} from "../CardList/CardList";
import {FilmModel} from "../../api/filmsApiClient";

interface RecommendedForYouProps {
    films: FilmModel[];
}

export const RecommendedForYou: FunctionComponent<RecommendedForYouProps> = ({films}) => {
    return (
        <Section title="For you">
            <CardList dataArray={films}/>
        </Section>
    );
};