import PropTypes from "prop-types";
import { Wrapper, Image, ImageWrapper } from "./PictureWrapper.styled";

const PictureWrapper = ({ picture, alt }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={picture.regular} alt={alt} />
      </ImageWrapper>
    </Wrapper>
  );
};

PictureWrapper.propTypes = {
  picture: PropTypes.shape({
    regular: PropTypes.string,
  }),
  alt: PropTypes.string,
};

export default PictureWrapper;
