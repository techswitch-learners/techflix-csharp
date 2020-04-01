import Link from "next/link";

﻿import React, {FunctionComponent} from "react";
import {SearchForm} from "../SearchForm/SearchForm";
import styles from "./Hero.module.scss";
import {PlayIcon} from "../Icons/Play";

interface HeroProps {
    imageUrl: string;
    playUrl: string;
}

export const Hero: FunctionComponent = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.cover}/>
            <div className={styles.messageContainer}>
                <div className={styles.messageContent}>
                    <h1 className={styles.title}>Welcome!</h1>
                    <p className={styles.message}>All the films you love!</p>
                    <p className={styles.message}>Start searching now.</p>
                    <SearchForm/>
                </div>
            </div>
        </section>
    );
};

export const FilmHero: FunctionComponent<HeroProps> = ({imageUrl, playUrl}) => {
    return (
        <section className={styles.hero}>
            <div className={styles.filmCover}/>
            <div className={styles.playButtonContainer}>
                <Link href={playUrl}>
                    <a className={styles.playLink}>
                        <PlayIcon className={styles.playButton}/>
                    </a>
                </Link>
            </div>
        </section>
    );
};