import React from 'react';
import {Header} from "../components/header/Header";
import {Outlet} from "react-router-dom";
import styles from './MainLayout.module.scss';

export const MainLayout = () => {
    return (
        <>
            <Header/>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </>
    );
};

