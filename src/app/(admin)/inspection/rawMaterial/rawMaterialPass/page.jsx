import TopBar from "@/components/topBar/page";
import React from "react";
import QRCode from "./QR code.png"
import Image from "next/image";
const Details = () => {
    return (
        <div className="flex justify-center py-10 gap-10">
            <div className="w-full bg-white rounded-lg shadow-md p-8">
                <div className="mb-6">
                    <div className="">
                        <div>
                            <h1 className="text-2xl font-bold">Batch ID</h1>
                            <p className="text-green-800 font-medium">#7894590</p>
                        </div>
                        <div className="mt-5 flex gap-32">
                            <p className="font-medium">
                                <b>Status: </b><span className="text-green-500">Pass</span>
                            </p>
                            {/* <p className="text-sm text-gray-600"><b>Inspected on:</b> 23 April, 2024</p> */}
                        </div>
                    </div>
                </div>
                <div className="border-t py-6  border-gray-300">
                    <h3 className="text-md font-semibold mb-4">General Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="flex mb-5 items-center gap-20">
                                <p className="text-sm font-medium">Batch ID</p>
                                <p className="text-gray-700">#3456778911</p>
                            </div>
                            <div className="flex mb-5 items-center gap-20">
                                <p className="text-sm font-medium">Inspected on</p>
                                <p className="text-gray-700">23-Dec-2024</p>
                            </div>
                            <div className="flex mb-5 items-center gap-16">
                                <p className="text-sm font-medium">Inspected by</p>
                                <p className="text-gray-700">Ahmed Faraz</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t py-6  border-gray-300">
                    <h3 className="text-md font-semibold mb-4">Supplier Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="flex mb-5 items-center gap-20">
                                <p className="text-sm font-medium">Supplier ID</p>
                                <p className="text-gray-700">#3456778911</p>
                            </div>
                            <div className="flex mb-5 items-center gap-20">
                                <p className="text-sm font-medium">CR Number</p>
                                <p className="text-gray-700">5610093799</p>
                            </div>
                            <div className="flex mb-5 items-center gap-16">
                                <p className="text-sm font-medium">Supplier Name</p>
                                <p className="text-gray-700">Ahmed Faraz</p>
                            </div>
                            <div className="flex mb-5 items-center gap-32">
                                <p className="text-sm font-medium">Phone</p>
                                <p className="text-gray-700">+92 331 5657910</p>
                            </div>
                            <div className="flex  mb-5 items-center gap-20">
                                <p className="text-sm font-medium">Email Address</p>
                                <p className=" text-gray-700">ahmedfaraz@gmail.com</p>
                            </div>
                            <div className="flex mb-5 items-center gap-28">
                                <p className="text-sm font-medium">Address</p>
                                <p className="text-gray-700">House 24, Street 34 Commercial Karachi, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t py-6  border-gray-300">
                    <h3 className="text-md font-semibold mb-4">Requested by</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="flex mb-5 items-center gap-20">
                                <p className="text-sm font-medium">User ID</p>
                                <p className="text-gray-700">#3456778911</p>
                            </div>
                            <div className="flex mb-5 items-center gap-20">
                                <p className="text-sm font-medium">Quote ID</p>
                                <p className="text-gray-700">#3456778911</p>
                            </div>
                            <div className="flex mb-5 items-center gap-16">
                                <p className="text-sm font-medium">User Name</p>
                                <p className="text-gray-700">Ahmed Faraz</p>
                            </div>
                            <div className="flex mb-5 items-center gap-20">
                                <p className="text-sm font-medium">Role</p>
                                <p className="text-gray-700">Sales Manager</p>
                            </div>
                            <div className="flex mb-5 items-center gap-32">
                                <p className="text-sm font-medium">Phone</p>
                                <p className="text-gray-700">+92 331 5657910</p>
                            </div>
                            <div className="flex  mb-5 items-center gap-20">
                                <p className="text-sm font-medium">Email Address</p>
                                <p className=" text-gray-700">ahmedfaraz@gmail.com</p>
                            </div>
                            <div className="flex mb-5 items-center gap-28">
                                <p className="text-sm font-medium">Address</p>
                                <p className="text-gray-700">House 24, Street 34 Commercial Karachi, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t py-6">
                    <h3 className="text-md font-semibold mb-4">Inspection Details</h3>
                    <div className="">
                        <table className="border rounded-lg w-1/2 text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 text-sm font-medium text-gray-600">Items</th>
                                    <th className="px-4 py-2 text-sm font-medium text-gray-600">Total Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="px-4 py-2 text-gray-700">Bottle caps</td>
                                    <td className="px-4 py-2 text-gray-700">1500</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2 text-gray-700">Labels</td>
                                    <td className="px-4 py-2 text-gray-700">1500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p><b>Quanilty Control Report:</b> No report to show </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-medium py-5">QR Code</h1>
                <Image
                    src={QRCode}
                    alt='QR Code'
                    width={100}
                />

                <p className="text-gray-500 w-56 py-5">Note: The QR Code is generated when the inspection of the batch is set as “Pass”</p>
            </div>
        </div>
    );
};

const RawMaterialPass = () => {
    return (
        <div className="px-5 py-7">
            <TopBar title={'Quote Details'} button={'Create Quote'} />
            <Details />
        </div>
    )
}
export default RawMaterialPass;
//  