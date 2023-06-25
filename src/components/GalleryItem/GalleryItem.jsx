import PropTypes, { shape } from "prop-types";
import { Link } from "react-router-dom";
import { ImageListItem, Paper } from "@mui/material";

import { Image } from "./GalleryItem.styled";

const GalleryItem = ({ picture }) => {
  const { urls, alt_description } = picture;
  const { regular } = urls;
  return (
    <ImageListItem>
      <Link to={`/${picture.id}`}>
        <Paper elevation={3}>
          <Image src={regular} alt={alt_description} />
        </Paper>
      </Link>
    </ImageListItem>
  );
};

GalleryItem.propTypes = {
  picture: shape({
    urls: shape({
      regular: PropTypes.string,
    }),
    user: shape({
      username: PropTypes.string,
      profile_image: shape({
        full: PropTypes.string,
      }),
    }),
    alt_description: PropTypes.string,
  }).isRequired,
};

export default GalleryItem;
