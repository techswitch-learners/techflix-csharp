import React, {FunctionComponent} from "react";
import styles from "./Footer.module.scss"
import Link from "next/link";

export const Footer: FunctionComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.label}>With thanks to TechSwitch & The Movie Database</p>

                <div className={styles.logos}>
                    <LogoLink href="https://www.techswitch.co.uk" imageUrl="https://www.techswitch.co.uk/images/logo.svg" alt="TechSwitch Logo"/>
                    <LogoLink href="https://www.themoviedb.org/" imageUrl="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="TBDM Logo"/>
                </div>
            </div>
        </footer>
    );
};

interface LogoLinkProps {
    href: string;
    imageUrl: string;
    alt?: string;
}

const LogoLink: FunctionComponent<LogoLinkProps> = ({href, imageUrl, alt}) => {
    return (
        <a href={href} className={styles.link}>
            <img className={styles.logo} src={imageUrl} alt={alt || ""}/>
        </a>
    );
};
