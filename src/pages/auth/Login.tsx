import React from "react";
import authImage from "@/assets/svg/auth.svg";
import { Button } from "@/components";
import Input from "@/components/ui/Input";
const Login: React.FC = () => {

    const [formData, setFormData] = React.useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className="flex h-screen">
      <div className="md:w-[40rem] w-full h-screen md:bg-OMblue bg-white">
        <div className="flex flex-col  items-center  py-12 md:px-12 px-4 h-full ">
          <h1 className="text-5xl font-bold md:text-white text-black">Login</h1>
          <div className="flex flex-col gap-4 w-full mt-12 ">
             <Input 
              type="text" 
              label="Username" 
              placeholder="Username" 
              name="username"
              value={formData.username}
              onChange={handleChange} 
            />
            <Input 
              type="password" 
              label="Password" 
              placeholder="Password" 
              name="password"
              value={formData.password}
              onChange={handleChange} 
            />
          </div>

          <div className="mt-12">
            <h1 className="md:text-white text-black">
              By clicking Login, you automatically agree to our{" "}
              <span className="text-amber-500 e cursor-pointer">
                Terms & Conditions
              </span>
            </h1>

            <Button
              title="LOGIN"
              className="flex bg-OMblue md:hover:bg-white  md:bg-white font-semibold  w-full rounded-full md:text-OMblue my-1"
            />
            <p className="text-end py-1 cursor-pointer md:text-white">
              Forgot Password?
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white w-full h-full  items-center justify-center hidden md:flex p-24                                                                       ">
        <img src={authImage} alt="auth_image" />
      </div>
    </div>
  );
};

export default Login;

