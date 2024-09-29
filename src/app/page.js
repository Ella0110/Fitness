"use client";

import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col full-screen bg-white justify-between dark:bg-black">
        <Header>
          <h1 className="text-3xl font-extrabold">Fitness</h1>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="/wiki" className="text-sm font-semibold text-white-900">
              Wiki
            </a>
            <a href="/home" className="text-sm font-semibold text-white-900">
              home
            </a>
            <a href="#" className="text-sm font-semibold text-white-900">
              Company
            </a>
            <a href="#" className="text-sm font-semibold text-white-900">
              Features
            </a>
          </div>
        </Header>
        {/* <div className="relative flex flex-auto mx-auto w-full h-full max-w-container px-4 pt-8 sm:px-6 sm:pt-12  lg:justify-between lg:px-8 lg:pt-16"> */}
        {/* <Sidebar /> */}
        {/* <Content /> */}
        {/* </div> */}
        <div className="min-h-screen"></div>
        <Footer />
      </div>
    </>
  );
}
