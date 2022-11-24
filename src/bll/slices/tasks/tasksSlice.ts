import {createSlice} from "@reduxjs/toolkit";
import {TaskType} from "./types";


export const tasksSlice = createSlice({
    name: 'projects',
    initialState: [] as Array<TaskType>,
    reducers: {

    },
    extraReducers:{}
});

export default tasksSlice.reducer;