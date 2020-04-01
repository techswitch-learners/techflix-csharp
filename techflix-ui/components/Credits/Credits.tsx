import React, {FunctionComponent} from "react";
import styles from "./Credits.module.scss";
import {Section} from "../Section/Section";

interface Credit {
    title: string;
    role: string;
    year: number;
}

interface CreditsProps {
    credits: Credit[]
}

export const Credits: FunctionComponent<CreditsProps> = ({credits}) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Credits</h2>
            <ul className={styles.creditList}>
                {credits.map((credit, index) => <Credit key={index} credit={credit}/>)}
            </ul>
        </section>
    );
};

interface CreditProps {
    credit: Credit;
}

const Credit: FunctionComponent<CreditProps> = ({credit}) => {
    return (
        <li className={styles.credit}>
            <div className={styles.year}>{credit.year}</div>
            <div className={styles.title}>{credit.title}</div>
            <div className={styles.role}>as {credit.role}</div>
        </li>
    );  
};
