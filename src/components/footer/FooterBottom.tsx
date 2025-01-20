import React from "react";
import WideScreenHandler from "../WideScreenhandler";
import { Link } from "react-router-dom";
import XpaddingWrapper from "../XpaddingWrapper";

const FooterBottom: React.FC = () => {
  return (
    <div className=" bg-OMblue w-full   ">
      <WideScreenHandler className=" w-full  text-white">
        <XpaddingWrapper>
          <div className="flex md:flex-row flex-col text-sm md:text-base justify-between items-center py-2 px-4">
            <p className="">
              Copyright 2024 OM Enterprises. All Rights Reserved.
            </p>
            <div className="flex gap-2">
              <Link to={"/#"} className="border-r px-2">
                Terms & Condition
              </Link>
              <Link to={"/#"} className="border-r px-2">
                Careers
              </Link>
              <Link to={"/#"} className="">
                Privacy Policy
              </Link>
            </div>
          </div>
        </XpaddingWrapper>
      </WideScreenHandler>
    </div>
  );
};

export default FooterBottom;
