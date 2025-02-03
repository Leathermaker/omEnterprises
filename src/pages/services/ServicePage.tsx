import React from "react";
import ServiceHero from "./components/ServiceHero";
import ServicesButtons from "./components/ServicesButtons";
import ServiceDetail from "./components/services/ServiceDetail";
import { useServicesStore } from "@/store";

const ServicePage: React.FC = () => {
  const { selectedServiceId, setSelectedServiceId } = useServicesStore();

  return (
    <>
      <ServiceHero />
      <ServicesButtons setSelectedServiceId={setSelectedServiceId} />
      <ServiceDetail serviceId={selectedServiceId} />
    </>
  );
};

export default ServicePage;
