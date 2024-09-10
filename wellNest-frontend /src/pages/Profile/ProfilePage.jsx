import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Box, Tabs, Tab, Button, Card } from "@mui/material";
import PostCard from "../../components/Post/PostCard";
import ProfileModal from "./ProfileModal";
import { getAllPostAction } from "../../redux/Post/post.action"; // Ensure you have this action defined for fetching posts

const tabs = [
  { value: "post", name: "Posts" },
  { value: "liked", name: "Liked" },
];

const ProfilePage = () => {
  const { id } = useParams();
  const { auth, post } = useSelector((store) => store); // Grab both auth and post from the store
  const dispatch = useDispatch();
  const [value, setValue] = useState("post"); // To toggle between posts and liked posts
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getAllPostAction()); // Fetch all posts when the component mounts
  }, []);

  // Filter posts created by the user
  const userPosts = post.posts?.filter((p) => p.creatorId === auth.user?.userid);

  // Filter posts liked by the user
  const likedPosts = post.posts?.filter((p) => auth.user?.likedPosts?.includes(p.postid));

  return (
    <Card className="p-8 w-full" style={{ backgroundColor: "#fff6cc" }}>
      <div className="rounded-md text-[#78350f]">
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
        <div className="px-5 flex justify-between items-center mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://marketplace.canva.com/EAFltPVX5QA/1/0/1600w/canva-cute-cartoon-anime-girl-avatar-ZHBl2NicxII.jpg"
          />
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
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">
              {auth.user?.firstName + " " + auth.user?.lastName}
            </h1>
            <p>
              @
              {auth.user?.firstName.toLowerCase() +
                "_" +
                auth.user?.lastName.toLowerCase()}
            </p>
          </div>
          <div className="flex gap-2 items-center py-3">
            <span>{userPosts?.length || 0} posts</span>
            <span>{auth.user?.followers?.length} followers</span>
            <span>{auth.user?.followings?.length} following</span>
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
            {value === "post" && (
              <div className="space-y-5 w-[70%] my-10">
                {userPosts?.map((item) => (
                  <div key={item.postid} className="border border-slate-100 rounded-md">
                    <PostCard item={item} />
                  </div>
                ))}
              </div>
            )}
            {value === "liked" && (
              <div className="space-y-5 w-[70%] my-10">
                {likedPosts?.map((item) => (
                  <div key={item.postid} className="border border-slate-100 rounded-md">
                    <PostCard item={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <ProfileModal open={open} handleClose={handleClose} />
    </Card>
  );
};

export default ProfilePage;
