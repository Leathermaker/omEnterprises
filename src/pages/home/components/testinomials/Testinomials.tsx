import React, { useRef, useEffect, useState } from "react";
import { WideScreenHandler } from "../../../../components";
import XpaddingWrapper from "../../../../components/XpaddingWrapper";
import TestinomialCard from "./TestinomialCard";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface TestinomialTypes {
  image: string;
  rating: number;
  comment: string;
  from: string;
}

const Testinomials: React.FC = () => {
  const testinomials: TestinomialTypes[] = [
    {
      image:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_incoming",
      rating: 4,
      comment:
        "Great company to do business. We have worked with him on numerous projects-Bulk SMS, Digital Marketing, Whatsapp Promotions, etc.",
      from: "John Doe",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4,
      comment:
        "Great company to do business. We have worked with him on numerous projects-Bulk SMS, Digital Marketing, Whatsapp Promotions, etc.",
      from: "John Doe",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_incoming",
      rating: 4,
      comment:
        "Great company to do business. We have worked with him on numerous projects-Bulk SMS, Digital Marketing, Whatsapp Promotions, etc.",
      from: "John Doe",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_incoming",
      rating: 4,
      comment:
        "Great company to do business. We have worked with him on numerous projects-Bulk SMS, Digital Marketing, Whatsapp Promotions, etc.",
      from: "John Doe",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_incoming",
      rating: 4,
      comment:
        "Great company to do business. We have worked with him on numerous projects-Bulk SMS, Digital Marketing, Whatsapp Promotions, etc.",
      from: "John Doe",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_incoming",
      rating: 4,
      comment:
        "Great company to do business. We have worked with him on numerous projects-Bulk SMS, Digital Marketing, Whatsapp Promotions, etc.",
      from: "John Doe",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_incoming",
      rating: 4,
      comment:
        "Great company to do business. We have worked with him on numerous projects-Bulk SMS, Digital Marketing, Whatsapp Promotions, etc.",
      from: "John Doe",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  // Duplicate the testimonials to create an infinite loop effect
  const duplicatedTestimonials = [...testinomials, ...testinomials];

  // Scroll to the left
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Scroll to the right
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll cards in a loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoScroll && containerRef.current) {
      interval = setInterval(() => {
        if (containerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

          // If the scroll reaches the end of the duplicated cards, reset to the start
          if (scrollLeft + clientWidth >= scrollWidth) {
            containerRef.current.scrollTo({ left: 0, behavior: "instant" });
          } else {
            // Scroll to the right
            containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
          }
        }
      }, 3000); // Adjust interval duration as needed
    }
    return () => clearInterval(interval);
  }, [autoScroll]);

  return (
    <WideScreenHandler className="h-[45rem]">
      <div className="relative py-12 w-full bg-gray-100 h-[25rem] pt-16">
        <h1 className="absolute left-0 right-0 top-7 sm:text-6xl text-5xl font-bold text-center bg-gradient-to-b from-blue-950/80 via-blue-950/20 to-transparent bg-clip-text text-transparent">
          TESTINOMIALS
        </h1>
        <div className="flex items-center justify-center gap-5 text-OMblue">
          <HiOutlineViewGridAdd size={25} />
          <h1 className="font-semibold md:text-base text-xs">
            Client Feedback
          </h1>
        </div>
        <h1 className="text-center text-4xl font-bold mt-3 text-gray-600">
          What Happy Clients Says
        </h1>
        <FaChevronLeft
          className="mt-12 absolute z-10 lg:bottom-0 -bottom-56 left-12 hidden md:block cursor-pointer  bg-OMblue hover:bg-OMblue/90 hover:scale-110 duration-300 rounded-full p-2"
          onClick={scrollLeft}
          size={25}
          color="white"
        />
        <FaChevronRight
          className="mt-12 absolute z-10 lg:bottom-0 -bottom-56 right-12 cursor-pointer  hidden md:block bg-OMblue  hover:bg-OMblue/90 hover:scale-110 duration-300  rounded-full p-2"
          size={25}
          color="white"
          onClick={scrollRight}
        />
        <XpaddingWrapper>
          <div
            ref={containerRef}
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
            className="absolute z-10 pb-12 h-[28rem] -bottom-64 lg:left-24 lg:right-24 left-4 right-4 flex justify-start gap-5 overflow-x-scroll scrollbar-hide pt-14 px-4"
          >
            {duplicatedTestimonials.map(
              (testinomial: TestinomialTypes, index: number) => (
                <TestinomialCard
                  key={`TESTINOMIAL_${index}`}
                  {...testinomial}
                />
              )
            )}
          </div>
        </XpaddingWrapper>
      </div>
    </WideScreenHandler>
  );
};

export default Testinomials;
