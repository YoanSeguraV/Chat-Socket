import { createContext, useContext } from "react";

export const ServiceContext = createContext();

export const Context = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    new Error("context not found");
  }
  return context;
};

export const ServiceContextProvider = ({ children }) => {
  return (
    <ServiceContext.Provider value={{}}>{children}</ServiceContext.Provider>
  );
};
