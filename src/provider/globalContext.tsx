import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";

interface MainContextProps {
  openModal: () => void;
  closeModal: () => void;
}

export const MainContext = createContext<MainContextProps | null>(null);

type ContextProviderProps = {
  children: ReactNode;
};

const bodyClass = "visible-product-detail";

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const navigate = useNavigate();

  const openModal = () => {
    setTimeout(() => {
      document.body.classList.add(bodyClass);
    }, 0);
  };

  const closeModal = () => {
    document.body.classList.remove(bodyClass);

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <MainContext.Provider value={{ openModal, closeModal }}>
      {children}
    </MainContext.Provider>
  );
};

export const useGlobalContext = () => {
  const value = useContext(MainContext);

  if (!value) {
    throw new Error("Context Provider is not defined");
  }
  return value;
};
