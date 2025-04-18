import {
  getPromotionalPlans,
  getTransactionalPlans
} from "@/services/services";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate} from "react-router-dom";

const Plans: React.FC = () => {
    const navigate = useNavigate();
  const { data: transactionalData } = useQuery(getTransactionalPlans());
  const { data: promotionalData } = useQuery(getPromotionalPlans());
  return (
    <div onClick={()=>navigate("/admin/plans")}  className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl p-4 ">
      <h1 className="text-2xl text-gray-500">Plans</h1>
      <h1 className="text-9xl  text-gray-400">
        {transactionalData && promotionalData ? (
          transactionalData.length + promotionalData.length
        ) : (
          <span className="text-2xl">loading...</span>
        )}
      </h1>
      <p className="text-gray-400">
        Transactional Plans :{" "}
        {transactionalData ? transactionalData.length : "loading..."}
      </p>
      <p className="text-gray-400">
        Promotional Plans :{" "}
        {promotionalData ? promotionalData.length : "loading..."}
      </p>
    </div>
  );
};

export default Plans;
