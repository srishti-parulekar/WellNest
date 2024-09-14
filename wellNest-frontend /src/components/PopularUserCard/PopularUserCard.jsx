import React from 'react';
import { CardHeader, Avatar, Button } from '@mui/material';
import { red } from '@mui/material/colors';

const PopularUserCard = ({ user }) => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.name[0]} {/* Display the first letter of the user's name */}
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
        title={user.name} // Display the user's name
        subheader={user.username} // Display the user's username
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
