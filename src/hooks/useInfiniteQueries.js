import { useInfiniteQuery } from "@tanstack/react-query";
import { getImages } from "../services/picsApi";

function usePicturesQuery() {
  return useInfiniteQuery(
    ["pictures"],
    ({ pageParam = 1 }) => getImages(pageParam),
    {
      getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
      getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
    }
    // {
    //   getNextPageParam: (lastPage, allPages) => {
    //     const nextPage = allPages.length + 1;
    //     return lastPage.results.length !== 0 ? nextPage : undefined;
    //   },
    // }
  );
}

export { usePicturesQuery };
