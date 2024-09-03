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
        <div className='px-20'>
            <Grid container spacing={2}>
                <Grid item xs={0} lg={3}>
                    <div className='sticky top-0'>
                        <Sidebar />
                    </div>
                </Grid>
                <Grid item xs={12} lg={location.pathname === "/" ? 6 : 9} className='px-5 flex justify-center'>
                    <Routes>
                        <Route path="/" element={<MiddlePart />} />
                        <Route path="/profile/:id" element={<ProfilePage />} />
                    </Routes>
                </Grid>
                <Grid item xs={0} lg={3} className='relative'>
                    <div className="sticky top-0 w-full">
                        <RightPart />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default HomePage;
