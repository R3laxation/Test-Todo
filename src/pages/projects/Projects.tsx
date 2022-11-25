import React from 'react';
import {Link} from "react-router-dom";
import styles from './Projects.module.scss';
import {Input} from "../../components/input/Input";
import {Button} from "../../components/button/Button";

export const Projects = () => {
    return (
            <div className={styles.projects}>
                <div className={styles.addForm}>
                    <Input/>
                    <Button>Add Project</Button>
                </div>
                <Link to={`/project/`} className={styles.project}>
                    <h3>Title</h3>
                    <h4>Added Date</h4>
                </Link>
            </div>
    );
};

