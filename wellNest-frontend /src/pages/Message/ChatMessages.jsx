import React from "react";
import { Avatar } from "@mui/material";

const ChatMessages = ({ item, currentUserId }) => {
  const isReqUserMessage = item.senderid === currentUserId;

  return (
    <div
      className={`flex items-start space-x-3 px-4 ${
        isReqUserMessage ? "flex-row-reverse" : ""
      }`}
    >
      <Avatar
        src={item.senderAvatar} 
        className={`${isReqUserMessage ? "order-last" : "order-first"}`}
      />
      <div
        className={`rounded-lg p-2 ${
          isReqUserMessage ? "bg-[#78350f] text-[#fffbeb]" : "bg-[#f1f5f9]"
        }`}
      >
        {item.content}
      </div>
    </div>
  );
};

export default ChatMessages;