import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import JobCard from './components/JobCard';

const AppliedJobs = () => {
    const [jobs, setJobs] = React.useState([]);
    const [refresh, setRefresh] = React.useState(false);

    const getAllJobs = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/api/v1/admin/all/jobs`
            );
            setJobs(response.data.jobs);
            console.log(response.data.jobs);
        }
        catch (error) {
            toast.error("Failed to fetch jobs");
            console.error("Error fetching jobs:", error);
        }
    }
    React.useEffect(() => {
        getAllJobs();
    }, [refresh, setRefresh])
    if(!jobs) return <div><p>Loading...</p></div>;
  return (
    <div className='px-2'>
        <h1 className='text-neutral-500/50 text-5xl font-semibold py-3'>Published Jobs</h1>
       
        <JobCard 
         jobs = {jobs}
         refresh = {refresh}
         setRefresh = {setRefresh}
        />
    </div>
  )
}

export default AppliedJobs