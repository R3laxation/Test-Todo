import React from 'react';
import {Link} from "react-router-dom";
import styles from './Project.module.scss';


export const Project = () => {
    return (
        <Link to={`/project/`} className={styles.project}>
            <h3>Title</h3>
            <h4>Added Date</h4>
        </Link>
    );
};

