import moment from "moment";
import React from "react";
import { MdAccessTime } from "react-icons/md";
const SingleMainBlog: React.FC<any> = ({ blog }) => {
  return (
    <div className="w-full  flex flex-col gap-4  md:text-lg text-sm ">
      <h1 className="md:text-4xl text-xl font-semibold mb-4">{blog?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
   

      <p className="w-full text-right flex items-center justify-end gap-1 text-sm text-gray-500 mt-12">
        <MdAccessTime size={25} /> {moment(blog?.date).format("MMM Do YY")}
      </p>
    </div>
  );
};

export default SingleMainBlog;
