import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Projects } from './pages/projects/Projects';


function App() {
  return (
    <Routes>
        <Route path={'/'} element={<Projects/>}/>
        <Route />
    </Routes>
  );
}

export default App;
