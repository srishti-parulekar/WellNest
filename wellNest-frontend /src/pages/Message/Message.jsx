import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Grid, IconButton } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendIcon from "@mui/icons-material/Send";
import createMessage, { getAllChats } from "../../redux/Message/message.action";
import SearchUser2 from "../../components/SearchUser/SearchUser2";
import UserChatCard from "./UserChatCard";
import ChatMessages from "./ChatMessages";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";

const Message = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, auth } = useSelector((store) => store);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState(""); // State for the new message input

  useEffect(() => {
    dispatch(getAllChats());
  }, [dispatch]);

  useEffect(() => {
    // Update messages when currentChat changes
    if (currentChat && currentChat.messages) {
      setMessages(currentChat.messages);
    }
  }, [currentChat]);

  useEffect(() => {
    // Listen to message creation success and update messages state
    if (message.createdMessage && message.createdMessage.chatid === currentChat?.chatid) {
      setMessages((prevMessages) => [...prevMessages, message.createdMessage]);
    }
  }, [message.createdMessage, currentChat]);

  const handleSelectImage = async (e) => {
    setLoading(true);
    try {
      const imgUrl = await uploadToCloudinary(e.target.files[0], "image");
      setSelectedImage(imgUrl);
    } catch (error) {
      console.error("Image upload failed", error);
    }
    setLoading(false);
  };

  const handleCreateMessage = (value) => {
    if (!currentChat || !currentChat.chatid) {
      console.error("No chat selected or chat ID is missing");
      return;
    }
    const message = {
      chatId: currentChat.chatid,  // Using chatid consistently
      content: value,
      image: selectedImage,
    };
    dispatch(createMessage(message));
    setSelectedImage(null); // Clear image after sending message
    setNewMessage(""); // Clear input field after sending
  };

  return (
    <div>
      <Grid container className="h-screen overflow-y-hidden">
        <Grid className="px-5 bg-[#78350f] text-[#fffbeb]" item xs={3}>
          <div className="flex h-full justify-between space-x-2">
            <div className="w-full">
              <div className="flex space-x-4 items-center py-5">
                <IconButton sx={{ color: "#fffbeb" }} onClick={() => navigate('/home')}>
                  <WestIcon />
                </IconButton>
                <h1 className="text-xl font-bold">Home</h1>
              </div>

              <div className="h-[83vh]">
                <SearchUser2 />
                <div className="h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar">
                  {message.chats.map((item) => (
                    <div
                      key={item.chatid}  // Using chatid consistently
                      onClick={() => {
                        setCurrentChat(item);
                        setMessages(item.messages || []);  // Safely handling messages array
                      }}
                    >
                      <UserChatCard chat={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid className="h-full" item xs={9}>
          {currentChat ? (
            <div>
              <div className="flex justify-between items-center border p-5 border-[#78350f]">
                <div className="flex items-center space-x-3">
                  <Avatar src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <p>
                    {auth.user.id === currentChat.users[0].id
                      ? `${currentChat.users[1].firstName} ${currentChat.users[1].lastName}`
                      : `${currentChat.users[0].firstName} ${currentChat.users[0].lastName}`}
                  </p>
                </div>
              </div>

              <div className="hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5">
                {messages.map((item) => (
                  <ChatMessages key={item.messageid} item={item} />  // Ensure unique key
                ))}
              </div>
              <div className="sticky bottom-0 bg-transparent border-t border-[#78350f]">
                <div className="py-5 flex items-center justify-between space-x-5 px-5">
                  <div className="flex items-center space-x-3 border border-[#78350f] rounded-full flex-grow">
                    <input
                      value={newMessage}  // Bind input value to state
                      onChange={(e) => setNewMessage(e.target.value)}  // Update state on input change
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && newMessage.trim()) {
                          handleCreateMessage(newMessage);
                        }
                      }}
                      className="bg-transparent w-full border-none py-3 px-4 outline-none text-[#78350f]"
                      placeholder="Type a message..."
                    />
                    <IconButton component="label">
                      <AddPhotoAlternateIcon />
                      <input
                        type="file"
                        hidden
                        onChange={handleSelectImage}
                      />
                    </IconButton>
                    <IconButton onClick={() => handleCreateMessage(newMessage)}>
                      <SendIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <p>Select a chat to start messaging</p>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Message;
