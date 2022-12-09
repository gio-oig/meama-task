import { products } from "../data";
import { ICategory, Iciti } from "../types";

const URL = "https://cms.meamacollect.ge/meama-collect/api/client/ka";

export const fetchProducts = async (): Promise<ICategory[]> => {
  // const response = await fetch(URL);
  // return response.json();
  // @ts-ignore
  return products;
};

export const fetchCities = async (): Promise<Iciti[]> => {
  const response = await fetch(`${URL}/cities`);
  return response.json();
};
