import React, {FunctionComponent, ReactNode} from "react";
import styles from "./SidebarLayout.module.scss";

interface SidebarLayoutProps {
    title: string;
    subtitle?: string;
    main: ReactNode;
    sidebar: ReactNode;
}

export const SidebarLayout: FunctionComponent<SidebarLayoutProps> = ({title, subtitle, main, sidebar}) => {
    return (
        <div className={styles.layout}>
            <div>
                <h1 className={styles.title}>{title}</h1>
                <h2 className={styles.subtitle}>{subtitle}</h2>
            </div>
            {sidebar}
            {main}
        </div>
    );
};