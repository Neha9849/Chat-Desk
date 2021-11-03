import * as React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Box sx={{ width: "100%", maxWidth: 300, bgcolor: 'background.paper'}}>
        <nav >
          <List >
            <ListItem disablePadding >
              <ListItemButton >
                <ListItemIcon >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary='Inbox' />
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary='Drafts' />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>
  );
};
export default Sidebar;
