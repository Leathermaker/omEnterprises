import Modal from "@/components/functionality/Modal";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import AddClient from "./components/AddClient";
import ClientCard from "./components/ClientCard";
import axios from "axios";
import toast from "react-hot-toast";
import UpdateClient from "./components/UpdateClientDetail";
import RemoveClient from "./components/RemoveClient";

export interface Client {
  _id: string;
  companyName: string;
  comment: string;
  rating: number;
  img: string;
}

const Clients: React.FC = () => {
  const [isOpenAddClientForm, setIsOpenAddClientForm] = useState(false);
  const [isOpenEditClientForm, setIsOpenEditClientForm] = useState(false);
  const [isOpenRemoveClientForm, setIsOpenRemoveClientForm] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const allClients = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/get/client`
      );
      setClients(response.data.clients);
    } catch (error) {
      toast.error("Failed to fetch clients");
      console.error("Error fetching clients:", error);
    }
  };

  useEffect(() => {
    allClients();
  }, [isOpenAddClientForm, isOpenEditClientForm, isOpenRemoveClientForm]);


  return (
    <div>
      {isOpenAddClientForm && (
        <Modal
          isModalOpen={isOpenAddClientForm}
          setIsModalOpen={setIsOpenAddClientForm}
        >
          <AddClient setOpen={setIsOpenAddClientForm} />
        </Modal>
      )}
      {isOpenEditClientForm && (
        <Modal
          isModalOpen={isOpenEditClientForm}
          setIsModalOpen={setIsOpenEditClientForm}
        >
          <UpdateClient
            setOpen={setIsOpenEditClientForm}
            client={selectedClient}
          />
        </Modal>
      )}
      {isOpenRemoveClientForm && (
        <Modal
          isModalOpen={isOpenRemoveClientForm}
          setIsModalOpen={setIsOpenRemoveClientForm}
        >
          <RemoveClient
            setOpen={setIsOpenRemoveClientForm}
            client={selectedClient}
          />
        </Modal>
      )}
      <div className="h-[4rem] w-full flex items-center justify-end px-6 pt-3">
        <Plus
          onClick={() => setIsOpenAddClientForm(true)}
          size={20}
          className="cursor-pointer float-end bg-gray-300 p-1 rounded-full"
        />
      </div>
      <ClientCard
        clients={clients}
        setEditForm={setIsOpenEditClientForm}
        setSelectedClient={setSelectedClient}
        setRemoveForm={setIsOpenRemoveClientForm}
      />
    </div>
  );
};

export default Clients;
