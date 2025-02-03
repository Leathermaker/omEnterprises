import React from "react";
import team from "@/assets/svg/team.svg";
import XpaddingWrapper from "@/components/XpaddingWrapper";
const AboutHero:React.FC = () => {
  return (
    <XpaddingWrapper>
      <div className=" min-h-[50rem] h-auto grid grid-cols-12 ">
        <div className="col-span-12 md:col-span-6 flex flex-col gap-4 items-start justify-start py-24">
          <div className="relative ">
            <h1 className="text-5xl font-bold absolute -top-7 left-0 right-0 text-start text-blue-950 bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent">
              ABOUT
            </h1>
            <h1 className=" text-4xl font-bold text-center text-blue-950">
              Who We Are{" "}
            </h1>
          </div>
          <div className="w-10/12">
            <p className="text-lg">
              OM Enterprises Group is a leading company in A2P and P2P bulk SMS
              and digital marketing. We provide bulk SMS service in all over
              India.We provide highly reliable and innovative APIs to send
              various bulk email, bulk voice SMS and internet marketing for
              promotion. We also provide customized bulk messaging services as
              required by our clients.We are here with advanced technology and
              techniques for business establishments and Growth. We are in the
              new millennium and need appropriate communication solutions for
              better business association and client’s satisfaction.Our
              comprehensive range of Bulk SMS Service, Short Code, Long-code
              service, Missed call alert service, Voice call service, IVR
              service, and Toll-Free Service for Business Promotion
              Consultation, Online Reputation Management will commence a new and
              different way to deal. Our promotion strategies are customized and
              suitable for all industries.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col gap-4 items-end justify-center py-12 md:py-0">
          <img src={team} alt="image" className="w-8/12" />
        </div>
      </div>
    </XpaddingWrapper>
  );
};

export default AboutHero;
