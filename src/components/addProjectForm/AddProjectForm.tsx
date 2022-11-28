import React, {useState} from 'react';
import {Input} from "../input/Input";
import {Button} from "../button/Button";
import styles from './AddProjectForm.module.scss';
import {useAppDispatch} from "../../bll/slices/store";
import {addPack} from '../../bll/slices/projects/projectsSlice';
import {setIsLoading} from "../../bll/slices/app/appSlice";

export const AddProjectForm = () => {

    const dispatch = useAppDispatch();
    const [packName, setPackName] = useState('');


    const onClickAddPack = () => {
        const newPack = {id: '8', title: packName, addedDate: '25.11.2022'};
        dispatch(setIsLoading({loading: true}));
        setTimeout(()=>{
            dispatch(addPack(newPack));
            dispatch(setIsLoading({loading: false}));
        }, 1000)
    }

    return (
        <div className={styles.addForm}>
            <Input value={packName} onChange={e => setPackName(e.currentTarget.value)}/>
            <Button onClick={onClickAddPack}>Add Project</Button>
        </div>
    );
};

