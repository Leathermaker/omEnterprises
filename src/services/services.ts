import { queryOptions } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

//Token
const getToken = () => {
  return Cookies.get("token");
};

//get request
const fetchTeamMates = async () => {
  try {
    const resp = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/v1/admin/employee`
    );

    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchAllJobs = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/v1/admin/all/jobs`
    );
    return response.data.jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};

const fetchJobQueries = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/v1/admin/get/job/query`,
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
    return response.data.jobs;
  } catch (error) {
    console.log(error);
  }
};

const fetchTransactionalPlans = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/v1/admin/plan/get/transactional`
    );
    return response.data.plans;
  } catch (error) {
    console.log(error);
  }
};

const fetchPromotionalPlans = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/v1/admin/plan/get/promotional`
    );
    return response.data.plans;
  } catch (error) {
    console.log(error);
  }
};

const fetchInstantCallBack = async () => {
  try {
    const instantCallbackQueries = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/v1/admin/instant/call`,
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
    return instantCallbackQueries.data.data;
  } catch (error) {
    console.log(error);
    toast.error("something went wrong");
  }
};

const fetchContactQuery = async () => {
  try {
    const instantContactQueries = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/v1/admin/form/contact`,
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
    return instantContactQueries.data.data;
  } catch (error) {
    console.log(error);
    toast.error("something went wrong");
  }
};
//post request
const addJob = async (data: any) => {
  try {
    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/v1/admin/create/job`,
      data,
      {
        headers: {
          authorization: getToken(),
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
  // Add logic to submit the form data (e.g., API call)
};

const instantCallApiCall = async (data: any) => {
  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/v1/admin/instant/call`,
      data
    );
    if (resp.statusText == "OK") {
      toast.success("query sent");
    }
  } catch (error) {
    console.log(error);
    toast.error("something went wrong");
  }
};

//tansstack get queries

const getTeamMates = () => {
  return queryOptions({
    queryKey: ["teamMates"],
    queryFn: fetchTeamMates,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

const getJobs = () => {
  return queryOptions({
    queryKey: ["jobs"],
    queryFn: fetchAllJobs,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

const getJobQueries = () => {
  return queryOptions({
    queryKey: ["jobqueries"],
    queryFn: fetchJobQueries,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

const getTransactionalPlans = () => {
  return queryOptions({
    queryKey: ["transactionalPlans"],
    queryFn: fetchTransactionalPlans,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

const getPromotionalPlans = () => {
  return queryOptions({
    queryKey: ["promotionalPlans"],
    queryFn: fetchPromotionalPlans,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

const getContactUsQuery = () => {
  return queryOptions({
    queryKey: ["contactQueries"],
    queryFn: fetchContactQuery,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

const getInstantCallBackQuery = () => {
  return queryOptions({
    queryKey: ["instantCallbacks"],
    queryFn: fetchInstantCallBack,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export {
  addJob,
  getTeamMates,
  getJobs,
  getJobQueries,
  getTransactionalPlans,
  getPromotionalPlans,
  getInstantCallBackQuery,
  getContactUsQuery,
  instantCallApiCall,
};
