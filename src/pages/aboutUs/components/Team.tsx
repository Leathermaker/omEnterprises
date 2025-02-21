import XpaddingWrapper from "@/components/XpaddingWrapper";
import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import axios from "axios";
import TeamSkeleton from "@/pages/Admin/team/components/TeamSkelton";
import { motion } from "motion/react";

const Team: React.FC = () => {
  const [team, setTeam] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchTeamMates = async () => {
    setIsLoading(true);
    try {
      const resp = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/employee`
      );

      setTeam(resp.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    fetchTeamMates();
  }, []);

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
        {isLoading ? (
          <TeamSkeleton />
        ) : (
          team.map((member, i) => (
            <motion.div
              initial={{ opacity: 0, }}
              animate={{ opacity: 1,  }}
              transition={{ delay: i * 0.1, ease: "easeInOut" }}
              key={`MEMBER_${i}`}
              className="md:p-6 p-5 w-[18rem]"
            >
              <TeamCard
                image={member?.image}
                title={member?.designation}
                name={member?.name}
              />
            </motion.div>
          ))
        )}
      </div>
    </XpaddingWrapper>
  );
};

export default Team;
