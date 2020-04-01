import React, {FunctionComponent} from "react";
import {Section} from "../Section/Section";
import {CardList} from "../CardList/CardList";
import {PortraitCardData} from "../CardList/PortraitCard/PortraitCard";
import {SecondaryButtonLink} from "../Button/Button";

interface PopularActorsProps {
    showLinkToAllActors?: boolean;
    actors: PortraitCardData[];
}

export const PopularActors: FunctionComponent<PopularActorsProps> = ({showLinkToAllActors = true, actors}) => {
    return (
        <Section title="Top Actors">
            <CardList dataArray={actors}/>
            {showLinkToAllActors && <SecondaryButtonLink href="/people">More Actors</SecondaryButtonLink>}
        </Section>
    );
};