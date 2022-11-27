import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Projects} from './pages/projects/Projects';
import {Tasks} from './pages/tasks/Tasks';
import {MainLayout} from "./layouts/MainLayout";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={''} element={<Projects/>}/>
                <Route path={'project/:id'} element={<Tasks/>}/>
            </Route>
        </Routes>
    );
}

export default App;
