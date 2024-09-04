import React from 'react';
import { Card, CardHeader, CardMedia, Avatar, IconButton, CardContent, Typography, CardActions } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import IosShareIcon from '@mui/icons-material/IosShare';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const PostCard = () => {
    return (
        <Card sx={{ backgroundColor: '#fffae0' }} className=''>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Srishti Parulekar"
                subheader="maybesrishti"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_1280.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    What a cutie!
                </Typography>
            </CardContent>
            <CardActions className='flex justify-between' disableSpacing>
                <div>
                    <IconButton>
                        {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>

                    <IconButton>
                        <IosShareIcon />
                    </IconButton>

                    <IconButton>
                        <ChatBubbleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    );
};

export default PostCard;
