import React from 'react'

const ChatMessages = () => {
  return (
    <div className={`flex ${true ? "justify-start" : "justify-end"}`}>
        <div className={`p-1 ${true ? "rounded-md" : "px-5 rounded-full"} bg-[#78350f]`}>
            
            {false && <img src='https://images.pexels.com/photos/3855560/pexels-photo-3855560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='message image' className='w-[12rem] h-[17rem] object-cover rounded-md'></img>}
            <p className={`${false ? "py-2 text-[#fffbeb]" : "py-1 text-[#fffbeb]"}`}>
                message
            </p>
        </div>
    </div>
  )
}

export default ChatMessages
