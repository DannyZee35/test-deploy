import { ButtonComponent } from "@/components/quality-assurance-components/ButtonComponent";
import { Button } from "@/components/ui/button";
import { QualityReport } from "@/sections/QualityReport";
import { SupplierDetails } from "@/sections/SupplierDetails";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const page = () => {
  return (
    <>
      <div className="px-10">
        <div className="flex justify-between items-center mt-10">
          <p className="text-lg font-normal whitespace-nowrap">Inspection</p>

          <Button size="lg" variant="primary">
            Add Inspection
          </Button>
        </div>

        {/* Inspection Details Section */}
        <div className="bg-white my-10 p-5 flex flex-col gap-5">
          <div className="flex items-center justify-between  ">
            <p>Details</p>
            <span className="bg-[#E2F7D6] text-[#4DDA02] px-5 p-2 rounded-lg">
              {" "}
              Pass
            </span>
          </div>
          <div className="flex items-center justify-start gap-40   ">
            <p>Quote</p>
            <Select >
              <SelectTrigger className="w-[300px] ">
                <SelectValue placeholder="#8819928" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="8819928">8819928</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-start gap-36   ">
            <p>Supplier</p>
            <Select >
              <SelectTrigger className="w-[300px] ">
                <SelectValue placeholder="#8819928" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="RahimKhan">Rahim Khan</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-start gap-24       ">
            <p>Raw Materials</p>
            <table className="border-collapse border border-[#E4E4E4] w-[600px]">
              <thead className="rounded-tl-lg rounded-tr-lg bg-white">
                <tr>
                  <th className="border border-[#E4E4E4] p-2 font-normal">
                    Items
                  </th>
                  <th className="border border-[#E4E4E4] p-2 font-normal">
                    Quantity
                  </th>
                  <th className="border border-[#E4E4E4] p-2 font-normal">
                    Passed Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#E4E4E4] p-2 bg-[#F6F6F6] text-[#848282]">
                    Bottle Caps
                  </td>
                  <td className="border border-[#E4E4E4] p-2 bg-[#F6F6F6] text-[#848282]">
                    120
                  </td>
                  <td className="border border-[#E4E4E4] p-2">
                    <div className="flex items-center justify-center">
                    <Select >
              <SelectTrigger className="w-[80px] ">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="30">30</SelectItem>

                </SelectGroup>
              </SelectContent>
            </Select>
                    </div>
                 
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#FDEDED] border border-[#E40000] p-4 rounded-lg flex items-center gap-5">
          <Image src={"/info.svg"} width={20} height={20} alt={"Info Icon"} />
          <p className="text-[#595959] text-sm">
            100 items (bottle caps) supplied by Ahmed Wakil have been added to
            the <span className="font-bold">“Returns” </span> “Returns”
            inventory{" "}
          </p>
        </div>
        <button className="bg-[#265E54] hidden">Save</button>

        <SupplierDetails />
        <QualityReport />
      </div>
    </>
  );
};

export default page;
