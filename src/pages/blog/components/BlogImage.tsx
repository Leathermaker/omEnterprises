import React from "react";
import blogimage from "@/assets/svg/messageplane.svg";

const BlogImage: React.FC = () => {
  return (
    <>
    <div className="flex items-start gap-2 ps-4 md:ps-0">
        <div className="h-4 aspect-square bg-amber-500 border border-black/5  rounded-full"/>
        <div className="h-4 aspect-square bg-amber-500 border border-black/5  rounded-full"/>
        <div className="h-4 aspect-square bg-amber-500 border border-black/5  rounded-full"/>
    </div>
    <div className=" rounded-lg md:h-[34rem] aspect-square  md:p-12   p-4 ">
      <img
        loading="lazy"
        src={blogimage}
        alt="BlogImage"
        className="w-full h-full object-contain "
        />
        </div>
    </>
  );
};

export default BlogImage;
