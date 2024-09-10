import React, { useEffect, useState, useRef } from "react";
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
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const Message = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, auth } = useSelector((store) => store);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  const chatContainerRef = useRef(null);
  const stompClientRef = useRef(null);

  useEffect(() => {
    dispatch(getAllChats());
  }, [dispatch]);

  useEffect(() => {
    if (currentChat) {
      setMessages(currentChat.messages || []);
    }
  }, [currentChat]);

  useEffect(() => {
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
    const newMsg = {
      chatid: currentChat.chatid,
      content: value,
      image: selectedImage,
    };
    if (stompClientRef.current) {
      stompClientRef.current.publish({
        destination: `/app/chat/${currentChat.chatid}`,
        body: JSON.stringify(newMsg),
      });
    }
    dispatch(createMessage({ message: newMsg }));
    setSelectedImage(null);
    setNewMessage("");
  };

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const client = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log(str),
      onConnect: onConnect,
      onStompError: onErr,
    });
    client.activate();
    stompClientRef.current = client;
  }, []);

  const onConnect = () => {
    console.log("WebSocket connected!");
  };

  const onErr = (error) => {
    console.error("Error:", error);
  };

  useEffect(() => {
    if (stompClientRef.current && auth.user && currentChat) {
      const chatid = currentChat?.chatid;
      if (chatid) {
        const subscription = stompClientRef.current.subscribe(`/user/${auth.user.userid}/private`, onMessageReceive);
        return () => subscription.unsubscribe();
      }
    }
  }, [stompClientRef.current, currentChat, auth.user]);

  const onMessageReceive = (payload) => {
    const receivedMessage = JSON.parse(payload.body);
    console.log("Message received from WebSocket: ", receivedMessage);
    setMessages((prevMessages) => [...prevMessages, receivedMessage]);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      <Grid container className="h-screen overflow-y-hidden">
        <Grid className="px-5 bg-[#78350f] text-[#fffbeb]" item xs={3}>
          <div className="flex h-full justify-between space-x-2">
            <div className="w-full">
              <div className="flex space-x-4 items-center py-5">
                <IconButton sx={{ color: "#fffbeb" }} onClick={() => navigate("/home")}>
                  <WestIcon />
                </IconButton>
                <h1 className="text-xl font-bold">Home</h1>
              </div>

              <div className="h-[83vh]">
                <SearchUser2 />
                <div className="h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar">
                  {message.chats.map((item) => (
                    <div key={item.chatid} onClick={() => setCurrentChat(item)}>
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
                  <Avatar src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg" />
                  <p>
                    {auth.user.userid === currentChat.users[0].userid
                      ? `${currentChat.users[1].firstName} ${currentChat.users[1].lastName}`
                      : `${currentChat.users[0].firstName} ${currentChat.users[0].lastName}`}
                  </p>
                </div>
              </div>

              <div ref={chatContainerRef} className="hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5">
                {messages.length === 0 ? (
                  <p>No messages to display</p>
                ) : (
                  messages.map((item) => (
                    <ChatMessages key={item.messageid} item={item} currentUserId={auth.user.userid} />
                  ))
                )}
              </div>
              <div className="sticky bottom-0 bg-transparent border-t border-[#78350f]">
                <div className="py-5 flex items-center justify-between space-x-5 px-5">
                  <div className="flex items-center space-x-3 border border-[#78350f] rounded-full flex-grow">
                    <input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
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
                      <input type="file" hidden onChange={handleSelectImage} />
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
