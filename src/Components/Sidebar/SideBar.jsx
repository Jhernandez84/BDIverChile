"use client";
import Link from "next/link";
import * as HiIcons from "react-icons/hi";
import {
  HiChartPie,
  HiHome,
  HiUserGroup,
  HiTicket,
  HiCalendar,
  HiAdjustments,
  HiUser,
  HiUsers,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

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

  const iconSize = "30px";

  const SideBarMenu = [
    {
      SBIcon: <HiChartPie style={{ fontSize: iconSize }} />,
      SBMenu: "Dashboard",
      SBRout: "/dashboard",
    },
    {
      SBIcon: <HiHome style={{ fontSize: iconSize }} />,
      SBMenu: "Home",
      SBRout: "/home",
    },
    {
      SBIcon: <HiUserGroup style={{ fontSize: iconSize }} />,
      SBMenu: "Redes",
      SBRout: "/redes",
    },
    {
      SBIcon: <HiUserGroup style={{ fontSize: iconSize }} />,
      SBMenu: "Grupos",
      SBRout: "/teamgroups",
    },
    {
      SBIcon: <HiTicket style={{ fontSize: iconSize }} />,
      SBMenu: "Eventos",
      SBRout: "/events",
    },
    {
      SBIcon: <HiCalendar style={{ fontSize: iconSize }} />,
      SBMenu: "Calendario",
      SBRout: "/calendar",
    },
    {
      SBIcon: <HiAdjustments style={{ fontSize: iconSize }} />,
      SBMenu: "Ajustes",
      SBRout: "/usersettings",
    },
    {
      SBIcon: <HiUser style={{ fontSize: iconSize }} />,
      SBMenu: "Cuenta",
      SBRout: "/account",
    },
    {
      SBIcon: <HiUsers style={{ fontSize: iconSize }} />,
      SBMenu: "Usuarios",
      SBRout: "/",
    },
    {
      SBIcon: <HiQuestionMarkCircle style={{ fontSize: iconSize }} />,
      SBMenu: "Ayuda",
      SBRout: "/",
    },
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
          onMouseLeave={() => (
            setShowSideBar(false), setSidebarCollapsed(true)
          )}
        >
          <h1>Menú</h1>
          {SideBarMenu.map((item, index) => (
            <>
              <div key={index} className="sidebar-content-container">
                <Link href={item.SBRout} className="sidebar-link-content">
                  <div className="sidebar-content-icon"> {item.SBIcon}</div>
                  <div className="sidebar-content-text">{item.SBMenu}</div>
                </Link>
              </div>
            </>
          ))}
        </div>
        <div className="content-container">{children}</div>
      </div>
    </>
  );
};

export default SideBarComponent;
