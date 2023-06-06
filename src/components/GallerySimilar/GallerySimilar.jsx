import PropTypes from "prop-types";
import ImageList from "@mui/material/ImageList";

const GallerySimilar = ({ children }) => {
  return (
    <ImageList variant="woven" cols={3} gap={12}>
      {children}
    </ImageList>
  );
};

GallerySimilar.propTypes = {
  children: PropTypes.node,
};

export default GallerySimilar;
