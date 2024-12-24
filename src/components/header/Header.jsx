'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { headerData } from './data';
import profileImage from "./profile.png";
import { searchBarIcon, settingsIcon, notificationIcon } from './header-icon';
import MobileSidebar from '../sidebar/MobileSidebar';

const Header = () => {

    const pathname = usePathname();
    const [currentPage, setCurrentPage] = useState(null);

    useEffect(() => {
        console.log("Current Pathname:", pathname);
        const matchedPage = headerData.find((item) => pathname===item.href);

        console.log(matchedPage)
        if (matchedPage) {
            setCurrentPage(matchedPage);
        } else {
            setCurrentPage(null);
        }
    }, [pathname]);

    return (
        <div className="flex items-center justify-between w-full px-7 bg-white">
            <div className="mt-4 md:mt-2 flex items-start md:gap-1 gap-2">
                {/* <MobileSidebar /> */}
                {currentPage ? (
                    <div>
                        <h1 className="lg:text-[28px] text-[18px]">{currentPage.title}</h1>
                        <p className="text-gray-500 text-[12px] w-28 md:w-full">{currentPage.desc}</p>
                    </div>
                ) : (
                    <div>
                        <p className="text-red-500">Page Not Found</p>
                    </div>
                )}
            </div>


            <div className='flex mt-2 gap-5'>
                <div className="flex items-center justify-center gap-1 md:gap-2">
                    <button className="">{settingsIcon}</button>
                    <button className="">{notificationIcon}</button>
                    <Image
                        className="w-12 h-12"
                        src={profileImage}
                        alt="Profile Image"
                        width={50}
                        height={20}

                    />
                </div>
            </div>

        </div>
    );
};

export default Header;
