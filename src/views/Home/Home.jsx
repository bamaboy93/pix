import { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { usePicturesQuery } from "../../hooks/useInfiniteQueries";

import Gallery from "../../components/Gallery/Gallery";
import Container from "../../components/Container/Container";
import GalleryItem from "../../components/GalleryItem/GalleryItem";

const Home = () => {
  const { ref, inView } = useInView();
  const {
    data,
    isSuccess,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = usePicturesQuery();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);
  console.log(data);
  return (
    <Container>
      <Gallery>
        {isSuccess &&
          data.pages.map((page) =>
            page.data.map((picture) => (
              <GalleryItem key={picture.id} picture={picture} />
            ))
          )}
      </Gallery>
    </Container>
  );
};

export default Home;
