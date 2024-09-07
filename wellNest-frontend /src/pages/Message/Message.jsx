import { Avatar, Grid } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const Message = () => {
  const handleSelectImage = () => {
    console.log("handle select image...");
  };

  return (
    <div>
      <Grid container className="h-screen overflow-y-hidden">
        <Grid className="px-5" item xs={3}>
          <div className="flex h-full justify-between space-x-2">
            <div className="w-full">
              <div className="flex space-x-4 items-center py-5">
                <WestIcon />
                <h1 className="text-x1 font-bold">Home</h1>
              </div>

              <div className="h-[83vh]">
                <div>searchUser</div>

                <div className="h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar"></div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div>
            <div className="flex justify-between items-center border p-5">
              <div className="flex items-center space-x-3">
                <Avatar src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <p>Code with samidha</p>
              </div>
            </div>
            <div className="hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5">
              message
            </div>
          </div>
          <div className="sticky bottom-0 border">
            <div className="py-5 flex items-center justify-center space-x-5">
              <div>
                <input
                  className="bg-transparent border border-[#78350f] rounded-full w-[90%] py-3 px-5" id="text-input"
                  placeholder="Type message..."
                  type="text"
                />
                <label htmlFor="text-input">
                  <SendIcon />
                </label>
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
                  <AddPhotoAlternateIcon />
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
