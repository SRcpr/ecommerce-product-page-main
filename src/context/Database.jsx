import { createContext, useState } from "react";

export const DatabaseContext = createContext();
export const DataProvider = ({ children }) => {
  const [cartInfo, setCartInfo] = useState({ cart: 0, count: 0, cartSum: 0 });
  return (
    <DatabaseContext.Provider value={{ cartInfo, setCartInfo }}>
      {children}
    </DatabaseContext.Provider>
  );
};
