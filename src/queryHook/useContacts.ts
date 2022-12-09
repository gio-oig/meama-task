import { useQuery } from "@tanstack/react-query";
import { fetchContacts } from "../api/product.service";

export const useContacts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContacts,
  });

  return {
    data,
    isLoading,
  };
};
