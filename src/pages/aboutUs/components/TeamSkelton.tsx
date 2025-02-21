import React from "react";

const TeamCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-24 h-24 rounded-full bg-gray-300"></div>

      {/* Text Skeleton */}
      <div className="w-full text-center">
        <div className="h-5 w-24 bg-gray-300 rounded-md mx-auto"></div>
        <div className="h-4 w-16 bg-gray-300 rounded-md mx-auto mt-1"></div>
      </div>
    </div>
  );
};

export default TeamCardSkeleton;
