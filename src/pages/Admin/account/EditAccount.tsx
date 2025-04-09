import React from "react";
import { motion } from "motion/react";
import useCurrentUser from "@/store/currentUser";
import Input from "@/components/ui/Input";

const EditAccount: React.FC = () => {
  const { currentUser } = useCurrentUser();
  return (
    <>
      <motion.div
        initial={{ y: -650 }}
        animate={{ y: 0, transition: { duration: 0.5 } }}
        exit={{ y: -650, transition: { duration: 0.5 } }}
        className="w-full h-full absolute translate-y-12  bg-gray-800/50 backdrop-blur-xl rounded-lg p-4  "
      >
        <h1 className="text-5xl font-bold text-white">Edit Account</h1>
        <div className="w-full h-full  rounded-xl px-12 py-12">
          <div className="flex justify-between items-center p-4 border-b border-gray-200/10">
            <h1 className="text-xl   text-white">Email</h1>
            <div className="flex items-center gap-2 ">
              <h1 className=" text-white">
                {currentUser ? currentUser?.email : "searching...."}{" "}
              </h1>
              
            </div>
          </div>
          <div className="flex justify-between items-center p-4 border-b border-gray-200/10">
            <h1 className="text-xl   text-white">Phone</h1>
            <div className="flex items-center gap-2 ">
              <h1 className=" text-white">
                {/* {currentUser ? currentUser?.phone : "searching...."} */}
                <Input 
                value={currentUser?currentUser?.phone : "searching.."}  
                className="text-black"
                placeholder="enter"
                onChange={()=>{}}
                />

              </h1>
              
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default EditAccount;
