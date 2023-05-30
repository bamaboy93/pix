import { Route, Routes } from "react-router-dom";

import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
