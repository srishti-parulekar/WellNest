import React from 'react';
import { Grid, Card } from '@mui/material'; // Ensure Card is imported from MUI
import coverImage from '../../assets/cover.jpg';
import Login from './Login';

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={7} className="h-screen overflow-hidden">
          <img className="h-screen w-full" src={coverImage} alt="Cover" />
        </Grid>

        <Grid item xs={5}>
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center">WellNest</h1>
                <p className="text-center text-sm w-[70%]">Your Safe Space for Mental Health</p>
              </div>
              <Login />
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
