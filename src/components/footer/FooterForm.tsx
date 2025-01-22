import React from "react";
const FooterForm: React.FC = () => {
  return (
    <div className="w-full ">
       
      <h1 className="text-3xl font-bold text-white">Contact Us for a <span className="text-OMblue">Quote</span></h1>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-white">Your Name</h1>
          <input
            type="text"
            placeholder="Enter your name"
            className=" lg:w-8/12 w-full h-10 border-2 border-white rounded-md p-2 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white">Your Email</h1>
          <input
            type="email"
            placeholder="Enter your Email"
            className="  lg:w-8/12 w-full h-10 border-2 border-white rounded-md p-2  outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white">Subject</h1>
          <input
            type="text"
            placeholder="Enter your subject"
            className=" lg:w-8/12 w-full h-10 border-2 border-white rounded-md p-2  outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white">Your Message</h1>
          <textarea
          style={{resize:'none'}}
            placeholder="Enter your Message"
            className="min-h-32 max-h-32  lg:w-8/12 w-full h-10 border-2 border-white rounded-md p-2  outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
