import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppStateType} from "./types";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isLoading: false,
    } as AppStateType,
    reducers: {
        setIsLoading(state, action: PayloadAction<{ loading: boolean }>) {
            state.isLoading = action.payload.loading;
        },
    },
});

export default appSlice.reducer;
export const { setIsLoading } = appSlice.actions;
