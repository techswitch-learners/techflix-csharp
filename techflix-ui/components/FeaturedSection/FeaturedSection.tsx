import React, {FunctionComponent} from "react";
import {Section} from "../Section/Section";
import {CardGrid} from "../CardGrid/CardGrid";
import {CardData} from "../CardGrid/LandscapeCard/LandscapeCard";
import {GetServerSideProps} from "next";

interface FeaturedSectionProps {
    features: CardData[]
}

export const FeaturedSection: FunctionComponent<FeaturedSectionProps> = ({features}) => {

    return (
        <Section title={"Featured"}>
            <CardGrid dataArray={features}/>
        </Section>
    );  
};
