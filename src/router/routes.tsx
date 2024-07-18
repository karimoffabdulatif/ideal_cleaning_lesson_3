import React from 'react';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

interface Route {
    path: string;
    content: string;
    icon: React.ReactElement;
}

const routes: Route[] = [
    {
        path: "/main/Services",
        content: "Services",
        icon: <DryCleaningIcon />
    },
    {
        path: "/main",
        content: "Orders",
        icon: <DashboardCustomizeRoundedIcon />
    },
    {
        path: "/main/Clinets",
        content: "Clients",
        icon: < PeopleAltIcon/>
    },
];

export default routes;
