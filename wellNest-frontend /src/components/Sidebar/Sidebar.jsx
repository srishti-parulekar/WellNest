import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Divider, Button, Menu, MenuItem, Card } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { logoutUserAction } from "../../redux/Auth/auth.action"; // Import the logout action
import { navigationMenu } from "./SidebarNav";

const Sidebar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch(); // Use dispatch to trigger logout action
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (item) => {
    if (item.title === "Profile") {
      navigate(`/home/profile/${auth.user?.userid}`);
    } else if (item.title === "Home") {
      navigate("/home");
    } else {
      navigate(item.path);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUserAction()); // Dispatch logout action
    navigate("/login"); // Redirect to login page after logout
    handleClose(); // Close the dropdown menu
  };

  return (
    <Card
      className="card h-screen flex flex-col justify-between py-5"
      style={{ backgroundColor: "#78350f", color: "#fffae0" }}
    >
      <div className="space-y-8 pl-5 pt-5">
        <div className=" pb-7">
          <span className="logo font-semi-bold text-3xl">WellNest</span>
        </div>
        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div
              key={item.title}
              onClick={() => handleNavigate(item)}
              className="cursor-pointer flex space-x-3 items-center text-[#fffae0]"
            >
              {item.icon}
              <p className="text-2xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider />
        <div className="pl-5 flex items-center justify-between pt-5">
          <div className="flex items-center space-x-3">
            <Avatar src="" />
            <div>
              <p className="font-bold">
                {auth.user?.firstName + " " + auth.user?.lastName}
              </p>
              <p className="opacity-70">
                {auth.user?.firstName.toLowerCase() +
                  "_" +
                  auth.user?.lastName.toLowerCase()}
              </p>
            </div>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              minWidth: "auto",
              padding: "0",
              margin: "0 10px",
              color: "#fffae0",
              backgroundColor: "transparent",
              border: "1px solid transparent",
              "&:hover": {
                backgroundColor: "rgba(120, 53, 15, 0.1)",
                border: "1px solid #78350f",
              },
            }}
          >
            <MoreVertIcon sx={{ color: "#fffae0" }} />{" "}
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
