import { Avatar, Card, CardHeader } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUserAction } from "../../redux/Auth/auth.action";
import { createChat } from "../../redux/Message/message.action";

const SearchUser2 = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  const handleSearchUser = (e) => {
    setUserName(e.target.value);
    dispatch(searchUserAction(e.target.value));
  };

  const handleClick = (userid) => {
    dispatch(createChat({ userid }));
  };

  return (
    <div className="relative">
      <div className="py-5">
        <input
          className="bg-transparent border border-[#fffbeb] outline-none w-full px-3 py-3 rounded-full"
          placeholder="Search user..."
          onChange={handleSearchUser}
          value={userName}
          type="text"
        />
      </div>
      {userName &&
        auth.searchUser.map((item) => (
          <Card
            key={item.userid}
            className="absolute z-10 top-[4.5rem] w-full max-w-md cursor-pointer"
            sx={{ color: "#78350f", backgroundColor: "#fffbeb" }}
            onClick={() => handleClick(item.userid)}
          >
            <CardHeader
              avatar={
                <Avatar
                  src={item.avatar || "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                  alt="User Avatar"
                  sx={{ width: "3.5rem", height: "3.5rem" }}
                />
              }
              title={`${item.firstName} ${item.lastName}`}
              subheader={`@${item.firstName.toLowerCase()}_${item.lastName}`}
            />
          </Card>
        ))}
    </div>
  );
};

export default SearchUser2;
