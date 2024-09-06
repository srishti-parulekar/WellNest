import React from 'react';
import { Grid } from '@mui/material';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import MiddlePart from '../../components/MiddlePart/MiddlePart';
import ProfilePage from '../Profile/ProfilePage';
import RightPart from '../../components/RightPart/RightPart';

const HomePage = () => {
    return (
        <div className='px-0'>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={3}>
                    <div className='sticky top-0'>
                        <Sidebar />
                    </div>
                </Grid>
                <Grid item xs={12} lg={9}>
                    <Routes>
                        <Route path="/" element={<MiddlePart />} />
                        <Route path="profile/:id" element={<ProfilePage />} />
                    </Routes>
                    <Outlet />
                </Grid>
                <Grid item xs={12} lg={3}>
                    <div className="sticky top-0 w-full">
                        <RightPart />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default HomePage;
