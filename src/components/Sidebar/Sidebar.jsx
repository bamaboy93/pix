import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";

import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LoginIcon from "@mui/icons-material/Login";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { SideBox, Logo } from "./Sidebar.styled";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const buttons = [
  { icon: <SettingsSuggestRoundedIcon />, name: "Settings" },
  { icon: <NotificationsRoundedIcon />, name: "Notifications" },
];

const user = false;

const Sidebar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: 70,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 70,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <SideBox>
          <Logo href="/">PIX</Logo>
        </SideBox>
        <Divider />

        <List>
          <AppBar />
          {buttons.map(({ icon, name }) => (
            <ListItem key={name} sx={{ p: "12px 0" }}>
              <ListItemButton
                sx={{
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#b7ec67",
                  },
                }}
              >
                <Tooltip title={name}>
                  <ListItemIcon sx={{ minWidth: 0 }}>{icon}</ListItemIcon>
                </Tooltip>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem
            sx={{
              p: "36px 0 0 0",
            }}
          >
            <ListItemButton
              sx={{
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "#b7ec67",
                },
              }}
            >
              <Tooltip title={user ? "Logout" : "Login"}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  {user ? <LogoutRoundedIcon /> : <LoginIcon />}
                </ListItemIcon>
              </Tooltip>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Sidebar;
