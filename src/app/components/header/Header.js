'use client'

import React from "react";
import AuthModel from "../authmodel/AuthModel";
import { useState } from 'react';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [authStates, setAuthStates] = useState('false');
  // const [isConfirmSignUp, setisConfirmSignUp] = useState(false);

  
  return (
    <>
      <header className="sticky inset-x-0 bg-white supports-backdrop-blur:bg-white/95 backdrop-blur transition-colors z-20 top-0 dark:bg-black">
        <nav className="flex items-center justify-between border-b border-slate-900/15 border-gray-400 lg:gap-x-12 p-6 lg:px-8" aria-label="Global">
            <h1 className="text-3xl font-extrabold">2333</h1>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="/wiki" className="text-sm font-semibold text-white-900">Wiki</a>
              <a href="#" className="text-sm font-semibold text-white-900">Marketplace</a>
              <a href="#" className="text-sm font-semibold text-white-900">Company</a>
              <a href="#" className="text-sm font-semibold text-white-900">Features</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button className="text-sm font-semibold  bg-gray-800 rounded-full py-2 px-4 text-white hover:bg-black"
              onClick={() => {setShowModal(true);setAuthStates('login')}}>Log in </button>
              <button className="text-sm pl-2 font-semibold rounded-full py-2 px-4 text-white-900"
              onClick={() => {setShowModal(true);setAuthStates('signup')}}>Sign Up </button>

              <AuthModel
                showModal={showModal}
                setShowModal={setShowModal}
                authStates={authStates}
                setAuthStates={setAuthStates}
               />
            </div>
        </nav>
      </header>
    </>
  );
}
