import { useInfiniteQuery } from "@tanstack/react-query";
import { getImages, getImagesByQuery } from "../services/picsApi";

function usePicturesQuery() {
  return useInfiniteQuery({
    queryKey: ["pictures"],
    queryFn: ({ pageParam = 1 }) => getImages(pageParam),

    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.length !== 0 ? nextPage : undefined;
    },
  });
}

function useSearchQuery(query) {
  return useInfiniteQuery({
    queryKey: ["search", query],
    queryFn: ({ pageParam = 1 }) => getImagesByQuery(query, pageParam),

    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.length !== 0 ? nextPage : undefined;
    },
  });
}

export { usePicturesQuery, useSearchQuery };
