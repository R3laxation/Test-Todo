import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Main} from './pages/main/Main';
import {Tasks} from './pages/tasks/Tasks';
import {MainLayout} from "./layouts/MainLayout";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={''} element={<Main/>}/>
                <Route path={'main/:id'} element={<Tasks/>}/>
            </Route>
        </Routes>
    );
}

export default App;
