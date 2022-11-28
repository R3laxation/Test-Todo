import React from 'react';
import styles from './Main.module.scss';
import {Input} from "../../components/input/Input";
import {Button} from "../../components/button/Button";
import { Projects } from '../../components/projects/Projects';
import {AddProjectForm} from "../../components/addProjectForm/AddProjectForm";

export const Main = () => {
    return (
            <div className={styles.main}>
                <AddProjectForm/>
                <Projects/>
            </div>
    );
};

