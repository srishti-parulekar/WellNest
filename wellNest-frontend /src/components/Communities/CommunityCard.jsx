import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const CommunityCard = ({ community }) => {
  // Image URLs for each community
  const images = {
    'Anxiety Support Group': 'https://plus.unsplash.com/premium_photo-1661963007374-f976ba0112be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXAlMjBzdXBwb3J0fGVufDB8MHwwfHx8MA%3D%3D',
    'Depression Healing': 'https://plus.unsplash.com/premium_photo-1661405843619-6dbc76860e18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9wZWZ1bHxlbnwwfDB8MHx8fDA%3D',
    'Mindfulness Practice': 'https://plus.unsplash.com/premium_photo-1661501227748-2b107ee174d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWluZGZ1bHxlbnwwfDB8MHx8fDA%3D',
  };

  return (
    <Card sx={{ 
      maxWidth: 345, 
      backgroundColor: "#78350f", 
      boxShadow: 3,
      display: 'flex',
      flexDirection: 'column',
      height: '100%'  // Ensures the card takes up the full height of its container
    }}>
      <CardMedia
        component="img"
        alt={community.name}
        height="140"
        image={images[community.name] || '/path/to/default-image.jpg'}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}> {/* Ensures content grows to fill available space */}
        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fffbeb" }}>
          {community.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#fffbeb" }}>
          {community.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "#fffbeb" }}>Share</Button>
        <Button size="small" sx={{ color: "#fffbeb" }}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CommunityCard;
