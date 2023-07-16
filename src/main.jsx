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
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='body-font font-poppins'>

    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
