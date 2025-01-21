import React from "react";
import { TestinomialTypes } from "./Testinomials";
import StarRating from "../../../../components/ui/StartRating";

const TestinomialCard: React.FC<TestinomialTypes> = ({
  image,
  from,
  comment,
  rating,
}) => {
  return (
    <div className="relative flex flex-col justify-between bg-white shadow-lg min-w-[18rem] w-[20rem] h-full rounded-lg pb-12 p-4 pt-6">
      {/* image section */}
      <div className="absolute -top-12 h-24 aspect-square rounded-full bg-white p-2 shadow-md">
        <img
          src={image}
          alt="avatar"
          className="h-full w-full rounded-full object-cover"
        />
      </div>

      <div className=" flex flex-col justify-end">
        <div className="w-full flex justify-end  ">
          {" "}
          <StarRating
            rating={rating}
            maxStars={5}
            starColor="text-OMblue self-end"
          />
        </div>
        <div className="mt-8 text-black/80 ">{comment}</div>
      </div>
      <div className="mt-4 ">
        <p className="text-lg  text-black/50 ">{from}</p>
      </div>
    </div>
  );
};

export default TestinomialCard;
