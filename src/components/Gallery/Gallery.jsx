import PropTypes from "prop-types";
import GalleryItem from "../GalleryItem/GalleryItem";
import { Grid } from "./Gallery.styled";

const Gallery = ({ pictures }) => {
  return (
    <Grid>
      {pictures &&
        pictures.map(({ id, webformatURL }) => (
          <GalleryItem key={id} src={webformatURL} />
        ))}
    </Grid>
  );
};

Gallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
};

export default Gallery;
