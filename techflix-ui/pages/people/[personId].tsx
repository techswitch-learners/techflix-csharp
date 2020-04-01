import React from "react";
import {GetServerSideProps, NextPage} from "next";
import {Page} from "../../components/Page/Page";
import {PersonDetails} from "../../components/KeyFacts/PersonDetails";
import {Credits} from "../../components/Credits/Credits";
import {Biography} from "../../components/Biography/Biography";
import {SeeThemIn} from "../../components/SeeThemIn/SeeThemIn";
import {SidebarLayout} from "../../components/SidebarLayout/SidebarLayout";
import {FilmModel} from "../../api/filmsApiClient";
import {GetFilms, GetPerson, PersonModel} from "../../api/peopleApiClient";

interface PersonPageProps {
    person: PersonModel;
    seeThemIn: FilmModel[];
}

const Person : NextPage<PersonPageProps> = ({person, seeThemIn}) => {
    const sidebar = <PersonDetails person={person}/>;
    const main = <div>
            <Biography biography={person.biography}/>,
            <SeeThemIn films={seeThemIn}/>,
            <Credits credits={[]}/>,
        </div>;
    
    return (
        <Page title="People">
            <SidebarLayout title={person.name} main={main} sidebar={sidebar}/>
        </Page>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const person = GetPerson(context.params!.personId);
    const seeThemIn = GetFilms(context.params!.personId);

    return {
        props: {
            person: await person,
            seeThemIn: await seeThemIn,
        }
    }
};

export default Person;