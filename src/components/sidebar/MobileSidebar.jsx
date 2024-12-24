// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import {
//     customerIcon,
//     dashboardIcon,
//     emplyeeIcon,
//     locationIcon,
//     menuIcon,
//     modiferIcon,
//     orderIcon,
//     plusIcon,
//     signoutBtnIcon,
// } from './sidebar-icons';
// import { order, product } from '@/app/(admin)/dashboard/dashboard-icons';
// import { subModifier } from '@/app/(admin)/menu/menu-icons';
// import { searchBarIcon } from '../header/header-icon';

// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet"
// import { Menu } from 'lucide-react'

// const MobileSidebar = () => {
//     const pathname = usePathname();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isModifierOpen, setIsModifierOpen] = useState(false);

//     // Toggle function for the dropdown menu
//     const toggleMenuDropdown = () => {
//         setIsMenuOpen((prev) => !prev);
//     };

//     const toggleModifierDropDown = () => {
//         setIsModifierOpen((prev) => !prev);
//     }
//     return (
//         <div className="md:hidden">
//             <Sheet>
//                 <SheetTrigger className="pt-1 ">
//                     <Menu className="w-5 h-5" />
//                 </SheetTrigger>
//                 <SheetContent side="left" className="border-r-2 border-black/20 bg-custom-skin w-[350px]">
//                     <SheetHeader>
//                         <SheetTitle>
//                             <Image src="/logo.svg" alt="Logo Image here..." width={180} height={90} />
//                         </SheetTitle>
//                     </SheetHeader>
//                     <div className="fixed flex flex-col gap-10 rounded-r-[20px]  px-3 py-6 ">
//                         <div className="px-4 xl:hidden">
//                             <div className="flex w-60 h-12 items-center border rounded-2xl">
//                                 <span className="p-3">{searchBarIcon}</span>
//                                 <input
//                                     type="text"
//                                     placeholder="Search"
//                                     className="p-3 border-none outline-none bg-transparent text-gray-600"
//                                 />
//                             </div>
//                         </div>
//                         <div className="lg:pt-2 ">
//                             <Link
//                                 className={`relative left-4 flex h-[50px] w-[250px] items-center p-4 pt-1 gap-4 rounded-lg
//                                     ${pathname === '/' ? 'bg-white border-custom-brown' : 'border-transparent bg-transparent'} 
//                                     border-r-4 transition-all duration-300 hover:text-custom-lightBrown
//                                     ${pathname === '/' ? '' : 'active:rounded-r-lg active:border-custom-brown active:bg-white'}`}
//                                 href="/"
//                             >
//                                 <span className={`${pathname === '/' ? 'text-custom-lightBrown' : ''}`}>{dashboardIcon}</span>
//                                 <span className={`${pathname === '/' ? 'text-custom-lightBrown' : ''}`}>Dashboard</span>
//                             </Link>

//                             <Link
//                                 className={`relative left-4 flex h-[50px] w-[250px] items-center p-4 pt-1 gap-4 rounded-lg
//                                     ${pathname === '/employee' ? 'bg-white border-custom-brown' : 'border-transparent bg-transparent'} 
//                                     border-r-4 transition-all duration-300 hover:text-custom-lightBrown
//                                     ${pathname === '/employee' ? '' : 'active:rounded-r-lg active:border-custom-brown active:bg-white'}`}
//                                 href="/employee"
//                             >
//                                 <span className={`${pathname === '/employee' ? 'text-custom-lightBrown' : ''}`}>{emplyeeIcon}</span>
//                                 <span className={`${pathname === '/employee' ? 'text-custom-lightBrown' : ''}`}>Employee</span>
//                             </Link>

//                             <Link
//                                 className={`relative left-4 flex h-[50px] w-[250px] items-center p-4 pt-1 gap-4 rounded-lg
//                                     ${pathname === '/customers' ? 'bg-white border-custom-brown' : 'border-transparent bg-transparent'} 
//                                     border-r-4 transition-all duration-300 hover:text-custom-lightBrown
//                                     ${pathname === '/customers' ? '' : 'active:rounded-r-lg active:border-custom-brown active:bg-white'}`}
//                                 href="/customers"
//                             >
//                                 <span className={`${pathname === '/customers' ? 'text-custom-lightBrown' : ''}`}>{customerIcon}</span>
//                                 <span className={`${pathname === '/customers' ? 'text-custom-lightBrown' : ''}`}>Customers</span>
//                             </Link>

//                             <Link
//                                 className={`relative left-3 flex h-[50px] w-[250px] items-center p-4 pt-1 gap-4 rounded-lg
//                                     ${pathname === '/locations' ? 'bg-white border-custom-brown' : 'border-transparent bg-transparent'} 
//                                     border-r-4 transition-all duration-300 hover:text-custom-lightBrown
//                                     ${pathname === '/locations' ? '' : 'active:rounded-r-lg active:border-custom-brown active:bg-white'}`}
//                                 href="/locations"
//                             >
//                                 <span className={`${pathname === '/locations' ? 'text-custom-lightBrown' : ''}`}>{locationIcon}</span>
//                                 <span className={`${pathname === '/locations' ? 'text-custom-lightBrown' : ''}`}>Location</span>
//                             </Link>
//                             <div className="relative">
//                                 <button
//                                     onClick={toggleMenuDropdown}
//                                     className={`relative left-4 flex h-[50px] w-[250px] items-center p-4 pt-1 gap-4 rounded-lg`}
//                                 >
//                                     <span>{menuIcon}</span>
//                                     <span>Menu</span>
//                                     <span className="pl-20">{plusIcon}</span>
//                                 </button>
//                                 {isMenuOpen && (
//                                     <div className="ml-8 mt-2 flex flex-col gap-2">
//                                         <Link
//                                             className={`relative flex h-[50px] w-[230px] items-center p-4 pt-0 gap-4 rounded-lg
//                                                 ${pathname === '/menu/itemsList' ? 'bg-white border-custom-brown' : 'border-transparent bg-transparent'} 
//                                                 border-r-4 transition-all duration-300 hover:text-custom-lightBrown
//                                                 ${pathname === '/menu/itemsList' ? '' : 'active:rounded-r-lg active:border-custom-brown active:bg-white'}`}
//                                             href="/menu/itemsList"
//                                         >
//                                             <span>{order}</span>
//                                             <span className={`${pathname === '/menu/itemList' ? 'text-custom-lightBrown' : ''}`}>Items List</span>
//                                         </Link>
//                                         <Link
//                                             className={`relative flex h-[50px] w-[230px] items-center p-4 pt-0 gap-4 rounded-lg
//                                                 ${pathname === '/menu/category' ? 'bg-white border-custom-brown' : 'border-transparent bg-transparent'} 
//                                                 border-r-4 transition-all duration-300 hover:text-custom-lightBrown
//                                                 ${pathname === '/menu/category' ? '' : 'active:rounded-r-lg active:border-custom-brown active:bg-white'}`}
//                                             href="/menu/category"
//                                         >
//                                             <span>{product}</span>
//                                             <span className={`${pathname === '/menu/category' ? 'text-custom-lightBrown' : ''}`}>Categories</span>
//                                         </Link>
//                                         <Link
//                                             onClick={(e) => {
//                                                 toggleModifierDropDown();
//                                             }}
//                                             className={`relative flex h-[50px] w-[230px] items-center p-4 pt-0 gap-4 rounded-lg
//                                                 ${pathname === '/menu/modifiergroup' ? 'bg-white border-custom-brown' : 'border-transparent bg-transparent'} 
//                                                 border-r-4 transition-all duration-300 hover:text-custom-lightBrown cursor-pointer`}
//                                             href="/menu/modifiergroup"
//                                         >
//                                             <span>{modiferIcon}</span>
//                                             <span className={`${pathname === '/menu/modifiergroup' ? 'text-custom-lightBrown' : ''}`}>Modifier Group</span>
//                                             <span className="ml-auto">{plusIcon}</span>
//                                         </Link>
//                                         {isModifierOpen && (
//                                             <Link
//                                                 className={`relative ml-8 flex h-[50px] w-[210px] items-center p-4 pt-0 gap-4 rounded-lg
//                                                     ${pathname === '/menu/modifiergroup/modifier' ? 'bg-white border-custom-brown' : 'border-transparent bg-transparent'} 
//                                                     border-r-4 transition-all duration-300 hover:text-custom-lightBrown`}
//                                                 href="/menu/modifiergroup/modifier"
//                                             >
//                                                 <span>{subModifier}</span>
//                                                 <span className={`${pathname === '/menu/modifiergroup/modifier' ? 'text-custom-lightBrown' : ''}`}>Modifier</span>
//                                             </Link>
//                                         )}
//                                     </div>
//                                 )}
//                             </div>
//                             <Link
//                                 className={`relative left-4 flex h-[50px] w-[250px] items-center p-4 pt-0 gap-4 rounded-lg
//                                     ${pathname === '/orders' ? 'pt-0 bg-white border-custom-brown' : 'border-transparent bg-transparent'} 
//                                     border-r-4 transition-all duration-300 hover:text-custom-lightBrown
//                                     ${pathname === '/orders' ? '' : 'active:rounded-r-lg active:border-custom-brown active:bg-white'}`}
//                                 href="/orders"
//                             >
//                                 <span className={`${pathname === '/orders' ? 'text-custom-lightBrown' : ''}`} >{orderIcon}</span>
//                                 <span className={`${pathname === '/orders' ? 'text-custom-lightBrown' : ''}`} >Order</span>
//                             </Link>
//                         </div>
//                         <button className="fixed left-10 bottom-2 mx-5 flex h-[25px] w-[250px] items-center p-2 gap-4 rounded-lg hover:text-custom-lightBrown">
//                             {signoutBtnIcon}
//                             <span>Sign out</span>
//                         </button>
//                     </div>
//                 </SheetContent>
//             </Sheet>
//         </div>
//     )
// }

// export default MobileSidebar