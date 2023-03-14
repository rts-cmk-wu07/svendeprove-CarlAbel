# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
<Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} className="text-gray-500 hover:text-white focus:outline-none focus:text-white absolute right-4 mt-4" />

´´´´javascript
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
´´´´