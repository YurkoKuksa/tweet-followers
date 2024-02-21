import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      Layout
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
