import React, {FunctionComponent} from "react";
import styles from "./Fact.module.scss";

interface FactProps {
    name: string;
    value: string|number;
}

interface FactListProps {
    name: string;
    values: string[];
}

export const Fact: FunctionComponent<FactProps> = ({name, value}) => {
    return (
        <div className={styles.field}>
            <div className={styles.fieldName}>{name}:</div>
            <div className={styles.fieldValue}>{value}</div>
        </div>
    );
};



export const FactList: FunctionComponent<FactListProps> = ({name, values}) => {
    return (
        <div className={styles.field}>
            <div className={styles.fieldName}>{name}:</div>
            {(values || []).map((value, index) => <div key={index} className={styles.fieldValue}>{value}</div>)}
        </div>
    );
};