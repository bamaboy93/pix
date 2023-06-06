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

export default PictureWrapper;
