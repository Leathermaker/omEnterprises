import React from "react";

interface TeamCardProps {
  image: string;
  title: string;
  name: string;
}
const TeamCard: React.FC<TeamCardProps> = ({ title, image, name }) => {
  return (
    <div className="flex flex-col items-center gap-4">
    <div className="group w-[12rem] aspect-square  relative overflow-hidden rounded-full bg-OMblue/20 ">
        <img src={image} alt="images" className="w-full h-full object-cover" />
    </div>
    <div className="w-full text-center">
      <h1 className="text-lg font-semibold">{name}</h1>
      <h1 className="text-sm text-black/50">{title}</h1>
    </div>
    </div>
  );
};

export default TeamCard;
