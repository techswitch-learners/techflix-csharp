﻿import React, {FunctionComponent} from "react";
import {PortraitCardData} from "../CardList/PortraitCard/PortraitCard";
import {CardList} from "../CardList/CardList";
import styles from "./SeeThemIn.module.scss";

interface SeeThemInProps {
    films: PortraitCardData[];
}

export const SeeThemIn: FunctionComponent<SeeThemInProps> = ({films}) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>See them in</h2>
            <CardList dataArray={films}/>
        </section>
    );    
};
