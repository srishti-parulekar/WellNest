import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from 'react-router-dom';
import CommunityList from '../../components/Communities/CommunityList';

const Communities = () => {
  const navigate = useNavigate();

  const initialCommunities = [
    {
      id: 1,
      name: 'Anxiety Support Group',
      description: 'A community for discussing anxiety-related topics',
      image: 'https://images.unsplash.com/photo-1539541417736-3d44c90da315?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwcG9ydCUyMGdyb3VwfGVufDB8MHwwfHx8MA%3D%3D',
    },
    {
      id: 2,
      name: 'Depression Healing',
      description: 'Sharing thoughts and support for those going through depression',
      image: 'https://via.placeholder.com/150?text=Depression+Healing',
    },
    {
      id: 3,
      name: 'Mindfulness Practice',
      description: 'A space to share mindfulness techniques and experiences',
      image: 'https://via.placeholder.com/150?text=Mindfulness+Practice',
    },
  ];

  const [communities, setCommunities] = useState(initialCommunities);

  return (
    <Box 
      p={4}
      sx={{ 
        backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1669863547357-b7d064cedaac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlaWdlJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: "#fffbeb",
      }}
    >
      <div className="flex items-center space-x-2">
        <IconButton 
          sx={{ 
            color: "#78350f", 
            fontSize: "24px", 
            padding: "4px",
            mr: 2
          }} 
          onClick={() => navigate('/home')}
        >
          <WestIcon fontSize="small" />
        </IconButton>
        <Typography 
          variant="h4" 
          className="text-[#78350f]" 
          sx={{ fontWeight: 'bold', fontSize: "28px" }}
        >
          Communities
        </Typography>
      </div>

      <Box mt={4}>
        <CommunityList communities={communities} />
      </Box>
    </Box>
  );
};

export default Communities;
