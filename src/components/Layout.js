
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Toastify from "./Toastify";


const hideOnPages = ["/login"];

export default function Layout() {
  // Bruger useLocation til at bestemme den aktuelle rute
  const location = useLocation();
  const isDisplayed = !hideOnPages.includes(location.pathname);
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-[#5E2E53] h-screen ">
      {/* // Omslutter de andre komponenter og indeholder fælles elementer som navigation og toast-notifikationer */}
      <Toastify />
      {/* // Skjuler navbar elementet på login-siden */}
      {isDisplayed ? <Navbar /> : null}
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
