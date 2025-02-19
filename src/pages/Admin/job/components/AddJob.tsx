import useCookies from "@/hooks/useCookies";
import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

// Define the form data types
type JobRequirementForm = {
  title: string;
  qualification: string;
  gender: "male" | "female" | "other" | "any";
  skill: string;
  location: string;
};

const AddJobForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JobRequirementForm>();
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useCookies();
  const token = getToken();

  const onSubmit: SubmitHandler<JobRequirementForm> = async (data) => {
    try {
      setIsLoading(true);
      const resp = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/create/job`,
        data,
        {                   
          headers: {
            authorization: token,
          },
        }
      );
      if (resp.statusText === "OK") {
        toast.success("Job added successfully!");
        setIsLoading(false);
        reset() 
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
      setIsLoading(false);
    }
    // Add logic to submit the form data (e.g., API call)
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Job Requirement
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Qualification */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Qualification
            </label>
            <input
              type="text"
              {...register("qualification", {
                required: "Qualification is required",
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
            />
            {errors.qualification && (
              <p className="text-red-500 text-sm mt-1">
                {errors.qualification.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="any">Any</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Mandatory Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mandatory Skills
            </label>
            <input
              type="text"
              {...register("skill", {
                required: "Mandatory Skills are required",
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
            />
            {errors.skill && (
              <p className="text-red-500 text-sm mt-1">
                {errors.skill.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              {...register("location", { required: "Location is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-OMblue text-white py-2 rounded-lg hover:bg-OMblue transition duration-300 relative"
            >
              {isLoading ? "Adding..." : "Add Job Requirement"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobForm;
