import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import AllArticles from "./Components/Articles/AllArticles";
import HomeLayout from "./layouts/HomeLayout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Welcome from "./Components/Dashboard/Welcome";
import CreateArticle from "./Components/Dashboard/CreateArticle";
import ManageArticle from "./Components/Dashboard/ManageArticle";
import Admin from "./pages/admin/Admin";
import SingleArticle from "./Components/Articles/SingleArticle";
import PostProject from "./Components/Dashboard/PostProject";
import ManageProject from "./Components/Dashboard/ManageProject";
import AllProject from "./Components/Projects/AllProject";
import ErrorPage from "./Components/Shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/articles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "/singlearticles/:id",
        element: <SingleArticle></SingleArticle>,
        loader: ({ params }) =>
          fetch(
            `https://port-server-two.vercel.app/singlearticles/${params.id}`
          ),
      },
      {
        path: "/admin",
        element: <Admin></Admin>,
      },
      {
        path: "/allProjects",
        element: <AllProject></AllProject>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/welcome",
        element: <Welcome></Welcome>,
      },
      {
        path: "/dashboard/create",
        element: <CreateArticle></CreateArticle>,
      },
      {
        path: "/dashboard/manage",
        element: <ManageArticle></ManageArticle>,
      },
      {
        path: "/dashboard/postProject",
        element: <PostProject></PostProject>,
      },
      {
        path: "/dashboard/manageProject",
        element: <ManageProject></ManageProject>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="body-font font-poppins">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
