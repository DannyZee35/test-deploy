'use client';

import TopBar from '@/components/topBar/page';
import { FaLinkedinIn, FaTwitter, FaTelegramPlane, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiShareLine } from 'react-icons/ri';
import React from 'react';

const QuoteForm = () => {
    return (
        <div className="flex flex-col items-center">

            <div className=" w-full p-8 rounded-lg">
                <div className="grid grid-cols-3 gap-8">
                    {/* Left Section */}
                    <div className="col-span-2 space-y-8">
                        <div className="p-6 rounded-lg shadow">
                            <h2 className="font-medium text-lg mb-4">Details</h2>
                            <div className="space-y-6">
                                {/* Supplier Field */}
                                <div className="flex items-center gap-12">
                                    <label className="text-xl font-medium w-36">Supplier</label>
                                    <select className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                        <option>Rahim Khan</option>
                                        <option>Rahim Khan</option>
                                        <option>Rahim Khan</option>
                                        <option>Rahim Khan</option>
                                        <option>Rahim Khan</option>
                                        {/* Add other options */}
                                    </select>
                                </div>

                                {/* Raw Materials Field */}
                                <div className="flex items-center gap-12">
                                    <label className="text-xl font-medium w-36">Raw Materials</label>
                                    <select className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                        <option>Bottle Caps</option>
                                        {/* Add other options */}
                                    </select>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="mt-8 flex justify-end">
                                <table className="w-full max-w-lg border text-sm text-left">
                                    <thead className="bg-gray-200 text-gray-600">
                                        <tr>
                                            <th className="px-4 py-2">#</th>
                                            <th className="px-4 py-2">Raw Material</th>
                                            <th className="px-4 py-2">Qty</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2">1</td>
                                            <td className="px-4 py-2">Bottle caps</td>
                                            <td className="px-4 py-2">40</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2">2</td>
                                            <td className="px-4 py-2">Pre-forms</td>
                                            <td className="px-4 py-2">120</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2">3</td>
                                            <td className="px-4 py-2">Labels</td>
                                            <td className="px-4 py-2">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>


                        <div className="grid grid-cols-2 gap-4">
                            <div className=" p-6 rounded-lg shadow">
                                <h2 className="font-medium text-lg mb-4">Bill From</h2>
                                <p className='mb-3'>Enter user information here</p>
                                <form className="space-y-4">
                                    <div>
                                        {/* <label className="block text-sm font-medium mb-2">Email</label> */}
                                        <input
                                            required
                                            placeholder='E-mail'
                                            type="email"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>
                                    <div>
                                        {/* <label className="block text-sm font-medium mb-2">Phone</label> */}
                                        <input
                                            required
                                            placeholder='Phone'
                                            type="tel"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>
                                    <div>
                                        {/* <label className="block text-sm font-medium mb-2">Address</label> */}
                                        <input
                                            required
                                            placeholder='Address'
                                            type="text"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className=" p-6 rounded-lg shadow">
                                <h2 className="font-medium text-lg mb-4">Bill To</h2>
                                <p className='mb-3'>Enter Supplier information here</p>
                                <form className="space-y-4">
                                    <div>
                                        {/* <label className="block text-sm font-medium mb-2">Email</label> */}
                                        <input
                                            required
                                            placeholder='E-mail'
                                            type="email"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>
                                    <div>
                                        {/* <label className="block text-sm font-medium mb-2">Phone</label> */}
                                        <input
                                            required
                                            placeholder='Phone'
                                            type="tel"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>
                                    <div>
                                        {/* <label className="block text-sm font-medium mb-2">Address</label> */}
                                        <input
                                            required
                                            placeholder='Address'
                                            type="text"
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>
                                </form>
                            </div>
                            <p><b>Important:</b> Supplier Details are auto-filled when selecting the supplier</p>

                        </div>
                        <div className="mt-8 flex justify-between">
                            <button className="border border-red-500 rounded-lg hover:bg-red-600 text-red-500 px-4 py-2 font-medium">
                                Cancel
                            </button>

                            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium">
                                Save
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow">
                        <h2 className="font-medium text-lg mb-4">Preview</h2>
                        <div className="bg-white rounded-lg p-6 shadow">
                            <h3 className="font-semibold text-gray-800 mb-2">Quote</h3>
                            <p className="text-xs text-gray-600">Quote ID #4527780</p>
                            <div className="flex">
                                <div className="mt-4 space-y-2">
                                    <h4 className="text-gray-800 font-bold ">User Details</h4>
                                    <p className="text-sm text-gray-600">+99 678 23456</p>
                                    <p className="text-sm text-gray-600">ahmedfaraz@gmail.com</p>
                                    <p className="text-sm text-gray-600">House 45 Street 40 Karachi, Pakistan</p>
                                </div>
                                <div className="mt-4 space-y-2">
                                    <h4 className="font-semibold text-gray-800">Additional Details</h4>
                                    <p className="text-xs text-gray-600"> <b>User Name:</b> Fayyaz Ahmed</p>
                                    <p className="text-xs text-gray-600"><b>User ID:</b> 4527780</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <table className="w-full border text-sm text-left">
                                    <thead className="bg-gray-200 text-gray-600">
                                        <tr>
                                            <th className="px-4 py-2">Items</th>
                                            <th className="px-4 py-2">Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2">Bottle caps</td>
                                            <td className="px-4 py-2">120</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Pre-forms</td>
                                            <td className="px-4 py-2">120</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Labels</td>
                                            <td className="px-4 py-2">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="flex justify-end">
                                <button className="my-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                                    Generate PDF
                                </button>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-lg font-semibold mb-4 flex items-center mt-10 space-x-2 bg-white p-6 rounded-lg shadow">
                                <span>Share Via</span>
                                <RiShareLine className="w-6 h-6 text-black" />
                            </h1>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

const CreateQuote = () => {
    return (
        <div className='px-7 py-5'>
            <TopBar title={'Create Quote'} button={'Create Quote'} />
            <QuoteForm />
        </div>
    )
}

export default CreateQuote
