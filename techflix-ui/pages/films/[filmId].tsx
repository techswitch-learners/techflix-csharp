import React from "react";
import {GetServerSideProps, NextPage} from "next";
import {Page} from "../../components/Page/Page";
import {useRouter} from "next/router";
import {FilmHero} from "../../components/Hero/Hero";
import {SidebarLayout} from "../../components/SidebarLayout/SidebarLayout";
import {Synopsis} from "../../components/Biography/Biography";
import {FilmFacts} from "../../components/KeyFacts/FilmFacts";
import {CastList} from "../../components/CastList/CastList";
import {SimilarFilms} from "../../components/SimilarFilms/SimilarFilms";
import {
    FilmModel,
    GetCast,
    GetFilm,
    GetPopularFilms,
    GetRecommendedFilms,
    GetSimilarFilms
} from "../../api/filmsApiClient";
import {PersonModel} from "../../api/peopleApiClient";

interface FilmProps {
    film: FilmModel;
    cast: PersonModel[];
    similarFilms: FilmModel[];
}

const Film : NextPage<FilmProps> = ({film, cast, similarFilms}) => {
    const main = <div>
        <Synopsis synopsis={film.synopsis}/>
        <CastList cast={cast}/>
        <SimilarFilms films={similarFilms}/>
    </div>;
    
    const sidebar = <FilmFacts film={film}/>;
    
    return (
        <Page title="Film">
            <FilmHero imageUrl={film.heroImageUrl} playUrl={`/films/${film.id}/play`}/>
            <SidebarLayout title={film.title} subtitle={film.tagline} main={main} sidebar={sidebar}/>
        </Page>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const film = GetFilm(context.params!.filmId);
    const cast = GetCast(context.params!.filmId);
    const similarFilms = GetSimilarFilms(context.params!.filmId);

    return {
        props: {
            film: await film,
            cast: await cast,
            similarFilms: await similarFilms,
        }
    }
};

export default Film;