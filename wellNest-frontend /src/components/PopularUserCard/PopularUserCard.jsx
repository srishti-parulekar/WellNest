import React from 'react';
import { CardHeader, Avatar, IconButton, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PopularUserCard = () => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Button 
            size='small' 
            sx={{ 
              color: '#1DA1F2',  // Blue color for the "Follow" button
              textTransform: 'capitalize',  // Optional: makes the text more readable
            }}
          >
            Follow
          </Button>
        }
        title="Srishti Parulekar"
        subheader="maybesrishti"
        sx={{
          '& .MuiCardHeader-title': {
            color: '#5a3825',  // Dark brown color for the title
          },
          '& .MuiCardHeader-subheader': {
            color: '#5a3825',  // Dark brown color for the subheader
          },
        }}
      />
    </div>
  );
};

export default PopularUserCard;
