import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { LuServerCog } from "react-icons/lu";
import { MdCall, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Topbar: React.FC = () => {
  return (
    <div className="w-full h-12 bg- flex justify-between items-center px-4 bg-OMblue text-white px-24">
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-1">
          <MdCall />
          <p className="text-sm">+91-9815300730 </p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <MdCall />
          <p className="text-sm">+91-9872144408 </p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <MdEmail />
          <p className="text-sm"> info@omenterprisesgroup.in </p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <MdEmail />
          <p className="text-sm"> anil@omenterprisesgroup.in </p>
        </div>
      </div>

      {/* center div start */}
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-1 bg-gradient-to-b from-yellow-300 via-amber-400 to-amber-500 px-3 py-1 rounded-md border border-white/30">
          <LiaRupeeSignSolid color="black" size={20} />
          <p className="text-black">Pay Now</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <LuServerCog size={20} />
          <p>Test Our SMS Server</p>
        </div>
      </div>
      {/* center div end*/}

      <div className="flex items-center justify-center gap-3">
        <Link
          to={
            "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
          }
        >
          <FaFacebookF size={20} />
        </Link>
        <Link to={"https://in.linkedin.com/"}>
          <FaLinkedinIn size={20} />
        </Link>
        <Link to={"https://www.instagram.com/accounts/login/?hl=en"}>
          <IoLogoInstagram size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
