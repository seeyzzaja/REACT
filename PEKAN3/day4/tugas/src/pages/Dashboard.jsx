import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
    return(
        <>
        <nav>
            <ul>
                <li><Link to='DashboardProfile'>Profile</Link></li>
                <li><Link to ='Dashboardsetting'>setting</Link></li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Dashboard
