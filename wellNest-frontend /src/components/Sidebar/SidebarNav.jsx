import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { BookHeart } from 'lucide-react';

export const navigationMenu = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/home"
    },
    {
        title: "Message",
        icon: <MessageIcon />,
        path: "/message"
    },
    {
        title: "Communities",
        icon: <GroupIcon />,
        path: "/communities"
    },
    {
        title: "My Journal",
        icon: <BookHeart />,
        path: "/journal"
    },
    {
        title: "Profile",
        icon: <PersonIcon />,
        path: "/profile"
    }
];
