import PropTypes from "prop-types";
import ImageList from "@mui/material/ImageList";
import { Container } from "./Gallery.styled";

const Gallery = ({ children }) => {
  return (
    <Container>
      <ImageList variant="masonry" cols={3} gap={16}>
        {children}
      </ImageList>
    </Container>
  );
};

Gallery.propTypes = {
  children: PropTypes.node,
};

export default Gallery;
