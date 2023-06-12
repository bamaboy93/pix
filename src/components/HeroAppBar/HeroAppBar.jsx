import { Box, IconButton, Badge } from "@mui/material";
import { AccountCircle, Mail, Notifications } from "@mui/icons-material";
import { Header, Logo } from "./HeroAppBar.styled";

const HeroAppBar = () => {
  return (
    <Header>
      <Logo>PIX</Logo>

      <Box>
        <IconButton
          size="large"
          aria-label="show new mails"
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

export default HeroAppBar;
