import React from 'react';
import {Link} from "react-router-dom";

export const Projects = () => {
    return (
        <Link to={`/project/`} >
            <h3>Title</h3>
            <h4>Added Date</h4>
        </Link>
    );
};

