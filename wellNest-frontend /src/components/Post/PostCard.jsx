import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  Divider,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction, likePostAction } from "../../redux/Post/post.action";
import { isLikedByReqUser } from "../../utils/isLikedByReqUser";

const PostCard = ({ item }) => {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store);

  const handleShowComments = () => setShowComments(!showComments);

  const handleLikePost = () => {
    if (item?.postid) {
      dispatch(likePostAction(item.postid));
    } else {
      console.error("Post ID is missing!");
    }
  };

  const handleCreateComment = (content) => {
    if (!item?.postid) {
      console.error("Post ID is missing!");
      return;
    }

    const reqData = {
      postId: item.postid,
      data: {
        content,
      },
    };
    console.log("Post ID: ", item.postid);
    dispatch(createCommentAction(reqData));
  };

  if (!item || !item.user) {
    return null; 
    
  }

  return (
    <Card sx={{ backgroundColor: "#fffae0", borderRadius: '16px', boxShadow: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], width: 40, height: 40 }} aria-label="recipe">
            {item.user.firstName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${item.user.firstName || 'Unknown'} ${item.user.lastName || ''}`}
        subheader={
          `@${(item.user.firstName || '').toLowerCase()}_${(item.user.lastName || '').toLowerCase()}`
        }
        sx={{ padding: 1.5 }}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image || 'default_image_url'}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item.caption || 'No caption available'}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between" disableSpacing>
        <div>
          <IconButton onClick={handleLikePost}>
            {isLikedByReqUser(auth.user?.id, item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton>
            <IosShareIcon />
          </IconButton>
          <IconButton onClick={handleShowComments}>
            <ChatBubbleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>
      </CardActions>

      {showComments && (
        <section className="mt-3">
          <div className="flex items-center space-x-5 mx-3 my-5">
            <Avatar />
            <input
              onKeyPress={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  handleCreateComment(e.target.value);
                  console.log("Enter pressed -----", e.target.value);
                }
              }}
              className="w-full outline-none bg-transparent border border-[#78350f] rounded-full px-5 py-2"
              type="text"
              placeholder="write your comment..."
            />
          </div>

          <Divider />
          {item.comments?.map((comment) => (
            <div className="mx-3 space-y-2 my-5 text-xs" key={comment.id}>
              <div className="flex items-center space-x-5">
                <Avatar
                  sx={{ height: "2rem", width: "2rem", fontSize: "0.8rem" }}
                >
                  {comment.user.firstName[0]}
                </Avatar>
                <p>{comment.content}</p>
              </div>
            </div>
          ))}
        </section>
      )}
    </Card>
  );
};

export default PostCard;
