import React from 'react';
import {Link} from "react-router-dom";
import styles from './Projects.module.scss';
import {Input} from "../../components/input/Input";
import {Button} from "../../components/button/Button";
import {Project} from "./project/Project";

export const Projects = () => {
    return (
            <div className={styles.projects}>
                <div className={styles.addForm}>
                    <Input/>
                    <Button>Add Project</Button>
                </div>
                <Project/>
            </div>
    );
};

