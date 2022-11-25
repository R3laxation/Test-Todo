import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import projectsReducer from "./projects/projectsSlice";
import tasksReducer from "./tasks/tasksSlice";

const rootReducer = combineReducers({
        projects: projectsReducer,
        tasks: tasksReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

export type AppRootActionsType = Parameters<typeof rootReducer>[1];

export type AppRootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;