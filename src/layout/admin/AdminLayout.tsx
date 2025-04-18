import Header from "@/pages/Admin/components/Header";
import Sidebar from "@/pages/Admin/components/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useCookies from "@/hooks/useCookies";
import useCurrentUser from "@/store/currentUser";
import { RippleAnimation } from "@/components";
import useNotification from "@/store/notification";
import {AnimatePresence} from "motion/react"
import Notification from "@/components/common/Notification";


const AdminLayout: React.FC = () => {
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const{setCurrentUser} = useCurrentUser()
  const navigate = useNavigate();
  const{showNotification} = useNotification()

  // Get the token from cookies using your custom hook
  const { getToken } = useCookies();
  const token = getToken();

  const validateAdmin = async () => {
    try {
      const resp = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/validate`,
        {
          headers: {  
            Authorization: `${token}`, // Include token in request header
          },
        }
      );
      setCurrentUser(resp.data.user)
      if (resp.status === 200 && resp.data.user.role === "admin") {
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
        <RippleAnimation/>
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
    <div className="relative flex  w-full  ">
      <AnimatePresence>
        {
          showNotification &&
          <Notification/>
        }
        </AnimatePresence>
      <Sidebar />
      <div className="w-screen h-auto ">
        <Header />
        <div className="py-24 pb-32   pe-6 border-l min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
