import { useState } from "react";
import Swal from "sweetalert2";


const CreateArticle = () => {
    const [articleName, setArticleName] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [description, setDescription] = useState('');
 
  

    const handleSubmit = (e)  => {
        e.preventDefault();
        const data = {
            articleName,
            imageURL,
            description
          };
        fetch("http://localhost:5000/articles", {
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
                    title: 'Article added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
          });
        console.log(data);
      };
      
    return (
        <div>
            <h1 className="heading my-20">Create An Article</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="articleName" className="block mb-2 font-medium text-gray-700">
          Article Name
        </label>
        <input
          type="text"
          id="articleName"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange"
          value={articleName}
          onChange={(e) => setArticleName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="imageURL" className="block mb-2 font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          id="imageURL"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none
           focus:border-orange"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
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


export default CreateArticle;