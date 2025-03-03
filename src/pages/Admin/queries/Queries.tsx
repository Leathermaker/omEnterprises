import {
  getContactUsQuery,
  getInstantCallBackQuery,
} from "@/services/services";
import { queryOptions, useQuery } from "@tanstack/react-query";
import React from "react";
import QueryCard from "./components/QueryCard";
import ContactQueryCard from "./components/ContactQueryCard";

const Queries: React.FC = () => {
  const { data, isPending, isError } = useQuery(
    queryOptions(getInstantCallBackQuery())
  );
  const {
    data: contactData,
    isPending: cIsPending,
    isError: cError,
  } = useQuery(queryOptions(getContactUsQuery()));
  console.log(data);

  if (isError && cError) {
    return <h1 className="text-5xl font-semibold text-red-500/40">Error</h1>;
  }
  return (
    <div className="p-4">
      <h1 className="text-5xl font-semibold text-blue-950/40">
        Instant CallBacks
      </h1>
      {isPending ? (
        <h1>Loading...</h1>
      ) : (
        <div
          className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12
        "
        >
          {data?.map((query: any) => (
            <QueryCard key={query._id} {...query} />
          ))}
        </div>
      )}
      <h1 className="text-5xl font-semibold text-blue-950/40 mt-12">
        Contact Us
      </h1>
      {cIsPending ? (
        <h1>Loading...</h1>
      ) : (
        <div
          className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12
        "
        >
          {contactData?.map((query: any) => (
            <ContactQueryCard key={query._id} {...query} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Queries;
