import React from "react";
import axios from "axios";
import PlanCard from "./PlanCard";
import { getTransactionalPlans, getPromotionalPlans } from "@/services/services";
import { useQuery } from "@tanstack/react-query";

const PlanList = () => {
  const [refresh, setRefresh] = React.useState(false);
   const { data: transactionalData, isPending:isPendingTransactional, refetch:refetchTransactional } = useQuery(getTransactionalPlans());
   const { data: promotionalData, isPending:isPendingPromotional, refetch:refetchPromotional } = useQuery(getPromotionalPlans());
  React.useEffect(() => {
   refetchTransactional();
   refetchPromotional();
  }, [refresh]);

  return (
    <div>
        <h1 className="text-3xl font-bold text-blue-950  ps-12 pb-6">Transactional Plans</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3  place-items-center ">
        {isPendingTransactional && <h1>Loading...</h1>}
        {transactionalData?.map((plan:any) => (
          <PlanCard
            key={plan._id}
            id={plan._id}
            title={plan.title}
            price={plan.price}
            features={plan.descriptions}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        ))}
      </div>
      
        <h1 className="text-3xl font-bold text-blue-950  ps-12 mt-12 pb-6">Promotional Plans</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3  place-items-center ">
        {isPendingPromotional && <h1>Loading...</h1>}
        {promotionalData?.map((plan:any) => (
          <PlanCard
            key={plan._id}
            id={plan._id}
            title={plan.title}
            price={plan.price}
            features={plan.descriptions}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanList;
