import React from 'react';
import { Grid } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import RightPart from '../../components/RightPart/RightPart';

const MainLayout = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const showRightPart = currentPath === '/home';

    return (
        <div className='px-0'>
            <Grid container spacing={2}>
                {/* Sidebar - Always present */}
                <Grid item xs={12} lg={2.5} sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <div className='sticky top-0'>
                        <Sidebar />
                    </div>
                </Grid>

                {/* Middle part - route content */}
                <Grid item xs={12} lg={showRightPart ? 6.5 : 9.5} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Outlet /> 
                </Grid>

                {/* Right Part - only on /home */}
                {showRightPart && (
                    <Grid item xs={12} lg={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
                        <div className="sticky top-0 w-full">
                            <RightPart />
                        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

export default MainLayout;