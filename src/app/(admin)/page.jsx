'use client';

import { useState, useEffect } from 'react';
import { searchBarIcon } from '@/components/header/header-icon';
import { HiDotsVertical } from 'react-icons/hi';
import dynamic from 'next/dynamic';

const TopBar = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-7">
                <div>
                    <h1 className="font-medium text-3xl pt-2">All Clients</h1>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="hidden xl:flex w-96 h-12 items-center border rounded-xl mt-2 px-3 py-2 bg-slate-50">
                        <span>{searchBarIcon}</span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="ml-2 border-none outline-none bg-transparent text-gray-500"
                        />
                    </div>
                    <div>
                        <button className="p-2 w-20 h-12 mt-2 rounded-xl border bg-slate-50 text-gray-500">
                            Order
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <button className="p-2 w-40 h-12 rounded-xl border bg-custom-yellow text-white font-medium text-xl">
                    Add Client
                </button>
            </div>
        </div>
    );
};

const Table = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentEntries = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / 10);

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const toggleDropdown = (index) => {
        setOpenDropdownIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="overflow-auto rounded-lg shadow-md bg-white w-full mt-10">
            <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Client ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Client Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contact
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentEntries.map((client, index) => (
                        <tr
                            key={index}
                            className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                        >
                            <td className="px-6 py-4">{client.id}</td>
                            <td className="px-6 py-4">{client.name}</td>
                            <td className="px-6 py-4">{client.contact}</td>
                            <td className="px-6 py-4">{client.email}</td>
                            <td className="px-6 py-4">{client.address}</td>
                            <td className="relative px-6 py-4">
                                <div className="relative">
                                    <button
                                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        <HiDotsVertical size={20} />
                                    </button>
                                    {isClient && (
                                        <div
                                            
                                            className={`absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10 ${
                                                openDropdownIndex === index ? 'block' : 'hidden'
                                            }`}
                                        >
                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                                View Details
                                            </button>
                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                                Edit
                                            </button>
                                            <button className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
                <p className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 text-sm border rounded ${
                            currentPage === 1 ? 'text-gray-400 bg-gray-200' : 'text-gray-600 bg-white hover:bg-gray-100'
                        }`}
                    >
                        ◄
                    </button>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 text-sm border rounded ${
                            currentPage === totalPages ? 'text-gray-400 bg-gray-200' : 'text-gray-600 bg-white hover:bg-gray-100'
                        }`}
                    >
                        ►
                    </button>
                </div>
            </div>
        </div>
    );
};

const clientData = Array.from({ length: 100 }, (_, i) => ({
    id: `3479${i + 1}`,
    name: i % 2 === 0 ? 'Ammar Hussain' : 'John Doe',
    contact: `+92 3${Math.floor(Math.random() * 90) + 10} ${Math.floor(1000000 + Math.random() * 9000000)}`,
    email: i % 2 === 0 ? 'ammar@gmail.com' : 'johndoe@gmail.com',
    address: i % 2 === 0
        ? 'House 45 street 40 Karachi, Pakistan'
        : '123 Main Street, Lahore, Pakistan',
}));

const ClientPage = () => {
    const DynamicTable = dynamic(() => Promise.resolve(Table), { ssr: false });

    return (
        <div className="px-7 py-5">
            <TopBar />
            <DynamicTable data={clientData} />
        </div>
    );
};

export default ClientPage;
