import Header from "@/pages/Admin/components/Header";
import Sidebar from "@/pages/Admin/components/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useCookies from "@/hooks/useCookies";

const AdminLayout: React.FC = () => {
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Get the token from cookies using your custom hook
  const { getToken } = useCookies();
  const token = getToken();

  const validateAdmin = async () => {
    try {
      console.log("Validating admin...")
      const resp = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/validate`,
        {
          headers: {  
            Authorization: `${token}`, // Include token in request header
          },
        }
      );

      if (resp.status === 200) {
        setIsValidated(true);
      } else {
        setIsValidated(false);
        navigate("/admin/login");
      }
    } catch (error) {
      console.error("Admin validation failed:", error);
      setIsValidated(false);
      navigate("/admin/login");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    validateAdmin();
  }, []);

  // Show loading spinner while validating
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  // If not validated, redirect or show an error message
  if (!isValidated) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Unauthorized
      </div>
    );
  }

  return (
    <div className="relative flex h-screen w-full scrollbar-hide">
      <Sidebar />
      <div className="w-screen">
        <Header />
        <div className="my-24 pb-32 bg-gray-100 rounded-2xl me-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
