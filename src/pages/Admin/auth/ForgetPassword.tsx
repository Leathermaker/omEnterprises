import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import toast from 'react-hot-toast';
import axios from 'axios';



const ForgotPassword:React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const navigate = useNavigate();
  const creditionalId = 7814897900

  const formHandler = async()=>{
    try {
         const resp = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/v1/admin/login/otp`,
            { creditionalId, password: '54565' } 
           )
           if(resp.statusText === "OK") {
            toast.success("OTP sent successfully!");
            navigate('/admin/verify-otp');
           }
           else{
            toast.error("failed to send OTP")
           }
    } catch (error:any) {
      console.log(error);
     toast.error("Something went wrong!") 
    }
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    await formHandler()

    // Add logic to send OTP
    console.log('Sending OTP to:', emailOrPhone);
     // Redirect to OTP verification page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <img src={logo} alt="Logo" className='h-12  mx-auto'/>
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
            required
          />
          <button
            type="submit"
            className="w-full bg-OMblue text-white py-2 rounded-lg hover:bg-OMblue transition duration-300"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;