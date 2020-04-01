import React from "react";
import {GetServerSideProps, NextPage} from "next";
import {Page} from "../../components/Page/Page";
import {PageTitle} from "../../components/PageTitle/PageTitle";
import {PopularActors} from "../../components/PopularActorsSection/PopularActorsSection";
import {GetPopularActors, PersonModel} from "../../api/peopleApiClient";

interface PeopleProps {
    popularActors: PersonModel[]
}

const People : NextPage<PeopleProps> = ({popularActors}) => {
    return (
        <Page title="People">
            <PageTitle>People</PageTitle>
            <PopularActors showLinkToAllActors={false} actors={popularActors}/>
        </Page>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const popularActors = GetPopularActors();

    return {
        props: {
            popularActors: await popularActors,
        }
    }
};

export default People;