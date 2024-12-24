import React from "react";

const OrderDetails = () => {
    return (
        <div className="p-6 ">
            {/* Header */}
            <h1 className="text-2xl font-semibold text-gray-700 mb-6">Order Details</h1>

            {/* Order Info */}
            <div className="rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-3xl font-extrabold">Order ID</p>
                        <h2 className="text-md font-medium text-green-900">#7894590</h2>
                    </div>
                    <span className="text-sm font-medium text-orange-500 bg-orange-100 px-3 py-1 rounded-lg">Pending</span>
                </div>
                <div className="flex gap-20 items-center mt-4">
                    <p className="text-sm text-gray-700">
                        Paid on: <span className=" text-orange-500 font-medium">Pending</span>
                    </p>
                    <p className="text-sm text-gray-700 ">
                        Placed on: <span className=" text-gray-400 font-medium">23 April, 2024</span>
                    </p>
                </div>
            </div>
            <div className="border-t"></div>

            {/* Details Section */}
            <div className="  grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-7">
                {/* Order Details */}
                <div className="bg-white rounded-lg border p-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Order Details</h3>
                    <ul className="text-sm text-gray-500 space-y-2">
                        <li>Customer: <span className="text-gray-700">Ahmed Khan</span></li>
                        <li>Email: <span className="text-gray-700">ahmedx@gmail.com</span></li>
                        <li>Contact: <span className="text-gray-700">+92 331 5678935</span></li>
                        <li>Composition: <span className="text-gray-700">330ml</span></li>
                        <li>Boxes: <span className="text-gray-700">72</span></li>
                        <li>Delivery by: <span className="text-gray-700">Imran Khan</span></li>
                    </ul>
                </div>

                {/* Billing Address */}
                <div className="bg-white rounded-lg border p-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Billing Address</h3>
                    <p className="text-sm text-gray-500">
                        House No 270, Street 48, Main Highway Road, Karachi, Pakistan 460400
                    </p>
                </div>

                {/* Shipping Address */}
                <div className="bg-white  rounded-lg border p-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Shipping Address</h3>
                    <p className="text-sm text-gray-500">
                        House No 270, Street 48, Main Highway Road, Karachi, Pakistan 460400
                    </p>
                </div>
            </div>

            {/* Items Table */}
            <div className="bg-white shadow-md rounded-lg mb-6 overflow-hidden">
                <table className="min-w-full text-sm text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
                        <tr>
                            <th className="px-6 py-3">Items</th>
                            <th className="px-6 py-3">Quantity</th>
                            <th className="px-6 py-3">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-6 py-4">Bottle caps</td>
                            <td className="px-6 py-4">120</td>
                            <td className="px-6 py-4">$560</td>
                        </tr>
                        <tr className="border-b bg-gray-50">
                            <td className="px-6 py-4">Pre-forms</td>
                            <td className="px-6 py-4">120</td>
                            <td className="px-6 py-4">$560</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4">Labels</td>
                            <td className="px-6 py-4">120</td>
                            <td className="px-6 py-4">$560</td>
                        </tr>
                    </tbody>
                </table>
                <div className="px-6 py-4 bg-gray-100 text-gray-600 text-right">
                    <p>Total: <span className="font-medium text-gray-700">$1050</span></p>
                    <p>GST Inclusive: <span className="font-medium text-gray-700">$1050</span></p>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">Grand Total: $1050</h3>
                </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-end">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">
                    Download Receipt
                </button>
            </div>
        </div>
    );
};

export default OrderDetails;
