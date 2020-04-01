import React, {FunctionComponent} from "react";
import styles from "./FilmPlayer.module.scss";

interface FilmPlayerProps {
    filmUrl: string;
}

export const FilmPlayer: FunctionComponent<FilmPlayerProps> = ({filmUrl}) => {
    return (
        <section className={styles.section}>
            <div className={styles.playerContainer}>
                <iframe className={styles.player} src={filmUrl} frameBorder="0" allowFullScreen/>
            </div>
        </section>
    );
};