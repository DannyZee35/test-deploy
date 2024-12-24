import {
  QualityAssuranceSidebar,
  Header,
  SidebarComponent
} from "@/components/quality-assurance-components";

import React from "react";

const QualityAssuranceLayout = ({ children }) => {
  return (
    <div className="flex items-start">
      <SidebarComponent />
     
         
<div className="w-full "> 
  <Header />
{children}
</div>
      
    
    </div>
  );
};

export default QualityAssuranceLayout;
