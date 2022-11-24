import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Projects } from './pages/projects/Projects';
import { Tasks } from './pages/tasks/Tasks';

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<Projects/>}/>
        <Route path={'project/:id'} element={<Tasks/>}/>
    </Routes>
  );
}

export default App;
