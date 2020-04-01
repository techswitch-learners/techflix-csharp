import React, {FunctionComponent} from "react";
import {Section} from "../Section/Section";
import {CardList} from "../CardList/CardList";
import {PortraitCardData} from "../CardList/PortraitCard/PortraitCard";
import {SecondaryButtonLink} from "../Button/Button";

interface PopularFilmsProps {
    showLinkToAllFilms?: boolean;
    films: PortraitCardData[];
} 

export const PopularFilms: FunctionComponent<PopularFilmsProps> = ({showLinkToAllFilms = true, films}) => {
    return (
        <Section title="Top Films">
            <CardList dataArray={films}/>
            {showLinkToAllFilms && <SecondaryButtonLink href="/films">More Films</SecondaryButtonLink>}
        </Section>
    );
};