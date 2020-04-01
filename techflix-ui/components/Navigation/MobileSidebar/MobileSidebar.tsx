import React, {FunctionComponent} from "react";
import styles from "./MobileSidebar.module.scss"
import Link from "next/link";

interface MobileSidebarProps {
    isOpen: boolean;
}

export const MobileSidebar: FunctionComponent<MobileSidebarProps> = ({isOpen}) => {
    let sidebarClass = styles.sidebar;
    if (isOpen) {
        sidebarClass += ` ${styles.open}`;
    }
    
    return (
        <nav className={sidebarClass}>
            <SidebarLink href="/">Home</SidebarLink>
            <SidebarLink href="/films">Films</SidebarLink>
            <SidebarLink href="/people">People</SidebarLink>
        </nav>
    );
};

interface SidebarLinkProps {
    href: string;
}

const SidebarLink: FunctionComponent<SidebarLinkProps> = ({href, children}) => {
    return (
        <Link href={href}>
            <a className={styles.link}>
                {children}
            </a>
        </Link>
    );
}