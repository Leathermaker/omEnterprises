import React from "react";
import Bell from "../../../assets/icons/bell.png";
import avatar from "../../../assets/images/avatar.png";
import useNotification from "@/store/notification";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const{showNotification,setShowNotification} = useNotification()
  return (
    <div className="h-16   ps-12 pe-24 fixed bg-white   z-50  w-[90%] border-b">
      <div className="h-full w-full flex items-center justify-between">
       
        <div />

        {/* other buttons */}
        <div className="flex items-center gap-6">
          {/* bell icon */}
          <div onClick={()=>setShowNotification(!showNotification)} className="relative  ">
            <img src={Bell} alt="Bell" className="h-5" />
          </div>

          {/* profile */}
          <Link to={"/admin/account"} className="flex items-center gap-2">
            <img
              src={avatar}
              alt="profilePic"
              className="h-8 rounded-full bg-gray-500"
            />
            <div className="flex flex-col gap-0">
              <h1 className="leading-none">Anil Verma</h1>
              <h1 className="text-sm text-gray-500">Admin</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
