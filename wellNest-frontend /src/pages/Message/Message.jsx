import { Avatar, Grid, IconButton } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendIcon from "@mui/icons-material/Send";
import React, { useEffect, useState } from "react";
import SearchUser2 from "../../components/SearchUser/SearchUser2";
import UserChatCard from "./UserChatCard";
import ChatMessages from "./ChatMessages";
import { getAllChats } from "../../redux/Message/message.action";
import { useDispatch, useSelector } from "react-redux";

const Message = () => {
  const dispatch = useDispatch();
  const { message, auth } = useSelector((store) => store);
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState();
  const [selectedMessage, setSelectedMessage] = useState();

  useEffect(() => {
    dispatch(getAllChats());
  }, []);

  console.log("chats--------", message.chats);

  const handleSelectImage = () => {
    console.log("handle select image...");
  };

  const handleCreateMessage = (value) => {
    const message = {
      chatId: currentChat.id,
      content: value,
      image: selectedImage,
    };
  };

  return (
    <div>
      <Grid container className="h-screen overflow-y-hidden">
        <Grid className="px-5 bg-[#78350f] text-[#fffbeb]" item xs={3}>
          <div className="flex h-full justify-between space-x-2">
            <div className="w-full">
              <div className="flex space-x-4 items-center py-5">
                <IconButton sx={{ color: "#fffbeb" }}>
                  <WestIcon />
                </IconButton>
                <h1 className="text-xl font-bold">Home</h1>
              </div>

              <div className="h-[83vh]">
                <SearchUser2 />
                <div className="h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar">
                  {message.chats.map((item) => {
                   return  <div onClick={()=>{
                      setCurrentChat(item)
                      setMessages(item.messages)
                    }}>
                      <UserChatCard chat={item} />;
                    </div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid className="h-full" item xs={9}>
          <div>
            <div className="flex justify-between items-center border p-5 border-[#78350f]">
              <div className="flex items-center space-x-3 ">
                <Avatar src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <p>Code with samidha</p>
              </div>
            </div>

            <div className="hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5">
              <ChatMessages />
            </div>
          </div>

          <div className="sticky bottom-0 bg-transparent border-t border-[#78350f]">
            <div className="py-5 flex items-center justify-between space-x-5 px-5">
              <div className="flex items-center space-x-3 border border-[#78350f] rounded-full flex-grow">
                <input
                  className="bg-transparent w-full border-none py-3 px-5 outline-none"
                  id="text-input"
                  placeholder="Type message..."
                  type="text"
                />
                <IconButton>
                  <SendIcon />
                </IconButton>
              </div>

              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  className="hidden"
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton>
                    <AddPhotoAlternateIcon />
                  </IconButton>
                </label>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Message;
