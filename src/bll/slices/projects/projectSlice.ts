import {createSlice} from "@reduxjs/toolkit";
import {ProjectsType} from "./types";

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: [] as Array<ProjectsType>,
    reducers: {

    },
    extraReducers:{}
});

export default projectsSlice.reducer;