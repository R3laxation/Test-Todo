import {createSlice} from "@reduxjs/toolkit";
import {ProjectType} from "./types";


export const projectsSlice = createSlice({
    name: 'projects',
    initialState: [
        {id: '1', title: 'First project', addedDate: '25.11.2022'},
        {id: '2', title: 'Second project', addedDate: '25.11.2022'},
        {id: '3', title: 'Third project', addedDate: '25.11.2022'}
    ] as Array<ProjectType>,
    reducers: {

    },
    extraReducers:{}
});

export default projectsSlice.reducer;