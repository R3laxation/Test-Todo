import {createSlice} from "@reduxjs/toolkit";
import {ProjectType} from "./types";

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: [] as Array<ProjectType>,
    reducers: {

    },
    extraReducers:{}
});

export default projectsSlice.reducer;