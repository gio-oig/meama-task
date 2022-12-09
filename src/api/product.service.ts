import { ICategory, Iciti, IContact } from "../types";

const URL = "https://cms.meamacollect.ge/meama-collect/api/client/ka";

export const fetchProducts = async (): Promise<ICategory[]> => {
  const response = await fetch(URL);
  return response.json();
};

export const fetchCities = async (): Promise<Iciti[]> => {
  const response = await fetch(`${URL}/cities`);
  return response.json();
};

export const fetchContacts = async (): Promise<IContact> => {
  const response = await fetch(`${URL}/contact-info`);
  return response.json();
};
