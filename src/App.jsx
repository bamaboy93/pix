import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./services/picsApi";

import Layout from "./views/Layout/Layout";
import { LinearProgress } from "@mui/material";

const HomeView = lazy(() => import("./views/Home/Home"));

const PictureView = lazy(() => import("./views/PicturePage/PicturePage"));

function App() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        <Route path="/" element={<Layout categories={data} />}>
          <Route path="/" element={<HomeView />} />
        </Route>
        <Route path=":pictureId" element={<PictureView />} />
      </Routes>
    </Suspense>
  );
}

export default App;
