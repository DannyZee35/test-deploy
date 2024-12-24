import { DataCard } from "@/components/quality-assurance-components/DataCard";
import Image from "next/image";
import React from "react";

import { TableSection } from "@/sections/TableSection";
import { TableComponent } from "@/components/quality-assurance-components/TableComponent";
import { columns } from "./columns";

async function getData() {
    return [
      {
        batchId: "347901",
        supplier: "Ammar Hussain",
        inspectedBy: "N/A",
        totalQty: 1500,
        type: "Labels",
        passed: "N/A",
        actions: null,  
      },
      {
        batchId: "347901",
        supplier: "Ammar Hussain",
        inspectedBy: "Shaoor Ahmed Afridi",
        totalQty: 1500,
        type: "Labels",
        passed: 1000,
        actions: null,
      },
      {
        batchId: "347901",
        supplier: "Ammar Hussain",
        inspectedBy: "Shaoor Ahmed Afridi",
        totalQty: 1500,
        type: "Labels",
        passed: 1000,
        actions: null,
      },
      {
        batchId: "347901",
        supplier: "Ammar Hussain",
        inspectedBy: "N/A",
        totalQty: 1500,
        type: "Labels",
        passed: "N/A",
        actions: null,
      },
      {
        batchId: "347901",
        supplier: "Ammar Hussain",
        inspectedBy: "Shaoor Ahmed Afridi",
        totalQty: 1500,
        type: "Labels",
        passed: 1000,
        actions: null,
      },
      {
        batchId: "347901",
        supplier: "Ammar Hussain",
        inspectedBy: "N/A",
        totalQty: 1500,
        type: "Labels",
        passed: "N/A",
        actions: null,
      },
      {
        batchId: "347901",
        supplier: "Ammar Hussain",
        inspectedBy: "Shaoor Ahmed Afridi",
        totalQty: 1500,
        type: "Labels",
        passed: 1000,
        actions: null,
      },
      {
        batchId: "347901",
        supplier: "Ammar Hussain",
        inspectedBy: "Shaoor Ahmed Afridi",
        totalQty: 1500,
        type: "Labels",
        passed: 1000,
        actions: null,
      },
      {
        batchId: "347901",
        supplier: "Ammar Hussain",
        inspectedBy: "N/A",
        totalQty: 1500,
        type: "Labels",
        passed: "N/A",
        actions: null,
      },
      {
        batchId: "347901",
        supplier: "Ammar Hussain",
        inspectedBy: "Shaoor Ahmed Afridi",
        totalQty: 1500,
        type: "Labels",
        passed: 1000,
        actions: null,
      },
      {
        batchId: "347901",
        supplier: "Ammar Hussain",
        inspectedBy: "N/A",
        totalQty: 1500,
        type: "Labels",
        passed: "N/A",
        actions: null,
      },
    ];
  }
const page = async () => {
const data = await getData()
  return (
    <>
      <div className=" container mt-5">


        
        <TableComponent columns={columns} data={data}/>
      
      </div>
    </>
  );
};

export default page;
