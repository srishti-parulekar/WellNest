import React from "react";
import { Avatar } from "@mui/material";

const ChatMessages = ({ item, currentUserId }) => {
  // Check if the message was sent by the current user
  const isReqUserMessage = item.user.userid === currentUserId;

  return (
    <div
      className={`flex items-start space-x-3 px-4 ${
        isReqUserMessage ? "flex-row-reverse" : ""
      }`}
    >
      <Avatar
        src={
          item.user.avatar || // Assuming avatar is inside the user object
          "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      />
      <div
        className={`${
          isReqUserMessage ? "bg-[#fffbeb]" : "bg-[#d1d5db]"
        } p-3 rounded-lg max-w-[60%]`}
      >
        {item.content && <p className="text-[#78350f]">{item.content}</p>}
        {item.image && (
          <img
            src={item.image}
            alt="Message attachment"
            className="max-w-full mt-2"
          />
        )}
      </div>
    </div>
  );
};

export default ChatMessages;
