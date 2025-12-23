import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function ResultSettings() {
    return(
        <>
        <nav>
            <ul>
                <li><Link to='dashboards'>Profile</Link></li>
                <li><Link to ='settings'>setting</Link></li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default ResultSettings
