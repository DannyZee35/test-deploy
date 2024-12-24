'use client'
import TopBar from '@/components/topBar/page'
import { React, useState, useEffect } from 'react'
import { HiDotsVertical } from 'react-icons/hi';

const Table = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const [isClient, setIsClient] = useState(false); // Track client-side rendering

    // Ensure the dropdown logic runs only after hydration
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Pagination logic
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
                            Batch ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Composition
                        </th>
                        <th scope="col" className="px-6 py-3">
                            No of boxes
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Completion Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
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
                            className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                }`}
                        >
                            <td className="px-6 py-4">{client.id}</td>
                            <td className="px-6 py-4">{client.composition}</td>
                            <td className="px-6 py-4">{client.boxes}</td>
                            <td className="px-6 py-4">{client.date}</td>
                            <td className="px-6 py-4">
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium 
                                            ${client.status === 'Accepted'
                                            ? 'text-green-600 bg-green-100'
                                            : client.status === 'Pending'
                                                ? 'text-orange-600 bg-orange-100'
                                                : 'text-red-600 bg-red-100'
                                        }`}
                                >
                                    {client.status}
                                </span>
                            </td>
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
                                            suppressHydrationWarning
                                            className={`absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10 ${openDropdownIndex === index
                                                ? 'block'
                                                : 'hidden'
                                                }`}
                                        >
                                            <button
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            >
                                                View Details
                                            </button>
                                            <button
                                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                                            >
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
                        className={`px-3 py-1 text-sm border rounded ${currentPage === 1
                            ? 'text-gray-400 bg-gray-200'
                            : 'text-gray-600 bg-white hover:bg-gray-100'
                            }`}
                    >
                        ◄
                    </button>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 text-sm border rounded ${currentPage === totalPages
                            ? 'text-gray-400 bg-gray-200'
                            : 'text-gray-600 bg-white hover:bg-gray-100'
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
    composition: '330ml',
    boxes: '76',
    date: '24-Dec-2024',
    status: i % 3 === 0 ? 'Accepted' : i % 3 === 1 ? 'Pending' : 'Rejected',
}));

const Products = () => {
    return (
        <div className="px-7 py-5">
            <TopBar title={'All Product'} button={'Product'} />
            <Table data={clientData} />
        </div>
    )
}

export default Products
