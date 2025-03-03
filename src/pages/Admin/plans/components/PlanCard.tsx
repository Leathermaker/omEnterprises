import Modal from "@/components/functionality/Modal";
import useCookies from "@/hooks/useCookies";
import axios from "axios";
import { Edit, Trash } from "lucide-react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";
import UpdatePlan from "./UpdatePlan";
import toast from "react-hot-toast";

interface PlanCardProps {
  id: string;
  title: string;
  price: number;
  features: string[];
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  features,
  id,
  refresh,
  setRefresh,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { getToken } = useCookies();
  const token = getToken();

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/plan/delete/${id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      toast.success("Plan deleted successfully");
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" flex flex-col justify-between w-full sm:w-[19rem] h-full border rounded-md border-black/10 bg-OMblue/5 hover:bg-OMblue/10 duration-700  p-8 ">
        <div className="  flex flex-col gap-2  cursor-pointer ">
          <div className="flex gap-2">
            <Edit id={id} size={15} onClick={() => setIsModalOpen(true)} />
            <Trash id={id} size={15} onClick={() => handleDelete(id)} />
          </div>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <h1 className="text-5xl text-black/70 font-serif">{price}</h1>

          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 min-w-[20px] min-h-[20px]">
                <MdCheckCircle color="#9b59b6" size={20} className="w-5 h-5" />
              </div>
              <p className="text-black/60">{feature}</p>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <UpdatePlan
            title={title}
            price={price}
            features={features}
            setRefresh={setRefresh}
            refresh={refresh}
            id={id}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal>
      )}
    </>
  );
};

export default PlanCard;
