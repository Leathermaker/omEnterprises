import React, { useState } from "react";
import SlidingButton from "../../../components/common/Sliderbutton";
import AddJobForm from "./components/AddJob";
import UserCardsList from "./components/JobQueries";
import { BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Job: React.FC = () => {
  const [isSectionA, setIsSectionA] = useState<boolean>(true);
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100  w-full flex flex-col ">

      <div className="flex justify-between items-center py-4 px-12 w-full">
        <div className="">
        </div>
        <SlidingButton isSectionA={isSectionA} setSectionA={setIsSectionA} />
        <div onClick={()=>navigate("/admin/applied-jobs")} className=" ">
        <BriefcaseBusiness />
        </div>
      </div> 

      <div className="  p-4 h-auto ">
        {isSectionA ? <AddJobForm /> : <UserCardsList />}
      </div>
    </div>
  );
};

export default Job;
