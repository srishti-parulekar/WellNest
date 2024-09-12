import React from 'react';
import CommunityCard from './CommunityCard';
import { Box, Grid } from '@mui/material';

const CommunityList = ({ communities }) => {
  return (
    <Box p={2}>
      <Grid container spacing={3}>
        {communities.map((community) => (
          <Grid item xs={12} sm={6} md={4} key={community.id}>
            <CommunityCard community={community} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CommunityList;
