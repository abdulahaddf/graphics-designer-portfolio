import { useEffect, useState } from "react";

import Swal from "sweetalert2";

const ManageArticle = () => {
  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(" https://port-server-two.vercel.app/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, [Articles]);
  console.log(Articles);
  const handleDelete = (art) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your selected class will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0891B2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://port-server-two.vercel.app/singlearticles/${art._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Article has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="heading my-20">Manage All Articles</h1>

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
            {Articles.map((Articles, index) => (
              <tr key={Articles._id}>
                <th>{index + 1}</th>
                <td>{Articles.articleName}</td>
                <td>
                  <img
                    className="w-32 rounded-md mx-auto"
                    src={Articles.imageURL}
                    alt=""
                  />
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(Articles)}
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

export default ManageArticle;
