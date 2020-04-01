import React, {FunctionComponent} from "react";
import Link from "next/link";
import styles from "./Header.module.scss"
import {BurgerIcon} from "./BurgerIcon/BurgerIcon";
import {AccountIcon} from "../Icons/Account";

interface HeaderProps {
    sidebarOpen: boolean,
    setSidebarOpen: (sidebarOpen: boolean) => void
}

export const Header: FunctionComponent<HeaderProps> = ({sidebarOpen, setSidebarOpen}) => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <BurgerIcon isOpen={sidebarOpen} setIsOpen={setSidebarOpen}/>
                <NavLink href="/">TechFlix</NavLink>
                <div className={styles.pageLinks}>
                    <NavLink href="/films">Films</NavLink>
                    <NavLink href="/people">People</NavLink>
                </div>
                <NavLink href="/sign-in">
                    <AccountIcon className={styles.accountIcon}/>
                </NavLink>
            </nav>
        </header>
    );
};

interface NavLinkProps {
    href: string;
}

const NavLink: FunctionComponent<NavLinkProps> = ({href, children}) => {
    return (
        <Link href={href}>
            <a className={styles.navLink}>
                {children}
            </a>
        </Link>
    );    
};
