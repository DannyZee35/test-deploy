"use client";

import React,{useState} from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlignJustify,X } from "lucide-react";
import { MobileMenu } from "../mobile-menu/MobileMenu";
export const Header = () => {
  const [isOpen, setIsOpen] =  useState(false);
  const PageTitle = () => {
    const pathname = usePathname();
    console.log("pathname ", pathname);

    switch (pathname) {
      case "/qa/dashboard":
        return <h1 className="font-normal">Dashboard</h1>;
      case "/inbox":
        return <h1>Inbox</h1>;
      case "/production":
        return <h1>Production</h1>;
    
      default:
        return <h1>Welcome</h1>;
    }
  };
  return (
    <>
      <div className="bg-white p-8 text-pageTitle flex h-full items-center justify-between relative ">
        <PageTitle />
        <div className="size-10 border border-custom-darkGray rounded-lg flex items-center justify-center  md:hidden">
        <AlignJustify  color="#848282" onClick={(prev) => setIsOpen(!isOpen)}/>
      
      
        </div>
      
      

        <div className="flex items-center gap-5">
          <button className="border p-2 border-custom-lightGray rounded-lg ">
            <Image
              src={"/settings.svg"}
              height={24}
              width={24}
              alt="settings"
            />
          </button>
          <Avatar>
            <AvatarImage src="/profile.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {
          isOpen && (
            <div className="bg-red-500  h-screen fixed w-full z-40 inset-0 ">
              <div className="absolute top-5 right-5">
              <X size={30} color="#fff" onClick={(prev) => setIsOpen(!isOpen)}/>
              </div>
         
            <MobileMenu/>
          </div>
          )
        }
    </>
  );
};
