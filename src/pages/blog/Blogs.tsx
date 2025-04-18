// pages/Home.tsx
import React from "react";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import { RippleAnimation, WideScreenHandler } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { getBlogsQuery } from "@/services/services";
import BlogImage from "./components/BlogImage";
import BlogList from "./components/BlogList";
import SingleMainBlog from "./components/BlogContent2";
import useBlogger from "@/hooks/useBlogger";
import { FaPenClip } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Blogs: React.FC = () => {
  const { data: blogs, isPending } = useQuery(getBlogsQuery());
  const { isBlogger } = useBlogger();
  return (
    <WideScreenHandler className="min-h-[100vh] h-auto  ">
      <XpaddingWrapper className="relative">
        {isPending && <RippleAnimation />}
        {isBlogger && (
          <Link to={'/blogs/editor'} className=" bg-gradient-to-br from-purple-300 to-purple-400 rounded-full  text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-purple-500/50 h-12 aspect-square flex justify-center items-center float-right absolute top-4 right-4">
            <FaPenClip />
          </Link>
        )}
        {blogs ? (
          <div className="grid grid-cols-12 gap-4 ">
            <div className="lg:col-span-8 col-span-12  my-12  ">
              <div className="border  rounded-xl  lg:p-12 p-4 flex flex-col gap-4">
                <BlogImage image={blogs?.toReversed()[0].image} />
                <SingleMainBlog blog={blogs?.toReversed()[0]} />
              </div>
            </div>
            <BlogList blogs={blogs} />
          </div>
        ): <h1 className="text-3xl text-center">No Blogs to Show</h1>}
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default Blogs;
