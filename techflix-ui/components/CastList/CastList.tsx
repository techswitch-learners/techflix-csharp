import React, {FunctionComponent} from "react";
import {PortraitCardData} from "../CardList/PortraitCard/PortraitCard";
import styles from "./CastList.module.scss";
import {CardList} from "../CardList/CardList";

interface CastListProps {
    cast: PortraitCardData[];
}

export const CastList: FunctionComponent<CastListProps> = ({cast}) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Cast List</h2>
            <CardList dataArray={cast}/>
        </section>
    );
}