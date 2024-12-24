'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { searchBarIcon } from '../header/header-icon';
import { order } from '@/app/(admin)/dashboard/dashboard-icons';

const Sidebar = () => {
    const pathname = usePathname();
    const [isInventoryOpen, setIsInventoryOpen] = useState(false);
    const [isInspectionOpen, setIsInspectionOpen] = useState(false);

    const links = [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/', label: 'Clients' },
        { href: '/suppliers', label: 'Suppliers' },
        { href: '/users', label: 'Users' },
        { href: '/quotes', label: 'Quotes' },
        { href: '/orders', label: 'Orders' },
    ];

    const inventorySubLinks = [
        { href: '/admin/inventory/items', label: 'Items' },
        { href: '/admin/inventory/categories', label: 'Categories' },
    ];

    const inspectionSubLinks = [
        { href: '/inspection/reports', label: 'Reports' },
        { href: '/inspection/schedules', label: 'Schedules' },
    ];

    return (
        <div className="fixed md:flex h-screen w-[300px] max-w-[339px] flex-col gap-10 rounded-r-[20px] border-r-2 border-black/20 text-white bg-custom-leafGreen px-3 py-6 hidden ">
            <Image
                src="/logo.svg"
                alt="Logo Image here..."
                width={180}
                height={90}
                className="mx-7 my-2"
            />
            <div className="px-4 xl:hidden">
                <div className="flex w-60 h-12 items-center border rounded-2xl">
                    <span className="p-3">{searchBarIcon}</span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-3 border-none outline-none bg-transparent text-gray-600"
                    />
                </div>
            </div>
            <div className="lg:pt-2 ">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`relative left-4 flex h-[50px] w-[250px] items-center p-4 gap-4 rounded-lg ${
                            pathname === link.href
                                ? 'bg-[rgba(255,255,255,0.1)] text-gray-300'
                                : ''
                        }`}
                    >
                        <span>{order}</span>
                        <span>{link.label}</span>
                    </Link>
                ))}

                {/* Inventory Section */}
                <div className="relative left-4">
                    <div
                        onClick={() => setIsInventoryOpen((prev) => !prev)}
                        className={`flex h-[50px] w-[250px] items-center p-4 gap-4 rounded-lg cursor-pointer ${
                            pathname.includes('/admin/inventory')
                                ? 'bg-[rgba(255,255,255,0.1)] text-gray-300'
                                : ''
                        }`}
                    >
                        <span>{order}</span>
                        <span>Inventory</span>
                    </div>
                    {isInventoryOpen && (
                        <div className="ml-8">
                            {inventorySubLinks.map((sublink) => (
                                <Link
                                    key={sublink.href}
                                    href={sublink.href}
                                    className={`block h-[40px] w-[230px] p-2 rounded-lg ${
                                        pathname === sublink.href
                                            ? 'bg-[rgba(255,255,255,0.1)] text-gray-300'
                                            : ''
                                    }`}
                                >
                                    {sublink.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Inspection Section */}
                <div className="relative left-4">
                    <div
                        onClick={() => setIsInspectionOpen((prev) => !prev)}
                        className={`flex h-[50px] w-[250px] items-center p-4 gap-4 rounded-lg cursor-pointer ${
                            pathname.includes('/inspection')
                                ? 'bg-[rgba(255,255,255,0.1)] text-gray-300'
                                : ''
                        }`}
                    >
                        <span>{order}</span>
                        <span>Inspection</span>
                    </div>
                    {isInspectionOpen && (
                        <div className="ml-8">
                            {inspectionSubLinks.map((sublink) => (
                                <Link
                                    key={sublink.href}
                                    href={sublink.href}
                                    className={`block h-[40px] w-[230px] p-2 rounded-lg ${
                                        pathname === sublink.href
                                            ? 'bg-[rgba(255,255,255,0.1)] text-gray-300'
                                            : ''
                                    }`}
                                >
                                    {sublink.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <button className="fixed bottom-5 md:bottom-10 mx-3 flex h-[25px] w-[250px] items-center md:p-4 gap-4 rounded-lg hover:text-custom-lightBrown">
                {order}
                <span>Sign out</span>
            </button>
        </div>
    );
};
export default Sidebar;
