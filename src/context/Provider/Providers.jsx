import React from "react";
import { LoadingProvider } from "../LoadingContext";
import { QwestProvider } from "../QwestContext";


const Providers = ({ children }) => {
  return (
    <LoadingProvider>
      <QwestProvider>
        {children}
      </QwestProvider>
    </LoadingProvider>
  );
};

export default Providers;
