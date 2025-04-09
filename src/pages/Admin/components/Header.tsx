import React from "react";
import Bell from "../../../assets/icons/bell.png";
import avatar from "../../../assets/images/avatar.png";

const Header: React.FC = () => {
  return (
    <div className="h-16   ps-12 pe-24 fixed bg-white   z-50  w-[90%]">
      <div className="h-full w-full flex items-center justify-between">
        {/* search bar */}
        {/* <div className="bg-Elite-light-gray border border-gray-200 rounded-full flex items-center px-2 py-1">
          <Search size={15} color="#9ca3af" />
          <input
            type="text"
            placeholder="Search"
            className="rounded-full bg-Elite-light-gray border-none outline-none px-2 w-[20rem] placeholder:text-sm"
          />
        </div> */}
        <div />

        {/* other buttons */}
        <div className="flex items-center gap-6">
          {/* bell icon */}
          <div className="relative before:absolute before:bg-red-500 before:h-4 before:w-4 before:rounded-full before:content-['6'] before:text-[.8rem] before:text-white before:text-center before:flex before:justify-center before:items-center before:-top-2 before:-right-1">
            <img src={Bell} alt="Bell" className="h-5" />
          </div>

          {/* profile */}
          <div className="flex items-center gap-2">
            <img
              src={avatar}
              alt="profilePic"
              className="h-8 rounded-full bg-gray-500"
            />
            <div className="flex flex-col gap-0">
              <h1 className="leading-none">Anil Verma</h1>
              <h1 className="text-sm text-gray-500">Admin</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
