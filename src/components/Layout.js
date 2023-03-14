
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Toastify from "./Toastify";

export default function Layout() {
  return (
    <>
        <Toastify />
        <Navbar />
      <main className="mx-auto h-screen max-w-7xl sm:px-6 lg:px-8 bg-[#5E2E53] pb-20">
        <Outlet />
      </main>
    </>
  );
}
