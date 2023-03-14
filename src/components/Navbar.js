import { useContext } from "react";
import { NavLink, } from "react-router-dom";
import { TokenContext } from "./TokenProvider";
import { setCookie } from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'

export default function Navbar() {
    const { token, setToken } = useContext(TokenContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navigate = useNavigate();
    function handleLogout() {
        setCookie("trainer-cookie", "", { days: 0 })
            setToken(null)
            navigate("/")
      }
      
  return (
    <nav className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center h-14">
                <div className="flex-shrink-0">
                    <NavLink to="/">
                    <img
                        className="h-8 w-8 "
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt=""
                    />
                    </NavLink>
                </div>
                <div className="hidden md:flex flex-1 justify-end">
                    <div className="mr-10 flex items-baseline space-x-4">
                    <NavLink
                        to="/"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        activeClassName="bg-gray-900 text-white"
                        exact
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        activeClassName="bg-gray-900 text-white"
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to="/myClasses"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        activeClassName="bg-gray-900 text-white"
                    >
                        My Classes
                    </NavLink>
                    {token ? (
                        <button
                        onClick={handleLogout}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                        Log out
                        </button>
                    ) : (
                        <NavLink
                        to="/login"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        activeClassName="bg-gray-900 text-white"
                        >
                        Log in
                        </NavLink>
                    )}
                    </div>
                </div>
                </div>
                <div className="text-gray-500 hover:text-white focus:outline-none focus:text-white absolute right-4 mt-2 md:hidden"  >
                    <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
                </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink
                            to="/"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            activeClassName="bg-gray-900 text-white"
                            exact
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/profile"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            activeClassName="bg-gray-900 text-white"
                        >
                            Profile
                        </NavLink>
                        {token ? (
                            <button
                                onClick={handleLogout}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Log out
                            </button>
                        ) : (
                            <NavLink
                                to="/login"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                activeClassName="bg-gray-900 text-white"
                            >
                            
                                Log in
                            </NavLink>
                        )}
                    </div>
                </div>
            )}
        </nav>
  )
}


