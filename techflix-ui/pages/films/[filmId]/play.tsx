import React from "react";
import {NextPage} from "next";
import {Page} from "../../../components/Page/Page";
import {useRouter} from "next/router";
import {PageTitle} from "../../../components/PageTitle/PageTitle";
import {FilmPlayer} from "../../../components/FilmPlayer/FilmPlayer";
import {WatchNext} from "../../../components/SimilarFilms/SimilarFilms";
import {PortraitCardData} from "../../../components/CardList/PortraitCard/PortraitCard";

const Film : NextPage = () => {
    const router = useRouter();
    const { filmId } = router.query;

    const dummyFilmData: PortraitCardData = {
        imageUrl: "https://image.tmdb.org/t/p/w1280/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        name: "Avengers: Endgame",
        url: "/films/3",
    };
    
    return (
        <Page title="Play">
            <PageTitle>Avengers: Endgame</PageTitle>
            <FilmPlayer filmUrl={"https://www.youtube-nocookie.com/embed/hA6hldpSTF8"}/>
            <WatchNext films={[dummyFilmData, dummyFilmData, dummyFilmData, dummyFilmData, dummyFilmData]}/>
        </Page>
    );
};

export default Film;