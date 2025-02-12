import Header from "@/pages/Admin/components/Header";
import Sidebar from "@/pages/Admin/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <div className=" relative  flex h-screen w-full scrollbar-hide  ">
      <Sidebar />
      <div className="  w-screen   ">
        <Header />
        <div className="my-24 pb-32 bg-gray-100 rounded-2xl me-6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
