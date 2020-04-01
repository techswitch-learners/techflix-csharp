import React, {FunctionComponent} from "react";
import {BannerSection} from "../BannerSection/BannerSection";
import styles from "./RegisterSection.module.scss";
import {PrimaryButtonLink} from "../Button/Button";

export const RegisterSection: FunctionComponent = () => {
    return (
        <BannerSection title={"Register"}>
            <p className={styles.message}>It looks like you don't yet have an account!</p>
            <p className={styles.message}>Sign up now to gain access to all the films you love!</p>
            <PrimaryButtonLink href="/todo">Register</PrimaryButtonLink>
        </BannerSection>  
    );
};
