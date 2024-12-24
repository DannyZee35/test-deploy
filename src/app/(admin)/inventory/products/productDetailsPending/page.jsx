import React from 'react'

const Details = () => {
    return (
        <div className="flex justify-center py-10">
            <div className="w-full bg-white rounded-lg shadow-md p-8">
                <div className="mb-6">
                    <div>
                        <h3 className="text-md font-semibold mb-4">General Details</h3>
                        <div className="flex mb-5 items-center gap-20">
                            <p className="text-sm font-medium">Batch ID</p>
                            <p className="text-gray-700 text-sm ">#3456778911</p>
                        </div>
                        <div className="flex mb-5 items-center gap-20">
                            <p className="text-sm font-medium">Composition</p>
                            <p className="text-gray-700 text-sm ">330ml</p>
                        </div>
                        <div className="flex mb-5 items-center gap-20">
                            <p className="text-sm font-medium">No of Boxes</p>
                            <p className="text-gray-700 text-sm ">71</p>
                        </div>
                        <div className="flex mb-5 items-center gap-16">
                            <p className="text-sm font-medium">Requested On</p>
                            <p className="text-gray-700 text-sm ">12-Dec-2025</p>
                        </div>
                    </div>
                </div>
                <div className="border-t py-6  border-gray-300">

                    <h3 className="text-md font-semibold mb-4">User Details</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="flex mb-5 items-center gap-20">
                                <p className="text-sm font-medium">User ID</p>
                                <p className=" text-sm text-gray-700">#3456778911</p>
                            </div>
                            <div className="flex mb-5 items-center gap-16">
                                <p className="text-sm font-medium">User Name</p>
                                <p className="text-gray-700 text-sm ">Farhan Aziz</p>
                            </div>
                            <div className="flex mb-5 items-center gap-24">
                                <p className="text-sm font-medium">Role</p>
                                <p className="text-gray-700 text-sm ">Sales Manager</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex mb-5 items-center gap-32">
                                <p className="text-sm font-medium">Phone</p>
                                <p className="text-gray-700 text-sm ">+92 331 5657910</p>
                            </div>
                            <div className="flex  mb-5 items-center gap-20">
                                <p className="text-sm font-medium">Email Address</p>
                                <p className=" text-gray-700 text-sm ">ahmedfaraz@gmail.com</p>
                            </div>
                            <div className="flex mb-5 items-center gap-28">
                                <p className="text-sm font-medium">Address</p>
                                <p className="text-gray-700 text-sm ">House 24, Street 34 Commercial Karachi, Pakistan</p>
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
                                <p className="text-gray-700 text-sm ">#3456778911</p>
                            </div>
                            <div className="flex mb-5 items-center gap-20">
                                <p className="text-sm font-medium">CR Number</p>
                                <p className="text-gray-700 text-sm ">5610093799</p>
                            </div>
                            <div className="flex mb-5 items-center gap-16">
                                <p className="text-sm font-medium">Supplier Name</p>
                                <p className="text-gray-700 text-sm ">Ahmed Faraz</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex mb-5 items-center gap-32">
                                <p className="text-sm font-medium">Phone</p>
                                <p className="text-gray-700 text-sm ">+92 331 5657910</p>
                            </div>

                            <div className="flex  mb-5 items-center gap-20">
                                <p className="text-sm font-medium">Email Address</p>
                                <p className=" text-gray-700 text-sm ">ahmedfaraz@gmail.com</p>
                            </div>

                            <div className="flex mb-5 items-center gap-28">
                                <p className="text-sm font-medium">Address</p>
                                <p className="text-gray-700 text-sm ">House 24, Street 34 Commercial Karachi, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t py-6">
                    <h3 className="text-md font-semibold mb-4">Inspector Details</h3>
                    <div className=" text-sm grid grid-cols-2 gap-4">
                        <p>No details to show</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductDetailInspected = () => {
    return (
        <div className="px-7 py-5">
            <h1 className="text-xl font-medium">
                Product Details
                <Details />
            </h1>
        </div>
    )
}

export default ProductDetailInspected
