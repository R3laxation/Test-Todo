import React from 'react';
import styles from './Main.module.scss';
import {Input} from "../../components/input/Input";
import {Button} from "../../components/button/Button";
import { Projects } from '../../components/projects/Projects';

export const Main = () => {
    return (
            <div className={styles.main}>
                <div className={styles.addForm}>
                    <Input/>
                    <Button>Add Project</Button>
                </div>
                <Projects/>
            </div>
    );
};

