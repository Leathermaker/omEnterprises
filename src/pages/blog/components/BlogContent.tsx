import moment from "moment";
import React from "react";
import { MdAccessTime } from "react-icons/md";





const BlogContent: React.FC<any> = ({blog}) => {

  
  return (
    <div className="w-full  flex flex-col md:px-4 px-1 gap-4">
      <h1 className="lg:text-4xl text-xl font-bold text-blue-950">{blog?.title}</h1>
      <div
        className=" bg-white lg:p-12 p-2 p rounded-2xl lg:text-xl md:text-md text-sm"
        dangerouslySetInnerHTML={{ __html: blog?.content || ""}}
      ></div>
    
      <p className="w-full text-right flex items-center justify-end gap-1 text-sm text-gray-500 mt-12">
              <MdAccessTime size={25} /> {moment(blog?.date).format("MMM Do YY")}
            </p>
    </div>
  );
};

export default BlogContent;
