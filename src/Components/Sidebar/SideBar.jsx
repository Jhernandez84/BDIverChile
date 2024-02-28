"use client";
import Link from "next/link";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import * as HiIcons from "react-icons/hi";

import React, { useState, useEffect } from "react";

const SideBarComponent = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [sideBarWidth, setSideBarWidth] = useState("100px");

  useEffect(() => {
    setSideBarWidth(showSideBar ? "300px" : "10px");
  }, [showSideBar]);

  const toggleShowSideBar = () => {
    setShowSideBar((prevShowSideBar) => !prevShowSideBar);
    console.log(showSideBar);
  };

  const SideBarMenu = [
    { SBIcon: HiIcons.HiChartPie, SBMenu: "Dashboard", SBRout: "/dashboard" },
    { SBIcon: HiIcons.HiHome, SBMenu: "Home", SBRout: "/home" },
    { SBIcon: HiIcons.HiOutlineMail, SBMenu: "Inbox", SBRout: "/" },
    { SBIcon: HiIcons.HiUsers, SBMenu: "Personal", SBRout: "/" },
    { SBIcon: HiIcons.HiCalendar, SBMenu: "Calendar", SBRout: "/calendar" },
    { SBIcon: HiIcons.HiAdjustments, SBMenu: "Settings", SBRout: "/usersettings" },
    { SBIcon: HiIcons.HiUserGroup, SBMenu: "Usuarios/Clientes", SBRout: "/" },
    { SBIcon: HiIcons.HiLogout, SBMenu: "LogOut", SBRout: "/" },
    { SBIcon: HiIcons.HiSupport, SBMenu: "Ayuda", SBRout: "/" },
  ];

  return (
    <>
      <div
        className="block w-[70px] rounded mt-2 hover:w-56 transition-opacity duration-500 ease-in-out opacity-100 dark:text-white"
        onMouseOver={() => setShowSideBar(true)}
        onMouseLeave={() => setShowSideBar(false)}
      >
        {SideBarMenu.map((item, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 h-[95%] hover:bg-gray-400 dark:bg-gray-800 flex items-center p-3 transition-opacity duration-500 ease-in-out 
            dark:text-white dark:hover:opacity-100 dark:hover:text-gray-100 dark:hover:bg-gray-500 dark:hover:rounded-lg"
          >
            <Link
              href={item.SBRout}
              className="flex items-center p-3 cursor-pointer"
            >
              <item.SBIcon className="w-6 h-6 mr-2 black" />
              {showSideBar ? item.SBMenu : []}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBarComponent;