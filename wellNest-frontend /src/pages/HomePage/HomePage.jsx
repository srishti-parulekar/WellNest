import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Route, Routes, useLocation } from 'react-router-dom';
import MiddlePart from '../../components/MiddlePart/MiddlePart';
import ProfilePage from '../Profile/ProfilePage';
import RightPart from '../../components/RightPart/RightPart';

const HomePage = () => {
    const location = useLocation();

    return (
        <div className='px-0'>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={3}>
                    <div className='sticky top-0'>
                        <Sidebar />
                    </div>
                </Grid>
                <Grid item xs={12} lg={6} className='px-5'>
                    <Routes>
                        <Route path="/" element={<MiddlePart />} />
                        <Route path="/profile/:id" element={<ProfilePage />} />
                    </Routes>
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
