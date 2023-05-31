import { useInfiniteQuery } from "@tanstack/react-query";
import { getImages } from "../services/picsApi";

function usePicturesQuery() {
  return useInfiniteQuery(
    ["pictures"],
    ({ pageParam }) => getImages(pageParam),

    {
      getNextPageParam: (lastPage, allPages) => {
        console.log(lastPage);
        const nextPage = allPages.length + 1;
        return lastPage.hits.length !== 0 ? nextPage : undefined;
      },
    }
  );
}

export { usePicturesQuery };
