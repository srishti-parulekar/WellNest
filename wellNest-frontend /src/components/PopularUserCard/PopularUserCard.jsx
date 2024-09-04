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
              color: '#1DA1F2',  
              textTransform: 'capitalize',  
            }}
          >
            Follow
          </Button>
        }
        title="Srishti Parulekar"
        subheader="maybesrishti"
        sx={{
          '& .MuiCardHeader-title': {
            color: '#5a3825',  
          },
          '& .MuiCardHeader-subheader': {
            color: '#5a3825',  
          },
        }}
      />
    </div>
  );
};

export default PopularUserCard;
