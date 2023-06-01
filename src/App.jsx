import { Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "./services/picsApi";

import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";
import PicturePage from "./views/PicturePage/PicturePage";

function App() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  return (
    <Routes>
      <Route path="/" element={<Layout categories={data} />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/:pictureId" element={<PicturePage />} />
    </Routes>
  );
}

export default App;
