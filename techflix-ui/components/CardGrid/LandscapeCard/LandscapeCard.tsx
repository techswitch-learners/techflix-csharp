import React, {FunctionComponent} from "react";
import styles from "./LandscapeCard.module.scss";
import Link from "next/link";

export interface CardData {
    imageUrl: string,
    linkUrl: string,
}

interface LandscapeCardProps {
    data: CardData;
}

export const LandscapeCard: FunctionComponent<LandscapeCardProps> = ({data}) => {
    return (
        <li className={styles.cardWrapper} style={{ backgroundImage: `url("${data.imageUrl}")` }}>
            <Link href={data.linkUrl}>
                <a className={styles.link}>
                    <div className={styles.card}/>
                </a>
            </Link>
        </li>      
    );
};