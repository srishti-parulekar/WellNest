import React from 'react';
import { Grid, Card, Box } from '@mui/material'; 
import coverImage from '../../assets/cover.jpg';
import Register from './Register';

const Authentication = () => {
  return (
    <div>
      <Grid container>
        {/* Image Section */}
        <Grid item xs={12} md={6} className="h-screen overflow-hidden">
          <img className="h-screen w-full object-cover" src={coverImage} alt="Cover" />
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} md={6} className="flex justify-center items-center h-screen">
          <Box px={{ xs: 2, md: 5 }} py={{ xs: 4, md: 6 }} width="100%" maxWidth={500}>
            <Card className="card p-8 shadow-lg">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center font-bold text-3xl">WellNest</h1>
                <p className="text-center text-sm w-[70%]">Your Safe Space for Mental Health</p>
              </div>
              {/* Toggle between <Login /> and <Register /> */}
              <Register />
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
