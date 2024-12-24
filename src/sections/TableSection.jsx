import React from "react";
import { Input } from "@/components/ui/input";
import { ListFilter, Search } from "lucide-react";
import { TableComponent } from "@/components/quality-assurance-components/TableComponent";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columns } from "@/app/(quality-assurance)/material-inspection/columns";
 
async function getData() {
  return [
    {
      batchId: "347901",
      supplier: "Ammar Hussain",
      inspectedBy: "N/A",
      totalQty: 1500,
      type: "Labels",
      passed: "N/A",
      actions: null, // This will be handled by the cell renderer
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

export const TableSection = async() => {
  const data = await getData();


  return (
    <>
    
    <div className="flex items-center my-10 gap-10 md:gap-20 flex-col md:flex-row" >
      <p className="text-lg font-normal whitespace-nowrap">All Inspections</p>

      <div className="flex gap-4 flex-col md:flex-row w-full">
        <div className="flex items-center bg-white px-4 p-2 rounded-lg">
          <Search color="#A9A9A9" />
          <Input placeholder="Search" />
        </div>
        <div className="flex items-center bg-white px-4 p-2 rounded-lg">
          <ListFilter size={20} color="#A9A9A9"   />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
    <Tabs defaultValue="inventory" className="w-full  ">
        <TabsList className="bg-transparent border-b p-0 h-full border-b-custom-gray w-full rounded-none justify-start ">
        <TabsTrigger value="inventory" className=" data-[state=active]:border-b-custom-leafGreen border-b rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent">Inventory</TabsTrigger>
            <TabsTrigger value="returns" className=" data-[state=active]:border-b-custom-leafGreen border-b rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent">Returns</TabsTrigger>
          </TabsList>
          <TabsContent value="inventory">
            <TableComponent columns={columns} data={data} />
          </TabsContent>
          <TabsContent value="returns">abc</TabsContent>
        </Tabs>

        
    </>
  );
};
