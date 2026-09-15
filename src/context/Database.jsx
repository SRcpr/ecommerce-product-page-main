import { createContext } from "react";

export const DatabaseContext = createContext();
export const DataProvider = ({ children }) => {
  const cart = 20;
  return (
    <DatabaseContext.Provider value={cart}>{children}</DatabaseContext.Provider>
  );
};
