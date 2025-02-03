import React from "react";
import BlogImage from "./components/BlogImage";
import { WideScreenHandler } from "@/components";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import BlogContent from "./components/BlogContent";

const Blog: React.FC = () => {
  return (
    <WideScreenHandler>
      <XpaddingWrapper className="md:py-24 py-4">
     

        <div className="relative  md:px-10 md:py-10 py-8  bg-gray-100 text-gray-900 flex flex-col gap-4 rounded-xl">
          <BlogImage />
          <BlogContent />
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default Blog;
