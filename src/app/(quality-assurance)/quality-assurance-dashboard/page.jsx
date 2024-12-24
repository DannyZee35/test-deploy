import { DataCard } from "@/components/quality-assurance-components/DataCard";
import Image from "next/image";
import React from "react";

import { TableSection } from "@/sections/TableSection";


const page = async () => {

  return (
    <>
      <div className=" container mt-5">
        <div className="flex justify-center md:justify-between w-full gap-5 flex-col  md:flex-row">
          <DataCard
            icon={"/dashboard.svg"}
            amount={"31, 6709"}
            title={"Pending Inspections"}
          />
          <DataCard
            icon={"/arrow.svg"}
            amount={"23, 900"}
            title={"Completed Inspections"}
          />
          <DataCard icon={"/arrow.svg"} amount={"55, 900"} title={"Returns"} />
        </div>

        {/* Table Section */}
        <TableSection />
      
      </div>
    </>
  );
};

export default page;
