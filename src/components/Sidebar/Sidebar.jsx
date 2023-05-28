import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";

import {
  SettingsSuggestRounded,
  LogoutRounded,
  Login,
  NotificationsRounded,
} from "@mui/icons-material";

import { SideBox, Logo } from "./Sidebar.styled";
import AppBar from "../AppBar/AppBar";

const buttons = [
  { icon: <SettingsSuggestRounded />, name: "Settings" },
  { icon: <NotificationsRounded />, name: "Notifications" },
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
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <SideBox>
          <Logo href="/">PIX</Logo>
        </SideBox>

        <List>
          <AppBar />
          {buttons.map(({ icon, name }) => (
            <ListItem key={name} sx={{ p: "18px 0" }}>
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

        <List
          sx={{ height: 1, pb: 6, display: "flex", alignItems: "flex-end" }}
        >
          <ListItem
            sx={{
              p: 0,
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
                  {user ? <LogoutRounded /> : <Login />}
                </ListItemIcon>
              </Tooltip>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
