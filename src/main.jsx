import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from"./pages/HomePage.jsx";
import ProjectPage from"./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AddProject from "./pages/AddProject.jsx"

import NavBar from"./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
import AddUser from './pages/NewUser.jsx';


const router = createBrowserRouter ([
  {
    path: "/",
    element: <NavBar /> ,
    children: [
      { path:"/",element:<HomePage />},
      { path: "/login", element: <LoginPage /> },
      { path:"/project/:id",element:<ProjectPage />},
      { path: "/project/add", element:<AddProject />},
      { path: "/register" , element: <AddUser />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);

