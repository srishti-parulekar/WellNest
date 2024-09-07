import React, { useEffect, useState } from "react";
import { Card, Avatar, IconButton } from "@mui/material";

import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";
import CreatePostModal from "../CreatePost/CreatePostModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAction } from "../../redux/Post/post.action";

const posts = [1, 1, 1, 1, 1];

const MiddlePart = () => {
  const dispatch = useDispatch();

  const {post} = useSelector(store => store);

  console.log("post store", post)

  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);

  const handleCloseCreatePostModal = () => setOpenCreatePostModal(false);

  const handleOpenCreatePostModal = () => {
    setOpenCreatePostModal(true);
    console.log("open post Modal", openCreatePostModal);
  };

  useEffect(() => {
    dispatch(getAllPostAction())
  }, [post.newComments])

  return (
    <div className="px-5">
      <Card
        className="flex flex-col items-center p-5 rounded-b-md my-8"
        sx={{ backgroundColor: "#fffae0" }}
      >
        <div className="flex items-center w-full mb-4">
          <Avatar className="flex flex-col items-center mr-4 cursor-pointer" />
          <input
            onClick={handleOpenCreatePostModal}
            readOnly
            className="outline-none w-[90%] rounded-full p-2 bg-transparent border border-[#3b4054]"
            type="text"
          />
        </div>
        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center gap-1">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ImageIcon />
            </IconButton>
            <span>media</span>
          </div>

          <div className="flex items-center gap-1">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <VideocamIcon />
            </IconButton>
            <span>video</span>
          </div>

          <div className="flex items-center gap-1">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ArticleIcon />
            </IconButton>
            <span>article</span>
          </div>
        </div>
      </Card>
      <div className="mt-5 space-y-5">
        {post.posts.map((item) => (
          <PostCard item = {item} />
        ))}
      </div>

      <div>
        <CreatePostModal
          handleClose={handleCloseCreatePostModal}
          open={openCreatePostModal}
        />
      </div>
    </div>
  );
};

export default MiddlePart;
