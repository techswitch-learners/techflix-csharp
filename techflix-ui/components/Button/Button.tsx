import React, {FunctionComponent} from "react";
import styles from "./Button.module.scss";
import Link from "next/link";

interface LinkButtonProps {
    href: string;
}

export const PrimaryButtonLink: FunctionComponent<LinkButtonProps> = ({href, children}) => {
    return (
        <Link href={href}>
            <a className={styles.primaryButton}>
                {children}
            </a>
        </Link>
    );
};

export const SecondaryButtonLink: FunctionComponent<LinkButtonProps> = ({href, children}) => {
    return (
        <Link href={href}>
            <a className={styles.secondaryButton}>
                {children}
            </a>
        </Link>
    );    
};
