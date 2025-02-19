import React, { useEffect, useState } from "react";
import JobQueryCard from "./JObQueryCards";
import axios from "axios";
import useCookies from "@/hooks/useCookies";

interface JobQueries {
  id: number;
  name: string;
  email: string;
  position: string;
  isFresher: boolean;
  experience: string;
  availability: string;
}

// const JObQueriesData: JobQueries[] = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     position: "Software Engineer",
//     isFresher: false,
//     experience: "Worked at XYZ Corp for 2 years as a Frontend Developer.",
//     availability: "Immediately",
//     resumeUrl: "/resumes/john_doe.pdf",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     position: "UI/UX Designer",
//     isFresher: true,
//     experience: "No prior experience, but completed multiple freelance projects.",
//     availability: "In 2 weeks",
//     resumeUrl: "/resumes/jane_smith.pdf",
//   },
//   {
//     id: 3,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     position: "Software Engineer",
//     isFresher: false,
//     experience: "Worked at XYZ Corp for 2 years as a Frontend Developer.",
//     availability: "Immediately",
//     resumeUrl: "/resumes/john_doe.pdf",
//   },
//   {
//     id: 4,
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     position: "UI/UX Designer",
//     isFresher: true,
//     experience: "No prior experience, but completed multiple freelance projects.",
//     availability: "In 2 weeks",
//     resumeUrl: "/resumes/jane_smith.pdf",
//   },
//   {
//     id: 5,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     position: "Software Engineer",
//     isFresher: false,
//     experience: "Worked at XYZ Corp for 2 years as a Frontend Developer.",
//     availability: "Immediately",
//     resumeUrl: "/resumes/john_doe.pdf",
//   },
//   {
//     id: 6,
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     position: "UI/UX Designer",
//     isFresher: true,
//     experience: "No prior experience, but completed multiple freelance projects.",
//     availability: "In 2 weeks",
//     resumeUrl: "/resumes/jane_smith.pdf",
//   },
//   {
//     id: 7,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     position: "Software Engineer",
//     isFresher: false,
//     experience: "Worked at XYZ Corp for 2 years as a Frontend Developer.",
//     availability: "Immediately",
//     resumeUrl: "/resumes/john_doe.pdf",
//   },
//   {
//     id: 8,
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     position: "UI/UX Designer",
//     isFresher: true,
//     experience: "No prior experience, but completed multiple freelance projects.",
//     availability: "In 2 weeks",
//     resumeUrl: "/resumes/jane_smith.pdf",
//   },
//   {
//     id: 9,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     position: "Software Engineer",
//     isFresher: false,
//     experience: "Worked at XYZ Corp for 2 years as a Frontend Developer.",
//     availability: "Immediately",
//     resumeUrl: "/resumes/john_doe.pdf",
//   },
//   {
//     id: 10,
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     position: "UI/UX Designer",
//     isFresher: true,
//     experience: "No prior experience, but completed multiple freelance projects.",
//     availability: "In 2 weeks",
//     resumeUrl: "/resumes/jane_smith.pdf",
//   },
//   {
//     id: 11,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     position: "Software Engineer",
//     isFresher: false,
//     experience: "Worked at XYZ Corp for 2 years as a Frontend Developer.",
//     availability: "Immediately",
//     resumeUrl: "/resumes/john_doe.pdf",
//   },
//   {
//     id: 12,
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     position: "UI/UX Designer",
//     isFresher: true,
//     experience: "No prior experience, but completed multiple freelance projects.",
//     availability: "In 2 weeks",
//     resumeUrl: "/resumes/jane_smith.pdf",
//   },
//   {
//     id: 13,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     position: "Software Engineer",
//     isFresher: false,
//     experience: "Worked at XYZ Corp for 2 years as a Frontend Developer.",
//     availability: "Immediately",
//     resumeUrl: "/resumes/john_doe.pdf",
//   },
//   {
//     id: 14,
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     position: "UI/UX Designer",
//     isFresher: true,
//     experience: "No prior experience, but completed multiple freelance projects.",
//     availability: "In 2 weeks",
//     resumeUrl: "/resumes/jane_smith.pdf",
//   },
//   {
//     id: 15,
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     position: "UI/UX Designer",
//     isFresher: true,
//     experience: "No prior experience, but completed multiple freelance projects.",
//     availability: "In 2 weeks",
//     resumeUrl: "/resumes/jane_smith.pdf",
//   },
//   {
//     id: 16,
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     position: "UI/UX Designer",
//     isFresher: true,
//     experience: "No prior experience, but completed multiple freelance projects.",
//     availability: "In 2 weeks",
//     resumeUrl: "/resumes/jane_smith.pdf",
//   },
//   resumeUrl: string;
// ];



const UserCardsList: React.FC = () => {
    const { getToken} = useCookies();
    const token = getToken();
    const[JobQueriesData, setJobQueriesData] = useState<any>([])
  const fetchJobQueries = async () => {
    try {
     const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/get/job/query`,{
      headers: {
        authorization: token,
      },
     })   
     setJobQueriesData(response.data.jobs)
      if(response.status === 200){
        console.log(response.data.jobs[4])
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchJobQueries()
  },[])
  return (
    // <div className="flex flex-wrap gap-6 justify-center p-6  bg-red-800  h-screen relative z-50 overflow-y-scroll">
    <div className="grid grid-cols-3 gap-6  place-items-center  ">

      {JobQueriesData.map((job) => (
        <JobQueryCard key={job.id} {...job}  />
      ))}
      </div>
  );
};

export default UserCardsList;
  