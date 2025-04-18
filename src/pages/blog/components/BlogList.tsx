// import { Button } from '@/components';
import React from 'react';
import { Link } from 'react-router-dom'; 
const BlogList: React.FC<any> = ({blogs}) => {

  console.log(blogs)
  return (
    <div className="lg:col-span-4 col-span-12 flex flex-col py-12 gap-4">
      {blogs?.map(  
        (
          blog: {
            _id: string;
            title: string;
            content: string;
            image:string;
            date: Date;
          },
        ) => (
          <Link
            to={`/blog/${blog._id}`}
            key={blog._id}
            className="flex flex-col items-center bg-gradient-to-br from-slate-100 to-purple-50 border rounded-lg p-2 gap-2 hover:shadow-md hover:shadow-OMblue/20 transition"
          >
            
              <img
                className="h-[10rem] w-full object-cover rounded-2xl"
                src={blog?.image}
                alt="Blog preview"
              />
            
            <div
              className="text-lg truncate px-4  font-semibold w-full"
              dangerouslySetInnerHTML={{ __html: blog.title }}
            />
          </Link>
        )
      )}
      {/* <Button title="Read More" className="mt-4 w-full"   shimmer={false}/> */}
    </div>
  );
};

export default BlogList;
