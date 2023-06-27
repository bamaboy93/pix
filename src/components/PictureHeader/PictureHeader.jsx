import { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import {
  LibraryAddOutlined,
  LibraryAddCheck,
  FavoriteBorder,
} from "@mui/icons-material";

import {
  AuthorInfo,
  Header,
  MuiButton,
  StyledFavIcon,
} from "./PictureHeader.styled";
import DownloadButton from "../DownloadButton/DownloadButton";

const PictureHeader = ({ user }) => {
  const [favorite, setFavorite] = useState(false);
  const [add, setAdd] = useState(false);

  return (
    <Header position="relative">
      <Toolbar>
        <AuthorInfo>
          <Avatar
            alt="user avatar"
            src={user.profile_image.large}
            sx={{ mr: 2 }}
          />
          <Typography variant="body">{user.username}</Typography>
        </AuthorInfo>
        <Stack direction="row" spacing={2} sx={{ mr: 12 }}>
          <Tooltip title="Like Picture">
            <MuiButton
              onClick={() => setFavorite(!favorite)}
              variant="outlined"
              startIcon={favorite ? <StyledFavIcon /> : <FavoriteBorder />}
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
        </Stack>
        <DownloadButton />
      </Toolbar>
    </Header>
  );
};

PictureHeader.propTypes = {
  user: PropTypes.shape({
    profile_image: PropTypes.shape({
      large: PropTypes.string,
    }),
    username: PropTypes.string,
  }),
};

export default PictureHeader;
