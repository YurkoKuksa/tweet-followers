import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainBox } from "./Layout.styled";

const Layout = () => {
  return (
    <div>
      <MainBox>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
      </MainBox>
      <Footer />
    </div>
  );
};

export default Layout;
