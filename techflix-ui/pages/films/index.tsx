import React from "react";
import {GetServerSideProps, NextPage} from "next";
import {Page} from "../../components/Page/Page";
import {PageTitle} from "../../components/PageTitle/PageTitle";
import {PopularFilms} from "../../components/PopularFilmsSection/PopularFilmsSection";
import {RecommendedForYou} from "../../components/RecommendedForYou/RecommendedForYou";
import {FilmModel, GetPopularFilms, GetRecommendedFilms} from "../../api/filmsApiClient";

interface FilmsProps {
    popularFilms: FilmModel[];
    recommendedFilms: FilmModel[];
}

const Films : NextPage<FilmsProps> = ({popularFilms, recommendedFilms}) => {
    return (
        <Page title="Films">
            <PageTitle>Films</PageTitle>
            <PopularFilms showLinkToAllFilms={false} films={popularFilms}/>
            <RecommendedForYou films={recommendedFilms}/>
        </Page>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const popularFilms = GetPopularFilms();
    const recommendedFilms = GetRecommendedFilms();

    return {
        props: {
            popularFilms: await popularFilms,
            recommendedFilms: await recommendedFilms,
        }
    }
};

export default Films;