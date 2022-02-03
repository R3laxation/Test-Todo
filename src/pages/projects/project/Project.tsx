import React from 'react';
import {Link} from "react-router-dom";
import styles from './Project.module.scss';
import {useAppSelector} from "../../../bll/slices/store";
import {selectProjects} from "../../../bll/slices/projects/selectors";
import {ProjectType} from "../../../bll/slices/projects/types";

export const Project = () => {

    const projects = useAppSelector<ProjectType[]>(selectProjects);


    // const mappedProjects = projects.map(({id, title, addedDate}) => (
    //     <Link to={`/project/${id}`} className={styles.project} key={id}>
    //         <h3>{title}</h3>
    //         <h4>{addedDate}</h4>
    //     </Link>
    // ))

    return (
        <>
            <div>123</div>
        </>
    );
};

