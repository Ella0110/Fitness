import React from "react"

export default function Sidebar({children}) {
  return (
    <>
      <nav className="mx-auto block max-w-[20rem] lg:mx-0 lg:max-w-none overflow-y-auto lg:flex-none lg:block fixed inset-0 top-[6.8125rem] left-[max(0px,calc(50%-45rem))] bottom-[5.5rem] right-auto w-[19rem] pt-0 pl-8 pr-6">
        {children}
        <ul
          role="list"
          className="flex-1 ml-0.5 border-l  border-slate-100 mr-2 space-y-4"
        >
          <a
            href="../../wiki"
            className="flex border-l pl-4 border-transparent hover:border-slate-400 shrink-0 sapce-x-8 text-sm/8 font-semibold text-slate-700 dark:text-white"
          >
            Documentation
          </a>
          <a
            href="#"
            className="flex border-l pl-4 border-transparent hover:border-slate-400 shrink-0 text-sm/8 font-semibold text-slate-700 dark:text-white"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="flex border-l pl-4 border-transparent hover:border-slate-400 shrink-0 text-sm/8 font-semibold text-slate-700 dark:text-white"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="flex border-l pl-4 border-transparent hover:border-slate-400 shrink-0 text-sm/8 font-semibold text-slate-700 dark:text-white"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="flex border-l pl-4 border-transparent hover:border-slate-400 shrink-0 text-sm/8 font-semibold text-slate-700 dark:text-white"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="flex border-l pl-4 border-transparent hover:border-slate-400 shrink-0 text-sm/8 font-semibold text-slate-700 dark:text-white"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="flex border-l pl-4 border-transparent hover:border-slate-400 shrink-0 text-sm/8 font-semibold text-slate-700 dark:text-white"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="flex border-l pl-4 border-transparent hover:border-slate-400 shrink-0 text-sm/8 font-semibold text-slate-700 dark:text-white"
          >
            Dashboard
          </a>
        </ul>
      </nav>
    </>
  )
}
