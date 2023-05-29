import PropTypes from "prop-types";
import ImageList from "@mui/material/ImageList";
import GalleryItem from "../GalleryItem/GalleryItem";

const Gallery = ({ pictures }) => {
  return (
    <ImageList variant="masonry" cols={3} gap={16}>
      {pictures &&
        pictures.map((picture) => (
          <GalleryItem key={picture.id} picture={picture} />
        ))}
    </ImageList>
  );
};

Gallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
};

export default Gallery;
