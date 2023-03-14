
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Toastify from "./Toastify";

export default function Layout() {
  
 



 
  

  return (
    <>
      <header className="bg-gray-800">
        <Toastify />
        <Navbar />
      </header>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  );
}
