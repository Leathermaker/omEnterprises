import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const JobApply: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    availability: "",
    resume: null as File | null,
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      const file = files && files[0];
      if (file && file.type === "application/pdf") {
        setFormData({ ...formData, resume: file });
      } else {
        alert("Please upload a PDF file.");
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlecall = async () => {
    
    try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/v1/user/apply/job`,
          formData
        );
        if(res.statusText === "OK") {
          toast.success("Form submitted successfully!");
        }
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("An unexpected error occurred.");
        }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handlecall();
  };

  return (
    <div className="min-h-screen   overflow-hidden flex items-center justify-center ">
      <form
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">User Form</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue  text-black"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Availability */}
        <div className="mb-4">
          <label htmlFor="availability" className="block text-gray-700">
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue text-black"
          >
            <option value="">Select Availability</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>

        {/* Resume */}
        <div className="mb-4 cursor-pointer">
          <label htmlFor="resume" className="block text-gray-700">
            Resume (PDF)
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept="application/pdf"
            onChange={handleChange}
            required
            className="mt-1 w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-OMblue text-white p-2 rounded-lg hover:bg-OMblue/90 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>  
  );
};

export default JobApply;
