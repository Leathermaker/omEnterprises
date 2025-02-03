import XpaddingWrapper from "@/components/XpaddingWrapper";
import React from "react";
import khushi from "@/assets/images/khushi.png";
import TeamCard from "./TeamCard";

const Team: React.FC = () => {
  const team = [
    {
      image: khushi,
      name: "Ms. Khushdeep Kaur",
      title: "Message Department",
    },
    {
      image: khushi,
      name: "Ms. Khushdeep Kaur",
      title: "Message Department",
    },
    {
      image: khushi,
      name: "Ms. Khushdeep Kaur",
      title: "Message Department",
    },
    {
      image: khushi,
      name: "Ms. Khushdeep Kaur",
      title: "Message Department",
    },
    {
      image: khushi,
      name: "Ms. Khushdeep Kaur",
      title: "Message Department",
    },
    {
      image: khushi,
      name: "Ms. Khushdeep Kaur",
      title: "Message Department",
    },
    {
      image: khushi,
      name: "Ms. Khushdeep Kaur",
      title: "Message Department",
    },
    {
      image: khushi,
      name: "Ms. Khushdeep Kaur",
      title: "Message Department",
    },
    {
      image: khushi,
      name: "Ms. Khushdeep Kaur",
      title: "Message Department",
    },
    {
      image: khushi,
      name: "Ms. Khushdeep Kaur",
      title: "Message Department",
    },
    {
      image: khushi,
      name: "Ms. Khushdeep Kaur",
      title: "Message Department",
    },
    {
      image: khushi,
      name: "Ms. Khushdeep Kaur",
      title: "Message Department",
    },
  ];

  return (
    <XpaddingWrapper>
      <div className="py-12 relative ">
        <h1 className="absolute top-[4.5rem] left-0 right-0 text-6xl font-bold text-OMblue bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent text-center">
          Team
        </h1>
        <h1 className="text-4xl font-bold text-center text-blue-950 mt-16">
          Meet Our Team
        </h1>
      </div>

      <div className="flex flex-wrap justify-center md:gap-6">
        {team.map((member, i) => (
          <div key={`MEMBER_${i}`} className="md:p-6 p-5 w-[18rem]">
            <TeamCard
              image={member.image}
              title={member.title}
              name={member.name}
              index={i}
            />
          </div>
        ))}
      </div>
    </XpaddingWrapper>
    );
};

export default Team;
