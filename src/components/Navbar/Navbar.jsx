import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import "./Navbar.css";
const Navbar = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar className='appbar'>
          <Button color='inherit'>
            ChatDesk
          </Button>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
