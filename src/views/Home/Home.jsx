import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { usePicturesQuery } from "../../hooks/useInfiniteQueries";
import Gallery from "../../components/Gallery/Gallery";
import Container from "../../components/Container/Container";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import Alerts from "../../components/Alerts/Alerts";
import PaginationNotification from "../../components/PaginationNotification/PaginationNotification";

const Home = () => {
  const { ref, inView } = useInView();

  const {
    data,
    isError,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = usePicturesQuery();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <Container>
      {isError && (
        <Alerts message="500 Internal Server Error! Try again later." />
      )}

      <Gallery>
        {isSuccess &&
          data.pages.map((page) =>
            page.map((picture) => (
              <GalleryItem key={picture.id} picture={picture} />
            ))
          )}
        <div ref={ref}>
          <PaginationNotification
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </div>
      </Gallery>
    </Container>
  );
};

export default Home;
