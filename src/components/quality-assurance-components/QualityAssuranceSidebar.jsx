'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { searchBarIcon } from '../header/header-icon';
import { order } from '@/app/(admin)/dashboard/dashboard-icons';

const QualityAssuranceSidebar = () => {
    const pathname = usePathname();
    const [isInventoryOpen, setIsInventoryOpen] = useState(false);
    const [isInspectionOpen, setIsInspectionOpen] = useState(false);

    const links = [
        { href: '/quality-assurance-dashboard', label: 'Dashboard' },
        { href: '/', label: 'Material Inspection' },
        { href: '/suppliers', label: 'Production' },
        
    ];

    
 

    return (
        <div className="fixed md:flex h-screen w-[300px] max-w-[339px] flex-col gap-10 rounded-r-[20px] border-r-2 border-black/20 text-white bg-custom-leafGreen px-3 py-6 hidden ">
            <Image
                src="/qa-logo.svg"
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

           

            
            </div>

            <button className="fixed bottom-5 md:bottom-10 mx-3 flex h-[25px] w-[250px] items-center md:p-4 gap-4 rounded-lg hover:text-custom-lightBrown">
                {order}
                <span>Sign out</span>
            </button>
        </div>
    );
};
export default QualityAssuranceSidebar;
