import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Sidebar from "../components/sidebar/Sidebar"
import Content from "../components/content/documentation/Content"
import React from "react"

export default function Wiki() {
  return (
    <>
      <div className="flex flex-col bg-white justify-between dark:bg-black">
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
        <div className="relative flex flex-auto mx-auto w-full h-full max-w-container px-4 pt-8 sm:px-6 sm:pt-12  lg:justify-between lg:px-8 lg:pt-16">
          <Sidebar>
          <div className="sticky top-0 -ml-0.5 pointer-events-none">
          <div className="h-5 bg-white dark:bg-black"></div>
          <div className="bg-white dark:bg-black relative pointer-events-auto">
            <button
              type="button"
              className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-700 rounded-md ring-1 ring-slate-400 shadow-sm py-1.5 pl-2 pr-3 hover: dark:bg-slate-800 dark:text-slate-500 dark:bg-black dark:hover:bg-slate-700"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className="mr-3 flex-none"
              >
                <path
                  d="m19 19-3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></circle>
              </svg>
              Quick search...
              <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                ⌘K
              </span>
            </button>
          </div>
          <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
        </div>
          </Sidebar>
          <Content />
        </div>
      </div>
      <Footer />
    </>
  )
}
