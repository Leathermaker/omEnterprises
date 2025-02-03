import React, { useState } from "react";
import ServiceHero from "./components/ServiceHero";
import ServicesButtons from "./components/ServicesButtons";
import ServiceDetail from "./components/services/ServiceDetail";
const ServicePage: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<number>(1);

  return (
    <>
      <ServiceHero />
      <ServicesButtons setSelectedServiceId={setSelectedServiceId} />
      <ServiceDetail serviceId={selectedServiceId} />
    </>
  );
};

export default ServicePage;
