interface UpdatePlanProps {
  title: string;
  price: number | string;
  features: string[];
  id: string;
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}









export type {
    UpdatePlanProps
}