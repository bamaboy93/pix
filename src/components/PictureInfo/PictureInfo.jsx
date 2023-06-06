import { Stack, Link } from "@mui/material";
import GallerySimilar from "../GallerySimilar/GallerySimilar";
import GalleryItem from "../GalleryItem/GalleryItem";
import { InfoWrapper, Tags } from "./PictureInfo.styled";

const PictureInfo = ({ picture }) => {
  const { tags, related_collections } = picture;
  return (
    <InfoWrapper>
      <Tags>
        <Stack direction="row" spacing={2}>
          {tags.slice(0, 4).map((tag) => (
            <Link key={tag.title} href="#" color="inherit" underline="hover">
              #{tag.title}
            </Link>
          ))}
        </Stack>
      </Tags>
      <GallerySimilar>
        {related_collections.results.map((collection) =>
          collection.preview_photos.map((photo) => (
            <GalleryItem key={photo.id} picture={photo} />
          ))
        )}
      </GallerySimilar>
    </InfoWrapper>
  );
};

export default PictureInfo;
