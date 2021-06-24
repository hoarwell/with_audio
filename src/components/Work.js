import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <div>
            <h1>work page</h1>
            <ul>
                <li><Link to = "/work/1">work 1</Link></li>
                <li><Link to = "/work/2">work 2</Link></li>
            </ul>
        </div>
    )
}

export default Work;