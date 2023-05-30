import PropTypes from "prop-types";
import ImageList from "@mui/material/ImageList";

const Gallery = ({ children }) => {
  return (
    <ImageList variant="masonry" cols={3} gap={16}>
      {children}
    </ImageList>
  );
};

Gallery.propTypes = {
  children: PropTypes.node,
};

export default Gallery;
