import { useState } from "react";
import { Avatar, Button, Stack, Tooltip, Typography } from "@mui/material";
import {
  LibraryAddOutlined,
  LibraryAddCheck,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

import { AuthorInfo, Header, MuiButton } from "./PictureHeader.styled";
import DownloadButton from "../DownloadButton/DownloadButton";

const PictureHeader = ({ user }) => {
  const [favorite, setFavorite] = useState(false);
  const [add, setAdd] = useState(false);
  return (
    <Header>
      <AuthorInfo>
        <Avatar alt="none" src={user.profile_image.large} sx={{ mr: 3 }} />
        <Typography variant="body">{user.username}</Typography>
      </AuthorInfo>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Like Picture">
          <MuiButton
            onClick={() => setFavorite(!favorite)}
            variant="outlined"
            startIcon={favorite ? <Favorite /> : <FavoriteBorder />}
          >
            Like
          </MuiButton>
        </Tooltip>

        <Tooltip title="Add to collection">
          <MuiButton
            onClick={() => setAdd(!add)}
            variant="outlined"
            endIcon={add ? <LibraryAddCheck /> : <LibraryAddOutlined />}
          >
            Add To Collection
          </MuiButton>
        </Tooltip>
        <DownloadButton />
      </Stack>
    </Header>
  );
};

export default PictureHeader;
