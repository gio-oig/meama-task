import { useQuery } from "@tanstack/react-query";
import { fetchCities } from "../api/product.service";

export const useLocations = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["locations"],
    queryFn: fetchCities,
  });

  return {
    cities: data,
    isLoading,
  };
};
