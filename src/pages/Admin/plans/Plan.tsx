import { Button } from "@/components";
import React, { useState } from "react";
import AddPlanForm from "./components/AddPlanForm";
import PlanList from "./components/PlanList";

const Plan: React.FC = () => {
  const [isSectionA, setIsSectionA] = useState<boolean>(true);
  return (
    <div className="py-4 min-h-screen">
      <div className="flex justify-center items-center gap-3">
        <div onClick={() => setIsSectionA(true)}>
          <Button title="Add Plan"  className={`${isSectionA ? "  " : "bg-white border-OMblue border text-black"}` }  />
        </div>
        <div onClick={() => setIsSectionA(false)}>
          <Button title="Plans" className={`${isSectionA ? "border-OMblue border bg-white text-black " : " text-white"}` } />
        </div>
      </div>

      <div className="my-12">{isSectionA ? <AddPlanForm /> : <PlanList />}</div>
    </div>
  );
};

export default Plan;
