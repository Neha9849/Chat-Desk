import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button ,IconButton,Badge} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./Navbar.css";
const Navbar = () => {
  return (
    <Box>
      <AppBar position='static' color="inherit">
        <Toolbar className='appbar d-flex justify-content-end'>
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
          <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge badgeContent={3} color="error">
          <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
          
        >
          
          <AccountCircle className="fs-2"/>
        </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
