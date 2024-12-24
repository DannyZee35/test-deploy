'use client'
import TopBar from "@/components/topBar/page";
import { React, useState, useEffect } from "react";
import { HiDotsVertical } from 'react-icons/hi';
const Cards = () => {
    const cards = [
        { icon: "\u{1F4E6}", title: "Total Raw Materials", value: "31,6709" },
        { icon: "\u{2191}", title: "Bottles", value: "23,900" },
        { icon: "\u{2191}", title: "Pre-Froms", value: "55,900" },
        { icon: "\u{2191}", title: "Caps", value: "23,900" },
        { icon: "\u{2191}", title: "Labels", value: "23,900" },
    ];

    return (
        <div className="mt-10 mb-28 ">
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-[90%]">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start justify-between border border-gray-200"
                    >
                        <div className="items-center mb-4">
                            <span className="text-yellow-500 text-xl mr-2">{card.icon}</span>
                            <p className="text-3xl font-bold text-green-900">{card.value}</p>
                        </div>
                        <p className="text-gray-600 font-medium text-xl">{card.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Table = ({ data }) => {
    const [activeTab, setActiveTab] = useState("Return");
    const tabs = ["Inventory", "Return"];
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
        <div>
            <div className="flex items-center space-x-6 text-sm border-b pb-2">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`relative px-4 py-2 font-medium text-lg hover:text-custom-leafGreen ${activeTab === tab ? "text-custom-leafGreen" : ""
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                        {activeTab === tab && (
                            <div className="absolute left-0 top-full h-1 w-full bg-custom-leafGreen"></div>
                        )}
                    </button>
                ))}
            </div>
            <div className="overflow-auto rounded-lg shadow-md bg-white w-full mt-10">
                <table className="min-w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Batch ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Inspected By
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Returns
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
                                <td className="px-6 py-4">{client.name}</td>
                                <td className="px-6 py-4">{client.inspected}</td>
                                <td className="px-6 py-4">{client.qty}</td>
                                <td className="px-6 py-4">{client.type}</td>
                                <td className="px-6 py-4">{client.return}</td>
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
        </div>

    );
};

const clientData = Array.from({ length: 100 }, (_, i) => ({
    id: `3479${i + 1}`,
    qty: `150${i + 1}`,
    return: `100${i + 1}`,
    name: i % 2 === 0 ? 'Ammar Hussain' : 'John Doe',
    inspected: i % 2 === 0 ? 'Ammar Hussain' : 'John Doe',
    type: i % 2 === 0 ? 'Cabel' : 'Pre-Forms',
}));

const RawMaterial = () => {
    return (
        <div className="px-7 py-5">
            <Cards />
            <TopBar title={'All Raw Material'} button={"Raw Material"} />
            <Table data={clientData} />
        </div>
    )
}
export default RawMaterial;
