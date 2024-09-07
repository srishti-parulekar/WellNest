import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import { useSelector } from "react-redux";

const UserChatCard = ({ chat }) => {

  const { message, auth } = useSelector(store => store); 

  return (
    <Card
      sx={{ marginBottom: 2, color: "#78350f", backgroundColor: "#fffbeb" }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: "3.5rem", height: "3.5rem", fontSize: "1.5rem" }}
            src="https://images.pexels.com/photos/20703724/pexels-photo-20703724/free-photo-of-a-cat-looking-through-a-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          />
        }
        action={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
        title={auth.user.id === chat.users[0].id?chat.users[1].firstName+" "+chat.users[1].lastName:chat.users[0].firstName+" "+chat.users[0].lastName}
        subheader={"new message"}
      />
    </Card>
  );
};

export default UserChatCard;
