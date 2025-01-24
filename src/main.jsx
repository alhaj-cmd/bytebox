// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <>
//     <App />
//   </>,
// )
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./assets/pages/Home";
import Bannar from "./assets/component/Bannar";
import Login from "./assets/component/Login/Login";
import Register from "./assets/component/Register/Register";
import Bookmark from "./assets/component/BookMark/Bookmark";
import AuthProvider from "./assets/component/AuthProvider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/Bannar',
        element: <Bannar />
      },
      {
        path: '/Bookmark',
        element: <Bookmark />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

