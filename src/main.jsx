import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home/Home';
import AllArticles from './Components/Articles/AllArticles';
import HomeLayout from './layouts/HomeLayout';
import Dashboard from './Components/Dashboard/Dashboard';
import Welcome from './Components/Dashboard/Welcome';
import CreateArticle from './Components/Dashboard/CreateArticle';
import ManageArticle from './Components/Dashboard/ManageArticle';
import Admin from './pages/admin/Admin';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children : [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/articles",
        element:<AllArticles></AllArticles>
      },
      {
        path:"/admin",
        element:<Admin></Admin>
      },
     
    ]
  },
  {
    path:"/dashboard",
    element: <Dashboard></Dashboard>,
    children : [
      {
        path:"/dashboard/welcome",
        element:<Welcome></Welcome>
      },
      {
        path:"/dashboard/create",
        element:<CreateArticle></CreateArticle>
      },
      {
        path:"/dashboard/manage",
        element:<ManageArticle></ManageArticle>
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='body-font font-poppins'>

    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
