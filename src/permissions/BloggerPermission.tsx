import { RippleAnimation } from "@/components";
import useCookies from "@/hooks/useCookies";
import axios from "axios";
import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const BloggerPermission = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAllowed, setIsAllowed] = useState<boolean>(false  );
  const { getToken } = useCookies();
  const token = getToken(); 

  const validateUser = async () => {
    try {
      const resp = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/validate`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
       console.log(resp.data.user.role);
      // ✅ Check for "blogger" role
      if (resp.data.user?.role === "blogger") {
        setIsAllowed(true);
      } else {
        setIsAllowed(false);
      }
    } catch (err) {
      console.error("Validation error:", err);
      setIsAllowed(false);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    validateUser();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <RippleAnimation />
      </div>
    );
  }


  if (isAllowed) {
    return <Outlet />;
  }


  return <Navigate to="/" replace />;
};

export default BloggerPermission;
