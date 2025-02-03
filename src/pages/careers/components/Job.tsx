import React from "react";
import JobCard from "./JobCard";

const Job: React.FC = () => {
  const jobData = [
    {
      title: "Marketing Executives",
      qualification: "Graduate",
      gender: "Male",
      mandatory: "Computer Operating",
      skills: "Good Communication",
      location : "Jalandhar"

    },
    {
      title: "Software Engineer",
      qualification: "B.Tech",
      gender: "Any",
      mandatory: "Programming Skills",
      skills: "Problem Solving",
      location : "Jalandhar"

    },
    {
      title: "HR Manager",
      qualification: "MBA",
      gender: "Female",
      mandatory: "Recruitment Experience",
      skills: "Interpersonal Skills",
      location : "Jalandhar"
    },
  ];

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
        {jobData.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            qualification={job.qualification}
            gender={job.gender}
            mandatory={job.mandatory}
            skills={job.skills}
            location={job.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Job;