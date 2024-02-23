import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Layout/Layout";

import Contacts from "../pages/Contacts/Contacts";

import TweetsPage from "../pages/Tweets/TweetsPage";

const Home = lazy(() => import("../pages/Home/Home"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
