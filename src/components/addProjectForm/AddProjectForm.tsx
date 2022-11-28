import React from 'react';
import {Input} from "../input/Input";
import {Button} from "../button/Button";
import styles from './AddProjectForm.module.scss';

export const AddProjectForm = () => {
    return (
        <div className={styles.addForm}>
            <Input/>
            <Button>Add Project</Button>
        </div>
    );
};

