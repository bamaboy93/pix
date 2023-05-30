import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

import { AccountCircle, Mail, Notifications } from "@mui/icons-material";

import { Header, Logo } from "./AppBar.styled";

const AppBar = () => {
  return (
    <Header>
      <Logo>PIX</Logo>

      <Box>
        <IconButton
          size="large"
          aria-label="show  new mails"
          color="secondary.dark"
        >
          <Badge badgeContent={1} color="error">
            <Mail />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show new notifications"
          color="secondary.dark"
        >
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          color="secondary.dark"
        >
          <AccountCircle />
        </IconButton>
      </Box>
    </Header>
  );
};

export default AppBar;
