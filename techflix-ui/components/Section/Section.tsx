import React, {FunctionComponent} from "react";
import styles from "./Section.module.scss";

interface SectionProps {
    title: string;
}

export const Section: FunctionComponent<SectionProps> = ({title, children}) => {
    const thing = styles.title;
    return (
        
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                {children}
            </div>
        </section>
    );
};