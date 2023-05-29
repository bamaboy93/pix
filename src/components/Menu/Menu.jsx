import { useState } from "react";
import {
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import { Wrapper } from "./Menu.styled";
import Header from "../Header/Header";
import SearchWrapper from "../SearchWrapper/SearchWrapper";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };
  return (
    <>
      <ListItem sx={{ p: "18px 0" }}>
        <ListItemButton
          onClick={toggleDrawer()}
          sx={{
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "#b7ec67",
            },
          }}
        >
          <Tooltip title="Menu">
            <ListItemIcon sx={{ minWidth: 0 }}>
              <WidgetsRoundedIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItemButton>
      </ListItem>
      <Drawer anchor="top" open={open} onClose={toggleDrawer()}>
        <Wrapper>
          <Header />
          <SearchWrapper />
        </Wrapper>
      </Drawer>
    </>
  );
}
