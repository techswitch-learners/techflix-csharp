import React, {FunctionComponent} from "react";
import styles from "./CardList.module.scss";
import {PortraitCard, PortraitCardData} from "./PortraitCard/PortraitCard";

interface CardListProps {
    dataArray: PortraitCardData[]
}

export const CardList: FunctionComponent<CardListProps> = ({dataArray}) => {
    return (
        <div className={styles.container}>
            <ul className={styles.cardList}>
                {dataArray.map((data, index) => <PortraitCard key={index} data={data}/>)}
            </ul>
        </div>
    );
};