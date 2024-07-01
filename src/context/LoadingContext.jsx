import React, { createContext, useState, useContext, useEffect } from "react";

const LoadingContext = createContext();
export const useLoading = () => useContext(LoadingContext);
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  setTimeout(() => {
    setLoading(false); 
  }, 2000); 
  },[])

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
