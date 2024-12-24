"use client";
import { Calendar, Home, Inbox, LogOut, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const items = [
  {
    title: "Home",
    url: "/quality-assurance-dashboard",
    icon: <Home size={20}/>,
  },
  {
    title: "Material Inspection",
    url: "/material-inspection",
    icon: <Inbox size={20}/>,
  },
  {
    title: "Production",
    url: "/production",
    icon: <Calendar size={20}/>,
  },
];

export const SidebarComponent = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.pathname);

  useEffect(() => {
    setActiveTab(router.pathname);
  }, [router.pathname]);

  return (
    <SidebarProvider>
      <Sidebar className="bg-custom-leafGreen">
        <SidebarHeader className="py-10">
          <div>
            <Image
              alt="Quality Assurance User Logo"
              src={"/qa-dome-logo.svg"}
              width={200}
              height={200}
              className="p-[5px_20px]"
            />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="text-white ">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="p-5">
                      <a
                        href={item.url}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(item.url);
                          router.push(item.url); // Navigate to the selected tab
                        }}
                        className={`hover:bg-custom-navHover  ${
                          activeTab === item.url ? "bg-custom-navHover" : ""
                        }`}
                      >
                        <span>{item.icon}</span>
                        <span className=" text-md">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="text-white ">
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="p-5">
                    <a
                      href={"/logout"}
                      className={`hover:bg-custom-navHover `}
                    >
                     <span> <LogOut size={20}/></span>
                      <span className=" text-md">Logout</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
