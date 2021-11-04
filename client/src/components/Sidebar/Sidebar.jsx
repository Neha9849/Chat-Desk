import * as React from "react";
import './Sidebar.css';
import { AppBar,Toolbar, IconButton,Typography,Button,Divider } from "@mui/material";
import {BsChatQuote} from "react-icons/bs";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <AppBar position="static" className="sidebarNav mb-3">
      <div className="d-flex justify-content-center ">
        <Toolbar className="d-flex justify-content-center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
            <BsChatQuote/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           ChatDesk
          </Typography>
        </Toolbar>
        </div>
      </AppBar>

     
     
      <div className="d-flex align-items-center flex-column ">
      <Button variant="outlined" className=" m-1 w-75 ">Home</Button>
      <Button variant="outlined" className=" m-1 w-75 ">Public Rooms</Button>
      <Button variant="outlined" className=" m-1 w-75 ">Private Rooms</Button>
      <Button variant="outlined" className=" m-1 w-75 ">Logout</Button>
     
      </div>


    </div>
  );
};
export default Sidebar;
