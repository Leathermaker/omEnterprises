import React, { useState } from "react";
import SlidingButton from "../../../components/common/Sliderbutton";
import AddJobForm from "./components/AddJob";
import UserCardsList from "./components/JobQueries";
import { BriefcaseBusiness, RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Job: React.FC = () => {
  const [isSectionA, setIsSectionA] = useState<boolean>(true);
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState<boolean>(false);

  return (
    <div className="bg-gray-100  w-full flex flex-col ">
      <div className="flex justify-between items-center py-4 px-12 w-full">
        <div className=""></div>
        <SlidingButton isSectionA={isSectionA} setSectionA={setIsSectionA} />
        <div className="flex gap-3">
          <motion.div whileTap={{ scale: 0.5, rotate: 720 }}>
            {!isSectionA && <RefreshCcw onClick={() => setRefresh(!refresh)} />}
          </motion.div>
          <div onClick={() => navigate("/admin/applied-jobs")} className=" ">
            <BriefcaseBusiness />
          </div>
        </div>
      </div>

      <div className="  p-4 h-auto ">
        {isSectionA ? <AddJobForm /> : <UserCardsList refresh={refresh} />}
      </div>
    </div>
  );
};

export default Job;
