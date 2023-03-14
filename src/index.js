import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import TokenProvider from './components/TokenProvider';
import Login from './pages/Login';
import Profile from './pages/Profile';
import "./index.css"
import ClassDetails from './pages/Activities';
import MyClasses from './pages/MyClasses';
import Velkommen from './pages/Velkommen';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Velkommen />,
    children: [
      {
        path: "/",
        element: <Layout/>,
      },
      {
        index: true,
        element: <Velkommen />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/profile",
        element: <ProtectedRoute><Profile/></ProtectedRoute>,
      },
      {
        path: "/classDetails/:id",
        element: <ProtectedRoute><ClassDetails/></ProtectedRoute>,
      },
      {
        path: "/myClasses",
        element: <ProtectedRoute><MyClasses /></ProtectedRoute>,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </React.StrictMode>
);
