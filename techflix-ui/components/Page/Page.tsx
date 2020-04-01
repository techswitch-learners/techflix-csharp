import React, {FunctionComponent, useState} from "react";
import {Header} from "../Navigation/Header";
import Head from "next/head";
import styles from "./Page.module.scss";
import {Footer} from "../Footer/Footer";
import {MobileSidebar} from "../Navigation/MobileSidebar/MobileSidebar";

interface PageProps {
    title: string;
} 

export const Page: FunctionComponent<PageProps> = ({title, children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    return (
        <div className={styles.page}>
            <Head>
                <title>TechFlix: {title}</title>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"/>
            </Head>
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <MobileSidebar isOpen={sidebarOpen}/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};