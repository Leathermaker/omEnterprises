import React from "react";
import BlogImage from "./components/BlogImage";
import { WideScreenHandler } from "@/components";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import BlogContent from "./components/BlogContent";
import {  useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import useBlogger from "@/hooks/useBlogger";
import { MdDelete } from "react-icons/md";

type BlogT = {
  _id: string;
  title: string;
  content: string;
  image: string;
  date: Date;
};
const Blog: React.FC = () => {
  const { id } = useParams();
  const [blog, setBlog] = React.useState<BlogT | null>(null);
  const { isBlogger } = useBlogger();
  const navigate = useNavigate();

  const fetchBlog = async () => {
    try {
      const resp = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/blog/${id}`
      );
      setBlog(resp.data.blog);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  React.useEffect(() => {
    fetchBlog();
  }, []);

  const delelteBlog = async () => {
    window.alert("Are you sure you want to delete this blog?");
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/api/v1/blog/delete/${id}`
      );
      toast.success("Blog deleted successfully");
      navigate("/blogs  ");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <WideScreenHandler>
      <XpaddingWrapper className="md:py-24 py-4 relative">
        {isBlogger && (
          <div 
           onClick={delelteBlog}
          className="absolute bg-gradient-to-br from-purple-300 to-purple-400 rounded-full  text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-purple-500/50 h-12 aspect-square flex justify-center items-center float-right  top-4 right-4">
            <MdDelete />
          </div>
        )}

        <div className="relative  md:px-10 md:py-10 py-8  bg-gray-100 text-gray-900 flex flex-col gap-4 rounded-xl">
          <BlogImage image={blog?.image} />
          <BlogContent blog={blog} />
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default Blog;
