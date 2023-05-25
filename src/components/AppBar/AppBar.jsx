import { useState } from "react";

import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";

export default function AppBar() {
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
      <ListItem
        sx={{
          p: "36px 0 0 0",
        }}
      >
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
        <Box>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          vitae nesciunt fugiat sint corrupti. Facilis excepturi fugiat mollitia
          illum a, nam repellat reiciendis quasi necessitatibus atque sed,
          doloremque accusamus nihil amet hic consequuntur laboriosam et modi
          quis cumque quae voluptatem.
        </Box>
      </Drawer>
    </>
  );
}
