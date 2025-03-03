import { Button } from "@/components";
import useCookies from "@/hooks/useCookies";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

interface UpdatePlanProps {
  title: string;
  price: string;
  features: string[];
  id: string;
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdatePlan: React.FC<UpdatePlanProps> = ({
  title,
  price,
  features,
  id,
  refresh,
  setRefresh,
  setIsModalOpen,
}) => {
  const { getToken } = useCookies();
  const token = getToken();
  const [updatedTitle, setUpdatedTitle] = React.useState<string>(title);
  const [updatedPrice, setUpdatedPrice] = React.useState<string>(price);
  const [updatedFeatures, setUpdatedFeatures] =
    React.useState<string[]>(features);

  const handleEdit = async (id: string) => {
    const data = {
      title: updatedTitle,
      price: updatedPrice,
      descriptions: updatedFeatures,
    };
    console.log(id);
    try {
       await axios.put(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/plan/update/${id}`,
        data,
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast.success("Plan updated successfully");
      setRefresh(!refresh);
      setIsModalOpen(false);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-gray-100 border border-gray-200 p-4  rounded-md">
        <h1 className="text-6xl text-blue-950/40 font-semibold">Update Plan</h1>

        <div className="mt-4  flex flex-col gap-1">
          <label htmlFor="title">
            <h1 className=" text-blue-950/40 font-semibold">Title</h1>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="p-2 border border-gray-300 rounded-md text-blue-950/90 w-full focus:outline-none focus:border-none"
              placeholder={title}
            />
          </label>
          <label htmlFor="price">
            <h1 className=" text-blue-950/40 font-semibold">Price</h1>
            <input
              type="number"
              name="price"
              id="price"
              onChange={(e) => setUpdatedPrice(e.target.value)}
              className="p-2 border border-gray-300 rounded-md text-blue-950/90 w-full focus:outline-none focus:border-none"
              placeholder={price}
            />
          </label>
          <label htmlFor="features">
            <h1 className=" text-blue-950/40 font-semibold">Features</h1>
            {features.map((feature, index) => (
              <input
                key={index}
                type="text"
                name="features"
                id="features"
                onChange={(e) => {
                  console.log(e.target.value);
                  setUpdatedFeatures((prev) => {
                    prev[index] = e.target.value;
                    return prev;
                  });
                  console.log(features);
                }}
                className="p-2 mb-2 border border-gray-300 rounded-md text-blue-950/90 w-full focus:outline-none focus:border-none"
                placeholder={feature}
              />
            ))}
          </label>
          <div
            onClick={() => {
              handleEdit(id);
            }}
            className="w-full"
          >
            <Button title="Update Plan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePlan;
