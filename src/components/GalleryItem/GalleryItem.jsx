import PropTypes from "prop-types";
import { Image, Item } from "./GalleryItem.styled";

const GalleryItem = ({ src }) => {
  return (
    <Item>
      <Image src={src} alt="image" />
    </Item>
  );
};

GalleryItem.propTypes = {
  src: PropTypes.string,
};

export default GalleryItem;
