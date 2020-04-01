import React, {FunctionComponent} from "react";
import styles from "./PortraitCard.module.scss";
import Link from "next/link";

export interface PortraitCardData {
    name: string;
    imageUrl: string;
    url: string;
}

interface PortraitCardProps {
    data: PortraitCardData;
}

export const PortraitCard: FunctionComponent<PortraitCardProps> = ({data}) => {
    return (
        <li className={styles.cardContainer}>
            <Link href={data.url}>
                <a className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img src={data.imageUrl} alt="" className={styles.image}/>
                    </div>
                    <div className={styles.nameContainer}>
                        <p className={styles.name}>{data.name}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};