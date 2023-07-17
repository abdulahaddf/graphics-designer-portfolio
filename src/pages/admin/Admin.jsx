import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Admin = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    if(email == 'ferdous40@gmail.com' && password == 'ferdous'){
        navigate('/dashboard/welcome');
       
    }
    else{
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Give Correct Information',
            showConfirmButton: false,
            timer: 1500
          })
    }
  };

    return (
        <div className="w-1/2 mx-auto p-20 my-32 glass">
            <h1 className="heading my-10">Admin</h1>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none
           focus:border-orange"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn-custom"
      >
        Submit
      </button>
    </form>
        </div>
    );
};

export default Admin;