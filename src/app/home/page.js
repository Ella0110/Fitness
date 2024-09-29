import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import React from "react"
import Footer from "../components/footer/Footer"

export default function Home() {
  return (
    <>
      <div className="flex flex-col full-screen bg-white justify-between dark:bg-black">
        <Header>
          <h1 className="text-3xl flex flex-1 justify-center font-extrabold">Fitness</h1>
        </Header>
        {/* <div className="relative flex flex-auto mx-auto w-full h-full max-w-container px-4 pt-8 sm:px-6 sm:pt-12  lg:justify-between lg:px-8 lg:pt-16"> */}
        <Sidebar />
        {/* <Content /> */}
        {/* </div> */}
        <div className="min-h-screen"></div>
        <Footer />
      </div>
    </>
  )
}
