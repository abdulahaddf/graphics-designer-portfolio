import { useState } from "react";
import Swal from "sweetalert2";


const PostProject = () => {
    const [title, settitle] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [description, setDescription] = useState('');
 
  

    const handleSubmit = (e)  => {
        e.preventDefault();
        const data = {
            title,
            imageURL,
            description
          };
        fetch("http://localhost:5000/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.acknowledged) {
               
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Project added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
          });
        console.log(data);
      };
      
    return (
        <div>
            <h1 className="heading my-20">Post Your Project</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
          Project Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="imageURL" className="block mb-2 font-medium text-gray-700">
          Project Image
        </label>
        <input
          type="text"
          id="imageURL"
          placeholder="Enter URL"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-medium text-gray-700">
         Behance Link
        </label>
        <input
          id="description"
          placeholder="Enter URL"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none
           focus:border-orange"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <button
        type="submit"
        className="btn-new"
      >
        Submit
      </button>
    </form>
        </div>
    );
};


export default PostProject;