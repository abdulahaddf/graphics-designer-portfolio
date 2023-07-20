import { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import Swal from "sweetalert2";




const CreateArticle = () => {
  const [articleName, setArticleName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const editor = useRef(null);
	

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      articleName,
      imageURL,
      description,
    };
    fetch("https://port-server-two.vercel.app/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Blog added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Blog is not uploaded successfully",
        showConfirmButton: false,
        timer: 1500,
      });
  };

  return (
    <div>
      <h1 className="heading my-10">Create a Blog</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="mb-4">
          <label
            htmlFor="articleName"
            className="block mb-2 font-medium text-gray-700"
          >
            Blog Name
          </label>
          <input
            type="text"
            id="articleName"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange"
            value={articleName}
            onChange={(e) => setArticleName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="imageURL"
            className="block mb-2 font-medium text-gray-700"
          >
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
          <label
            htmlFor="description"
            className="block mb-2 font-medium text-gray-700"
          >
            Description
          </label>
          {/* <textarea
            id="description"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none
           focus:border-orange"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea> */}


<JoditEditor
      id="description"
			ref={editor}
			value={description}
			tabIndex={1} // tabIndex of textarea
			
			onChange={newDescription => setDescription(newDescription)}
		/>



        </div>
        <button type="submit" className="btn-new">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateArticle;
