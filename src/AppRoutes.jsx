import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const Home     = lazy(() => import("./components/Home"));
const Products = lazy(() => import("./components/Products"));
const About    = lazy(() => import("./components/About"));
const Contacts = lazy(() => import("./components/Contacts"));
const NotFound = lazy(() => import("./components/NotFound"));

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;