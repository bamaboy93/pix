import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ImageListItem from "@mui/material/ImageListItem";
import { Bottom, Card, Image, Overlay, Top } from "./GalleryItem.styled";
import { Typography } from "@mui/material";

const GalleryItem = ({ picture }) => {
  const { webformatURL, user, userImageURL } = picture;
  return (
    <ImageListItem>
      <Card>
        <Overlay>
          <Top>
            <IconButton aria-label="like" color="secondary">
              <FavoriteIcon />
            </IconButton>
          </Top>
          <Bottom>
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Avatar alt="user" src={userImageURL} />
              <Typography variant="body" color="secondary">
                {user}
              </Typography>
            </Stack>
          </Bottom>
        </Overlay>

        <Image
          src={`${webformatURL}?w=248&fit=crop&auto=format`}
          srcSet={`${webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt="image"
        />
      </Card>
    </ImageListItem>
  );
};

GalleryItem.propTypes = {
  picture: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    userImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default GalleryItem;
