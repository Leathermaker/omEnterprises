import React from "react";
import Input from "@/components/ui/Input";
import { Button } from "@/components";

const Form: React.FC = () => {
  return (
    <div className="bg-Omblue p-10">
        <h1 className="text-3xl mb-7 font-semibold text-blue-950 "> GET FREE INSTANT CALLBACK</h1>           
      <Input
        type="text"
        label="Name"
        placeholder="Enter Your Name"
        name="name"
        value=""
        onChange={() => {}}
        labelClass="md:text-black"
      />
      <Input
        type="email"
        label="Email"
        placeholder="Enter Your Email"
        name="email"
        value=""
        onChange={() => {}}
        labelClass="md:text-black"
      />
      <Input
        type="text"
        label="Phone"
        placeholder="Enter Your Phone"
        name="phone"
        value=""
        onChange={() => {}}
        labelClass="md:text-black"
      />
      <div>
        <h1 className="mt-1">Message</h1>
        <textarea
          style={{ resize: "none" }}
          placeholder="Enter your message"
          className="w-full bg-transparent border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-Omblue focus:border-transparent max-h-40 min-h-40"
        />
      </div>
      <Button title="Submit" className="mt-6" />
    </div>
  );
};

export default Form;
