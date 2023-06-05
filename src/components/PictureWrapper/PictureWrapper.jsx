import { Wrapper, Image } from "./PictureWrapper.styled";

const PictureWrapper = ({ picture, alt }) => {
  return (
    <Wrapper>
      <Image src={picture} srcSet={picture + "&w=1500&dpr=2"} alt={alt} />
    </Wrapper>
  );
};

export default PictureWrapper;
