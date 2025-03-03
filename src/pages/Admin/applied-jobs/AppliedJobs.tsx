import React from "react";
import JobCard from "./components/JobCard";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { getJobs } from "@/services/services";

const AppliedJobs = () => {
  const [refresh, setRefresh] = React.useState(false);
  const { data, isPending, isError, refetch } = useQuery(
    queryOptions(getJobs())
  );
  React.useEffect(() => {
    refetch();
  }, [refresh]);
  if (isPending)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (isError)
    return (
      <div>
        <p className="text-red-700">Error...</p>
      </div>
    );
  return (
    <div className="px-2">
      <h1 className="text-neutral-500/50 text-5xl font-semibold py-3">
        Published Jobs
      </h1>

      <JobCard jobs={data} refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
};

export default AppliedJobs;
