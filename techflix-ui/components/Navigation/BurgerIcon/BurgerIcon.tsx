import React, {FunctionComponent} from "react";
import styles from "./BurgerIcon.module.scss";

interface BurgerIconProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
} 

export const BurgerIcon: FunctionComponent<BurgerIconProps> = ({isOpen, setIsOpen}) => {

    let burgerClass = styles.burger;
    if (isOpen) {
        burgerClass += ` ${styles.open}`;
    }
    
    return (
        <button className={burgerClass} onClick={() => setIsOpen(!isOpen)}/>
    );  
};