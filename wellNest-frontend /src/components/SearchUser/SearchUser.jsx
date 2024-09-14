import { Avatar, Card, CardHeader } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { searchUserAction } from "../../redux/Auth/auth.action";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchUser = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();

  const handleSearchUser = (e) => {
    setUserName(e.target.value);
    dispatch(searchUserAction(e.target.value));
  };

  const handleClick = (userid) => {
    navigate(`/home/profile/${userid}`);
  };

  return (
    <div className="relative">
      <div className="pt-12">
        <input
          className="bg-transparent border border-[#78350f] outline-none w-full px-3 py-3 rounded-full"
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
            className="absolute z-10 top-[6rem] w-full max-w-md cursor-pointer"
            sx={{ color: "#78350f", backgroundColor: "#fffae0" }}
            onClick={() => handleClick(item.userid)}
          >
            <CardHeader
              avatar={
                <Avatar
                  src={
                    item.avatar ||
                    "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
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

export default SearchUser;
