import React from "react";
import {GetServerSideProps, NextPage} from "next";
import {Page} from "../components/Page/Page";
import {Hero} from "../components/Hero/Hero";
import {FeaturedSection} from "../components/FeaturedSection/FeaturedSection";
import {RegisterSection} from "../components/RegisterSection/RegisterSection";
import {PopularFilms} from "../components/PopularFilmsSection/PopularFilmsSection";
import {PopularActors} from "../components/PopularActorsSection/PopularActorsSection";
import {CardData} from "../components/CardGrid/LandscapeCard/LandscapeCard";
import {GetFeatures} from "../api/featuresApiClient";
import {FilmModel, GetPopularFilms} from "../api/filmsApiClient";
import {GetPopularActors, PersonModel} from "../api/peopleApiClient";

interface HomePageProps {
    features: CardData[],
    popularFilms: FilmModel[],
    popularActors: PersonModel[],
}

const Home : NextPage<HomePageProps> = ({features, popularFilms, popularActors}) => {
    return (
        <Page title="Home">
            <Hero/>
            <FeaturedSection features={features}/>
            <RegisterSection/>
            <PopularFilms films={popularFilms}/>
            <PopularActors actors={popularActors}/>
        </Page>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const features = GetFeatures();
    const popularFilms = GetPopularFilms();
    const popularActors = GetPopularActors();
    
    return { 
        props: { 
            features: await features,
            popularFilms: await popularFilms,
            popularActors: await popularActors,
        } 
    }
};

export default Home;