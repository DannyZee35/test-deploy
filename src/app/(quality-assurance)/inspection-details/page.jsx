import React from "react";
import Image from "next/image";
function page() {
  return (
    <>
      <h3 className="px-10 mt-20 text-[24px]  font-normal">
        Inspection Details
      </h3>
      <div className="flex ">
        <div className="mx-10 px-10 p-5 bg-white my-10 ">
          <strong>Batch ID</strong>
          <div className="flex items-center justify-between">
            <p>#7894590</p>
            <p>
              Status: <span className="text-[#4DDA02]">Pass</span>
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-5 my-10 ">
              <h3 className="font-normal  text-nowrap ">General Details</h3>
              <div className="h-0.5 w-full bg-[#E8E8E8]" />
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Batch ID</strong>
              <p>#5689100</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Inspected on</strong>
              <p>12 March, 2024</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Inspected by</strong>
              <p>Ahmed Zulfiqar</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-5 my-10">
              <h3 className="font-normal  text-nowrap ">Supplier Details</h3>
              <div className="h-0.5 w-full bg-[#E8E8E8]" />
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Supplier ID</strong>
              <p>#3456778911</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>CR Number</strong>
              <p>5610093799</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Supplier Name</strong>
              <p>Ahmed Faraz</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Phone</strong>
              <p>+92 331 5657910</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Email Address</strong>
              <p>ahmedfaraz@gmail.com</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Address</strong>
              <p>House 24, Street 34 Commercial Karchi, Pakistan</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-5 my-10">
              <h3 className="font-normal  text-nowrap ">Requested By</h3>
              <div className="h-0.5 w-full bg-[#E8E8E8]" />
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>User ID</strong>
              <p>#3456778911</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Quote ID </strong>
              <p>5583920011</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>User Name</strong>
              <p>Ahmed Faraz</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Role</strong>
              <p>Sales Manager</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Phone</strong>
              <p>+92 331 5657910</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Email Address</strong>
              <p>ahmedfaraz@gmail.com</p>
            </div>
            <div className="flex items-center justify-between w-[700px] text-custom-gray">
              <strong>Address</strong>
              <p>House 24, Street 34 Commercial Karchi, Pakistan</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-5 my-10">
              <h3 className="font-normal  text-nowrap ">Inspection Details</h3>
              <div className="h-0.5 w-full bg-[#E8E8E8]" />
            </div>
            <table className="border-collapse border border-[#E4E4E4]">
              <thead className="rounded-tl-lg rounded-tr-lg bg-white">
                <tr>
                  <th className="border border-[#E4E4E4] p-2 font-normal bg-[#F6F6F6] text-[#848282]">
                    Items
                  </th>
                  <th className="border border-[#E4E4E4] p-2 font-normal bg-[#F6F6F6] text-[#848282]">
                    Total Qty
                  </th>
                  <th className="border border-[#E4E4E4] p-2 font-normal bg-[#F6F6F6] text-[#848282]">
                    Passed Qty
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#E4E4E4] p-2 ">Bottle Caps</td>
                  <td className="border border-[#E4E4E4] p-2 ">1500</td>
                  <td className="border border-[#E4E4E4] p-2 ">1500</td>
                </tr>
              </tbody>
            </table>
            <p>
              Quality Control Report:{" "}
              <span className="text-custom-gray">No report to display</span>
            </p>
          </div>
        </div>

        <div className="mx-10 px-10 p-5 bg-white my-10 w-full">
          <h3 className="font-bold ">QR Code</h3>
          <Image
            src={"/qr-code.svg"}
            width={500}
            height={500}
            alt={"QR Code"}
          />
          <p className="text-custom-gray"><strong>Note:</strong> The QR Code is generated when the inspection of the batch is set as “Pass”</p>
        </div>
      </div>
    </>
  );
}

export default page;
