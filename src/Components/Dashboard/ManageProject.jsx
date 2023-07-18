import { useEffect, useState } from "react";


import Swal from "sweetalert2";


const ManageProject = () => {
const [projects,setprojects] = useState([])

 
  useEffect(() => {
    fetch(
     ' http://localhost:5000/projects'
    )
      .then((response) => response.json())
      .then((data) => setprojects(data));
  }, [projects]);
console.log(projects);
  const handleDelete = (art) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your selected project will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0891B2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/singleprojects/${art._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your projects has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
           
                <h1 className="heading my-20">
                 Manage All projects
                </h1>
          
              <div className="">
                <table className="table table-zebra shadow-xl w-full  text-center overflow-x-auto">
                  {/* head */}
                  <thead className="bg-[#10cdef] text-white text-xl">
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Picture</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((projects, index) => (
                      <tr key={projects._id}>
                        <th>{index + 1}</th>
                        <td>{projects.title}</td>                
                        <td>
                          <img
                            className="w-32 rounded-md mx-auto"
                            src={projects.imageURL}
                            alt=""
                          />
                        </td>
                       
                        <td>
                          <button
                            onClick={() => handleDelete(projects)}
                            className="btn-custom m-2 w-24"
                          >
                            Delete
                          </button>
                        
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          
        
       
    
    </div>
  );
};

export default ManageProject;
