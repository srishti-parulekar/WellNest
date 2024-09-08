import React from 'react'
import { useSelector } from 'react-redux';

const ChatMessages = ({ item }) => {
  const { auth } = useSelector((store) => store);
  const isRequUserMessage = auth.user?.id === item.user?.id;
  console.log('Message item:', item);

  return (
    <div className={`flex ${isRequUserMessage ? "justify-start" : "justify-end"}`}>
      <div className={`p-1 ${item.image ? "rounded-md" : "px-5 rounded-full"} bg-[#78350f]`}>
        {item.image && <img src={item.image} alt='message' className='w-[12rem] h-[17rem] object-cover rounded-md' />}
        
        <p className={`${item.image ? "py-2 text-[#fffbeb]" : "py-1 text-[#fffbeb]"}`}>
          message
        </p>
      </div>
    </div>
  );
}

export default ChatMessages;
