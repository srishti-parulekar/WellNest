import React, { useState } from "react";
import {
  Box,
  Avatar,
  IconButton,
  Button,
  Backdrop,
  CircularProgress,
  Modal,
} from "@mui/material";
import { useFormik } from "formik";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
import { useDispatch } from "react-redux";
import { createPostAction } from "../../redux/Post/post.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fffbeb",
  border: "2px solid #78350f",
  boxShadow: 24,
  p: 4,
  borderRadius: "0.6rem",
  outline: "none",
};

const CreatePostModal = ({ handleClose, open }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: "",
    },
    onSubmit: (values) => {
      console.log("Formik values", values);
      dispatch(createPostAction(values));
    },
  });

  const handleSelectImage = async (event) => {
    setIsLoading(true);
    const file = event.target.files[0];
    if (file) {
      const imageUrl = await uploadToCloudinary(file, "image");
      if (imageUrl) {
        setSelectedImage(imageUrl);
        formik.setFieldValue("image", imageUrl);
      }
    }
    setIsLoading(false);
  };

  const handleSelectVideo = async (event) => {
    setIsLoading(true);
    const file = event.target.files[0];
    if (file) {
      const videoUrl = await uploadToCloudinary(file, "video");
      if (videoUrl) {
        setSelectedVideo(videoUrl);
        formik.setFieldValue("video", videoUrl);
      }
    }
    setIsLoading(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="flex space-x-4 items-center">
              <Avatar />
              <div>
                <p className="font-bold text-lg">
                  Code with Srishti and Samidha
                </p>
                <p className="text-sm">@codewithSamidhaAndSrishti</p>
              </div>
            </div>
            <textarea
              className="outline-none w-full mt-5 p-2 bg-transparent border border-[#78350f] rounded-md"
              placeholder="Write a caption..."
              name="caption"
              onChange={formik.handleChange}
              value={formik.values.caption}
              rows={4}
            ></textarea>

            <div className="flex space-x-5 items-center mt-5">
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  style={{ display: "none" }}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton color="primary" component="span">
                    <ImageIcon />
                  </IconButton>
                </label>
                <span>Image</span>
              </div>
              <div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleSelectVideo}
                  style={{ display: "none" }}
                  id="video-input"
                />
                <label htmlFor="video-input">
                  <IconButton color="primary" component="span">
                    <VideocamIcon />
                  </IconButton>
                </label>
                <span>Video</span>
              </div>
            </div>

            {selectedImage && (
              <div>
                <img
                  className="h-[10rem] mt-4"
                  src={selectedImage}
                  alt="Selected"
                />
              </div>
            )}

            {selectedVideo && (
              <div>
                <video
                  className="h-[10rem] mt-4"
                  src={selectedVideo}
                  controls
                />
              </div>
            )}

            <div className="flex w-full justify-end mt-5">
              <Button
                variant="contained"
                type="submit"
                sx={{ borderRadius: "1.5rem" }}
              >
                Post
              </Button>
            </div>
          </div>
        </form>
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Modal>
  );
};

export default CreatePostModal;
