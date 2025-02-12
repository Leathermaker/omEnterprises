import React, { useState } from "react";
import SlidingButton from "../../../components/common/Sliderbutton";
import AddJobForm from "./components/AddJob";
import UserCardsList from "./components/JobQueries";

const Job: React.FC = () => {
  const [isSectionA, setIsSectionA] = useState<boolean>(true);

  return (
    <div className="bg-gray-100  w-full flex flex-col ">

      <div className="flex justify-center py-4 w-full">
        <SlidingButton isSectionA={isSectionA} setSectionA={setIsSectionA} />
      </div> 

      <div className="  p-4 h-auto ">
        {isSectionA ? <AddJobForm /> : <UserCardsList />}
      </div>
    </div>
  );
};

export default Job;
