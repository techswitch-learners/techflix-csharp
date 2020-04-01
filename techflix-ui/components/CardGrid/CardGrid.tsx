import React, {FunctionComponent} from "react";
import styles from "./CardGrid.module.scss";
import {CardData, LandscapeCard} from "./LandscapeCard/LandscapeCard";

interface CardGridProps {
    dataArray: CardData[]
}

export const CardGrid: FunctionComponent<CardGridProps> = ({dataArray}) => {
    return (
        <div className={styles.gridContainer}>
            <ul className={styles.grid}>
                {dataArray.map((data, index) => <LandscapeCard key={index} data={data}/>)}
            </ul>
        </div>
    );  
};  