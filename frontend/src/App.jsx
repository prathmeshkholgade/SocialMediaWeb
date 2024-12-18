import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CreatePage from "./pages/post/createPage";
import Login from "./pages/auth/Login";
import SignUpPage from "./pages/auth/SignUpPage";
import { Provider } from "react-redux";
import Protected from "./pages/auth/Protected";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUpPage /> },
      // {
      //   path: "/create",
      //   element: (
      //     <Protected>
      //       <CreatePage />
      //     </Protected>
      //   ),
      // },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
