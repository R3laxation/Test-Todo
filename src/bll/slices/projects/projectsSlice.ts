import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProjectType} from "./types";

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: [
        {id: '1', title: 'First main', addedDate: '25.11.2022'},
        {id: '2', title: 'Second main', addedDate: '25.11.2022'},
        {id: '3', title: 'Third main', addedDate: '25.11.2022'},
        {id: '4', title: 'Third main', addedDate: '25.11.2022'},
        {id: '5', title: 'Third main', addedDate: '25.11.2022'},
        {id: '6', title: 'Third main', addedDate: '25.11.2022'},
        {id: '7', title: 'Third main', addedDate: '25.11.2022'},
    ] as Array<ProjectType>,
    reducers: {
        addPack(state, action: PayloadAction<{ id: string, title: string; addedDate: string }>) {
            state.push(action.payload);
        },
    },
});

export const {
    addPack
} = projectsSlice.actions;

export default projectsSlice.reducer;