"use client";
import Link from "next/link";
import * as HiIcons from "react-icons/hi";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import "../Sidebar/styles.css";

import React, { useState, useEffect } from "react";

const SideBarComponent = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  // const [sideBarWidth, setSideBarWidth] = useState("100px");

  useEffect(() => {
    setSidebarCollapsed(true);
  }, []);

  const toggleShowSideBar = () => {
    setShowSideBar((prevShowSideBar) => !prevShowSideBar);
    setSidebarCollapsed((previsSidebarCollapsed) => !previsSidebarCollapsed);
    console.log(showSideBar);
  };

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const SideBarMenu = [
    { SBIcon: HiIcons.HiChartPie, SBMenu: "Dashboard", SBRout: "/dashboard" },
    { SBIcon: AccessAlarmIcon, SBMenu: "Dashboard", SBRout: "/dashboard" },
    { SBIcon: HiIcons.HiHome, SBMenu: "Home", SBRout: "/home" },
    { SBIcon: HiIcons.HiUserGroup, SBMenu: "Redes", SBRout: "/redes" },
    { SBIcon: HiIcons.HiUserGroup, SBMenu: "Grupos", SBRout: "/" },
    { SBIcon: HiIcons.HiTicket, SBMenu: "Eventos", SBRout: "/" },
    { SBIcon: HiIcons.HiCalendar, SBMenu: "Calendario", SBRout: "/calendar" },
    {
      SBIcon: HiIcons.HiAdjustments,
      SBMenu: "Ajustes",
      SBRout: "/usersettings",
    },
    { SBIcon: HiIcons.HiUser, SBMenu: "Cuenta", SBRout: "/" },
    { SBIcon: HiIcons.HiUsers, SBMenu: "Usuarios", SBRout: "/" },
    { SBIcon: HiIcons.HiLogout, SBMenu: "LogOut", SBRout: "/" },
    { SBIcon: HiIcons.HiSupport, SBMenu: "Ayuda", SBRout: "/" },
  ];

  return (
    <>
      <div className="main-container">
        <div
          className={
            isSidebarCollapsed
              ? "collapsed-sidebar side-bar"
              : "expanded-sidebar side-bar"
          }
          onMouseOver={() => (setShowSideBar(true), setSidebarCollapsed(false))}
          onMouseLeave={() => (setShowSideBar(false), setSidebarCollapsed(true))}
        >
          {SideBarMenu.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 hover:bg-gray-400 dark:bg-gray-800 flex items-center p-3 transition-opacity duration-500 ease-in-out  
            dark:text-white"
              >
              <Link
                href={item.SBRout}
                className="flex items-center p-3 cursor-pointer hover-underline-animation"
              >
                <item.SBIcon className="w-6 h-6 mr-2 black hover-underline-animation" />
                {showSideBar ? item.SBMenu : []}
              </Link>
            </div>
          ))}
        </div>
        <div className="content-container">{children}</div>
      </div>
    </>
  );
};

export default SideBarComponent;
