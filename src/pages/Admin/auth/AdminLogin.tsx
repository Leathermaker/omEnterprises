import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import axios from 'axios';
import toast from 'react-hot-toast';
import useCookies from '@/hooks/useCookies';


const AdminLogin:React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
   const {setToken, } = useCookies()
   

  const loginHandler = async () => {
       const resp = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/login`,
        { email, password } 
       )
       console.log(resp)
       if(resp.status === 200) {
        console.log(resp.data)
        setToken(resp.data.token)
        
          navigate('/admin/job');
        

       }
       else{
        toast.error("failed to login")
       }
  }
  const handleLogin = async(e:React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
        await loginHandler();
  };

  const handleForgotPassword = () => {
    navigate('/admin/forgot-password'); // Redirect to forgot password page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <img src={logo} alt="Logo" className='h-12  mx-auto'/>
        <h2 className="text-2xl text-gray-900/50 font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
            required
          />
          <button
            type="submit"
            className="w-full bg-OMblue text-white py-2 rounded-lg hover:bg-OMblue/80 transition duration-300"
          >
            Login
          </button>
        </form>
        <p
          className="mt-4 text-OMblue text-sm text-center cursor-pointer hover:underline"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;