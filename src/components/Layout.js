
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Toastify from "./Toastify";

export default function Layout() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-[#5E2E53] h-screen ">
        <Toastify />
        <Navbar />
      <main className="pb-16 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
