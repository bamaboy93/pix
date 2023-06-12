import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useSearchQuery } from "../../hooks/useInfiniteQueries";
import { useFormat } from "../../hooks/useFormat";

import Gallery from "../../components/Gallery/Gallery";
import Container from "../../components/Container/Container";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import Alerts from "../../components/Alerts/Alerts";
import PaginationNotification from "../../components/PaginationNotification/PaginationNotification";
import PageTitle from "../../components/PageTitle/PageTitle";
import AppBar from "../../components/MainAppBar/MainAppBar";
import PageHeading from "../../components/PageHeading/PageHeading";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("query"));
  const { ref, inView } = useInView();

  const {
    data,
    isSuccess,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearchQuery(searchQuery);

  useEffect(() => {
    const newSearch = searchParams.get("query");
    if (searchQuery === newSearch) {
      return;
    }
    setSearchQuery(newSearch);
  }, [searchParams, searchQuery]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <>
      <AppBar />
      <Container>
        <PageHeading title={useFormat(searchQuery)} />
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
    </>
  );
};

export default Search;
