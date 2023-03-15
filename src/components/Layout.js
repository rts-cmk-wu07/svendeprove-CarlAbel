
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Toastify from "./Toastify";


const hideOnPages = ["/login"];

export default function Layout() {
  const location = useLocation();
  const isDisplayed = !hideOnPages.includes(location.pathname);
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-[#5E2E53] h-screen ">
      <Toastify />
      {isDisplayed ? <Navbar /> : null}
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
