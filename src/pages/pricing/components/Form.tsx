import React, { useState } from "react";
import Input from "@/components/ui/Input";
import { Button } from "@/components";
import { instantCallApiCall } from "@/services/services";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   instantCallApiCall(formData)
  };

  return (
    <div className="bg-Omblue p-10">
      <h1 className="text-3xl mb-7 font-semibold text-blue-950"> GET FREE INSTANT CALLBACK</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Name"
          placeholder="Enter Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          labelClass="md:text-black"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          labelClass="md:text-black"
        />
        <Input
          type="text"
          label="Phone"
          placeholder="Enter Your Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          labelClass="md:text-black"
        />
        <div>
          <label htmlFor="subject" className="mt-2">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-transparent border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-Omblue focus:border-transparent"
          >
            <option value="">Select a subject</option>
            <option value="career enquiry">Career Enquiry</option>
            <option value="business enquiry">Business Enquiry</option>
            <option value="no subject">No Subject</option>
          </select>
        </div>
        <div>
          <h1 className="mt-1">Message</h1>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ resize: "none" }}
            placeholder="Enter your message"
            className="w-full bg-transparent border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-Omblue focus:border-transparent max-h-40 min-h-40"
          />
        </div>
        <Button title="Submit" className="mt-6" type="submit" />
      </form>
    </div>
  );
};

export default Form;
