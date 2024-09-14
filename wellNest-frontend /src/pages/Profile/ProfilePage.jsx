import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Box, Tabs, Tab, Button, Card } from "@mui/material";
import PostCard from "../../components/Post/PostCard";
import ProfileModal from "./ProfileModal";
import { getAllPostAction } from "../../redux/Post/post.action";
import { getUserByIdAction } from "../../redux/Auth/auth.action";

const tabs = [
  { value: "post", name: "Posts" },
  { value: "liked", name: "Liked" },
];

const ProfilePage = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState("post");
  const { auth, post } = useSelector((store) => store);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Filter posts based on the logged-in user ID
  const userId = auth.user?.userid;
  const userPosts = post.posts?.filter(post => post.user.userid === userId);
  const likedPosts = post.posts?.filter(post => post.liked.some(like => like.userid === userId));

  return (
    <Card className="m-10 ml-6">
      <div className="rounded-md text-[#78350f] bg-[#fffae0]">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md object-cover"
            src="https://cdn.pixabay.com/photo/2016/06/24/15/48/pattern-1477380_1280.png"
            alt="Profile Background"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "fallback-image-url.png";
            }}
          />
        </div>
        <div className="px-5 flex justify-between items-center h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://marketplace.canva.com/EAFltPVX5QA/1/0/1600w/canva-cute-cartoon-anime-girl-avatar-ZHBl2NicxII.jpg"
          />
          {true ? (
            <Button
              sx={{
                borderRadius: "20px",
                color: "#78350f",
                borderColor: "#78350f",
              }}
              variant="outlined"
              onClick={handleOpenProfileModal}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              sx={{
                borderRadius: "20px",
                color: "#78350f",
                borderColor: "#78350f",
              }}
              variant="outlined"
              onClick={() => {}}
            >
              Follow
            </Button>
          )}
        </div>
        <div className="px-8">
          <div>
            <h1 className="py-1 font-bold text-xl">
              {auth.user?.firstName + " " + auth.user?.lastName}
            </h1>
            <p>
              @
              {auth.user?.firstName?.toLowerCase() +
                "_" +
                auth.user?.lastName?.toLowerCase()}
            </p>
          </div>
          <div className="flex gap-2 items-center py-3">
            <span>{userPosts?.length || 0} posts</span>
            <span>{auth.user?.followers?.length || 0} followers</span>
            <span>{auth.user?.followings?.length || 0} following</span>
          </div>
        </div>
        <section className="mt-4">
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="Profile tabs">
              {tabs.map((item) => (
                <Tab key={item.value} value={item.value} label={item.name} />
              ))}
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
                {userPosts?.map((item) => (
                  <div key={item.postid} className="border border-slate-100 rounded-md">
                    <PostCard item={item} />
                  </div>
                ))}
              </div>
            ) : value === "liked" ? (
              <div className="space-y-5 w-[70%] my-10">
                {likedPosts?.map((item) => (
                  <div key={item.postid} className="border border-slate-100 rounded-md">
                    <PostCard item={item} />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      </div>
      <ProfileModal open={open} handleClose={handleClose} />
    </Card>
  );
};

export default ProfilePage;
