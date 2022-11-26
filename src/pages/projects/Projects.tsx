import React from 'react';
import {Link} from "react-router-dom";
import styles from './Projects.module.scss';
import {Input} from "../../components/input/Input";

export const Projects = () => {
    return (
            <div>
                <Input/>
                <Link to={`/project/`} className={styles.project}>
                    <h3>Title</h3>
                    <h4>Added Date</h4>
                </Link>
            </div>
    );
};

