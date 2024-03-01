"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar/NavBar";
import { ThemeModeScript } from "flowbite-react";
import FooterPage from "@/Components/Footer/Footer";
import SideBarComponent from "@/Components/Sidebar/SideBar";
import '../Components/Sidebar/styles.css'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const handleTabClick = (index) => {
    const updatedNavigation = navigation.map((item, i) => ({
      ...item,
      current: i === index,
    }));
    setNavigation(updatedNavigation);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const User = { userName: "Jonathan", userProfile: "Admin" };
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <html>
      <body>
        <header>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css"
            rel="stylesheet"
          />
          <ThemeModeScript />
        </header>
        {User.userProfile == "Admin" ? (
          <main className="bg-white text-gray-700 dark:bg-gray-700">
            <div>
              <NavBar />
            </div>
            <div>
              <div className="h-[full]">
                  <SideBarComponent children={children}/>
              </div>
            </div>
          </main>
        ) : (
          <>
            <main className="h-screen bg-white text-gray-700 dark:bg-gray-700">
              <div>
                <NavBar />
              </div>
            </main>
          </>
        )}
      </body>
    </html>
  );
}
