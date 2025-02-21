import React, { useState } from "react";
import JobCard from "./JobCard";
import Modal from "@/components/functionality/Modal";
import JobApply from "./JobApply";
import axios from "axios";
import toast from "react-hot-toast";
import JobCardSkeleton from "./JobcardSkelton";

const Job: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [jobData, setJobData] = React.useState<any>([]);
  const [refresh, setRefresh] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const getAllJobs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/all/jobs`
      );
      setJobData(response.data.jobs);
      setIsLoading(false);                              
    } catch (error) {
      toast.error("Failed to fetch jobs");
      setIsLoading(false);
      console.error("Error fetching jobs:", error);
    }
  };
  React.useEffect(() => {
    getAllJobs();
  }, [refresh, setRefresh]);
  return (
    <div className="md:mt-36  mb-24 ">
      <div className="relative mb-12">
        <h1 className="text-3xl font-bold absolute -top-7 left-0 right-0 text-center text-blue-950 bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent">
          OPPORTUNITIES
        </h1>
        <h1 className="text-4xl font-bold text-center text-blue-950">
          Explore Our Job Opportunities
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <JobCardSkeleton />
        ) : (
          jobData.map((job:any) => (
            <JobCard
              key={job._id}
              jobId={job._id}
              title={job.title}
              qualification={job.qualification}
              gender={job.gender}
              mandatory={job.mandatory}
              skills={job.skill}
              location={job.location}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              setSelectedId={setSelectedId}
            />
          ))
        )}

        {isModalOpen && (
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <JobApply selectedId={selectedId} setIsModalOpen={setIsModalOpen} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Job;
