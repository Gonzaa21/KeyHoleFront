import { createContext, useContext, useState } from "react";

const BreadcrumbContext = createContext();


export const BreadcrumbProvider = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState("Homepage");

  return (
    <BreadcrumbContext.Provider value={{ breadcrumb, setBreadcrumb }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};


export const useBreadcrumb = () => useContext(BreadcrumbContext);
