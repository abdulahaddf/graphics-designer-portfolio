/* eslint-disable react-hooks/rules-of-hooks */

import { Link, NavLink, Outlet } from "react-router-dom";
import { FaRegFlag } from "react-icons/fa";
import { AiOutlineSelect } from "react-icons/ai";


const Dashboard = () => {

  
  
  return (
    <div>
      <div className="drawer flex flex-col lg:grid lg:drawer-open">
        <div >
          <label
            htmlFor="my-drawer-2"
            className="btn-custom-sm drawer-button mr-10 lg:hidden"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>{" "}
          </label>
        </div>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* All routes information will be shown here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 h-full bg-[#10cdef] text-base-content">
            {/* Branding & Profile Info */}
            <div>
              <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
                <Link to="/">
                  <img
                    className="w-48 ml-5 bg-white p-5 rounded-lg "
                    src="https://i.ibb.co/q0Sgb2S/Logo-01-1.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center mt-6 -mx-2">
                {/* <Link to="/dashboard/welcome">
                  <img
                    className="object-cover w-20 h-20 mx-2 rounded-2xl border-2 border-white"
                    src={user?.photoURL}
                    alt="avatar"
                    referrerPolicy="no-referrer"
                  />
                </Link> */}
                {/* <Link to="/dashboard/welcome">
                  <h4 className="mx-2 mt-2 font-medium text-white  hover:underline">
                    {user?.displayName}
                  </h4>
                </Link>

                <p className="mx-2 mt-1 text-sm font-medium text-white hover:underline">
                  {user?.email}
                </p> */}
              </div>
            </div>
            <br />
            <hr />
            <hr  className="mb-2"/>
            {/* Links based on user */}
            <div className="text-white font-medium text-md">
             
                <>
                  {/* links for normal user */}
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "bg-white text-black "
                          : "text-white link link-hover"
                      }
                      to="/dashboard/create"
                    >
                      <FaRegFlag></FaRegFlag>Create An Article{" "}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-black bg-white"
                          : "text-white link link-hover"
                      }
                      to="/dashboard/manage"
                    >
                      <AiOutlineSelect></AiOutlineSelect>Manage Articles
                    </NavLink>
                  </li>
                
                </>
           
            </div>

            <hr className="mt-4"/>
            <hr />
           

        

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
























































// import { Link, Outlet } from "react-router-dom";


// const Dashboard = () => {
//     return (
//         <div>
//            <div className="flex">
//                 <Link>Post an Article</Link>
//                 <Link>Manage Articles</Link>
//            </div>
//            <div>
//             <Outlet></Outlet>
//            </div>
//         </div>
//     );
// };

// export default Dashboard;