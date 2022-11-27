import React from 'react';
import {Header} from "../components/header/Header";
import {Outlet} from "react-router-dom";
import style from './MainLayout.module.scss';

export const MainLayout = () => {
    return (
        <>
            <Header/>
            <div className={style.content}>
                <Outlet/>
            </div>
        </>
    );
};

