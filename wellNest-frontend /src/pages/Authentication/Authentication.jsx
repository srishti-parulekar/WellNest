import React from 'react';
import { Grid, Card, Box, IconButton, useMediaQuery } from '@mui/material';
import coverImage from '../../assets/cover.jpg';
import Register from './Register';
import Login from './Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import WestIcon from '@mui/icons-material/West';

const Authentication = () => {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery('(min-width: 900px)');

  return (
    <div className="h-screen">
      <Grid container className="h-full relative">
        <IconButton
          sx={{
            color: 'white',
            position: 'absolute',
            top: 16,
            left: 16,
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.3)', 
            borderRadius: '50%', 
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
            },
          }}
          onClick={() => navigate('/')}
        >
          <WestIcon />
        </IconButton>

        <Grid
          item
          xs={12}
          md={6}
          className={`relative flex justify-center items-center h-full ${isLargeScreen ? '' : 'order-last'}`}
        >
          <img
            className={`absolute inset-0 w-full h-full object-cover z-0 ${isLargeScreen ? '' : 'opacity-80'}`}
            src={coverImage}
            alt="Cover"
          />
          {!isLargeScreen && (
            <Box
              px={{ xs: 2, md: 5 }}
              py={{ xs: 4, md: 6 }}
              width="100%"
              maxWidth={500}
              className="z-10 relative"
            >
              <Card
                className="p-8 shadow-lg"
                sx={{
                  border: '1px solid #78350f',
                  borderRadius: '8px',
                }}
              >
                <div className="flex flex-col items-center mb-5 space-y-1">
                  <h1 className="logo text-center font-bold text-amber-900 text-3xl">WellNest</h1>
                  <p className="text-center text-sm text-amber-900 w-[70%]">Your Safe Space for Mental Health</p>
                </div>

                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/signin" element={<Login />} />
                  <Route path="/signup" element={<Register />} />
                </Routes>
              </Card>
            </Box>
          )}
        </Grid>

        {isLargeScreen && (
          <Grid item xs={12} md={6} className="flex justify-center items-center h-full">
            <Box px={{ xs: 2, md: 5 }} py={{ xs: 4, md: 6 }} width="100%" maxWidth={500}>
              <Card
                className="p-8 shadow-lg"
                sx={{
                  border: '1px solid #78350f',
                  borderRadius: '8px',
                }}
              >
                <div className="flex flex-col items-center mb-5 space-y-1">
                  <h1 className="logo text-center font-bold text-amber-900 text-3xl">WellNest</h1>
                  <p className="text-center text-sm text-amber-900 w-[70%]">Your Safe Space for Mental Health</p>
                </div>

                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/signin" element={<Login />} />
                  <Route path="/signup" element={<Register />} />
                </Routes>
              </Card>
            </Box>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Authentication;
