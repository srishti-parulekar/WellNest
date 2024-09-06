import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MessageIcon from '@mui/icons-material/Message';

export const navigationMenu = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/home"
    },
    {
        title: "Notifications",
        icon: <NotificationsIcon />,
        path: "/notifications"
    },
    {
        title: "Message",
        icon: <MessageIcon />,
        path: "/message"
    },
    {
        title: "List",
        icon: <ListAltIcon />,
        path: "/"
    },
    {
        title: "Communities",
        icon: <GroupIcon />,
        path: "/"
    },
    {
        title: "Profile",
        icon: <PersonIcon />,
        path: "/profile"
    }
];
