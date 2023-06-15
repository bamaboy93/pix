import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, IconButton, Toolbar } from "@mui/material";
import {
  Search,
  AccountCircle,
  Mail,
  Notifications,
  MoreHoriz,
} from "@mui/icons-material";
import {
  Form,
  SearchIconWrapper,
  StyledInputBase,
  Logo,
  AppBarLine,
  Actions,
  MobileActions,
} from "./MainAppBar.styled";

const MainAppBar = () => {
  const [query, setQuery] = useState("");
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handelQueryChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      alert("Please, enter your query !");
      return;
    }
    navigate({
      search: `query=${query}`,
    });

    setQuery("");
  };

  return (
    <AppBarLine visible={visible ? visible.toString() : undefined}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Logo to="/">PIX</Logo>

        <Form onSubmit={handleSubmit}>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={query}
            onChange={handelQueryChange}
          />
        </Form>

        <Actions>
          <IconButton size="large" aria-label="show new mails" color="inherit">
            <Badge badgeContent={1} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show new notifications"
            color="inherit"
          >
            <Badge badgeContent={3} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Actions>
        <MobileActions>
          <IconButton size="large" aria-label="show more" color="inherit">
            <MoreHoriz />
          </IconButton>
        </MobileActions>
      </Toolbar>
    </AppBarLine>
  );
};

export default MainAppBar;
