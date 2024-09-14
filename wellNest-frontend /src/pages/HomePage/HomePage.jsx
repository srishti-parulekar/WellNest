import React from 'react';
import { Grid } from '@mui/material';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import MiddlePart from '../../components/MiddlePart/MiddlePart';
import ProfilePage from '../Profile/ProfilePage';
import RightPart from '../../components/RightPart/RightPart';

const HomePage = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    
    return (
        <div className='px-0'>
            <Grid container spacing={2}>
                {/* Sidebar - Always present */}
                <Grid item xs={12} lg={currentPath === '/home' ? 3 : 3} sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <div className='sticky top-0'>
                        <Sidebar />
                    </div>
                </Grid>
                
                {/* Middle Part - Always present */}
                <Grid item xs={12} lg={currentPath === '/home' ? 6 : 9} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Routes>
                        <Route path="/" element={<MiddlePart />} />
                        <Route path="profile/:id" element={<ProfilePage />} />
                    </Routes>
                    <Outlet />
                </Grid>

                {/* Right Part - Only show on /home */}
                {currentPath === '/home' && (
                    <Grid item xs={12} lg={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
                        <div className="sticky top-0 w-full">
                            <RightPart />
                        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default HomePage;
