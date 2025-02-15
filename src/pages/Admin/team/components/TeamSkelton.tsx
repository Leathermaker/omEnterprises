import React from "react";

const TeamSkeleton: React.FC = () => {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 rounded-xl m-2 p-2 animate-pulse"
          >
            {/* Image Skeleton */}
            <div className="w-[12rem] aspect-square rounded-lg bg-gray-300/50"></div>

            {/* Content Skeleton */}
            <div className="h-[12rem] w-full px-6 space-y-3">
              <div className="h-6 w-3/4 bg-gray-300/50 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-300/50 rounded"></div>
              <div className="h-4 w-1/3 bg-gray-300/50 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-300/50 rounded"></div>
            </div>

            {/* Actions Skeleton */}
            <div className="bg-gray-300 rounded-xl flex flex-col items-center justify-center w-24 h-[12rem]">
              <div className="w-6 h-6 bg-gray-400/50 rounded-full mb-3"></div>
              <div className="w-6 h-6 bg-gray-400/50 rounded-full"></div>
            </div>
          </div>
        ))}
    </>
  );
};

export default TeamSkeleton;