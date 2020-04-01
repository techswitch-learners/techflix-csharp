import React, {FunctionComponent} from "react";
import styles from "./BannerSection.module.scss";

interface BannerProps {
    title: string;
}

export const BannerSection: FunctionComponent<BannerProps> = ({title, children}) => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                {children}
            </div>
        </section>
    );
};