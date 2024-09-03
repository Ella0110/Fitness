"use client"

import React, { useEffect } from "react"
import AuthModel from "../authmodel/AuthModel"
import { useState } from "react"
import { signOut, getCurrentUser } from "aws-amplify/auth"
import { useRouter } from 'next/navigation'

export default function Header({children}) {
  const [showModal, setShowModal] = useState(false)
  const [authStates, setAuthStates] = useState("")
  const [isSignin, setIsSignin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    async function getUserState(){
    try{
      // const start = Date.now()
      const { signInDetails, username, userId } = await getCurrentUser()
      // console.log(Date.now() - start)
      console.log(signInDetails, username, userId )

      setIsSignin(!!userId)
    }  catch (error) {
      
      console.log("error signing out: ", error)
    }}
    getUserState()
  }, [])

  async function handleSignOut() {
    try {
      setAuthStates('')
      await signOut({ global: true })
      console.log("退出登录")
      setIsSignin(false)
      router.push('/')
    } catch (error) {
      console.log("error signing out: ", error)
    }
  }

  return (
    <>
      <header className="sticky inset-x-0 bg-white supports-backdrop-blur:bg-white/95 backdrop-blur transition-colors z-20 top-0 dark:bg-black">
        <nav
          className="flex static items-center border-b border-slate-900/15 border-gray-400 lg:gap-x-12 p-6 lg:px-8"
          aria-label="Global"
        >
          
          {children}
          {!isSignin ? (
            <div className="lg:flex absolute right-0  p-4 lg:justify-end">
              <button
                className="text-sm font-semibold  bg-gray-800 rounded-full py-2 px-4 text-white hover:bg-black"
                onClick={() => {
                  setShowModal(true)
                  setAuthStates("login")
                }}
              >
                Log in{" "}
              </button>
              <button
                className="text-sm pl-2 font-semibold rounded-full py-2 px-4 text-white-900"
                onClick={() => {
                  setShowModal(true)
                  setAuthStates("signup")
                }}
              >
                Sign Up{" "}
              </button>

              <AuthModel
                showModal={showModal}
                setShowModal={setShowModal}
                authStates={authStates}
                setAuthStates={setAuthStates}
                setIsSignin={setIsSignin}
              />
            </div>
          ) : (
            <div className="lg:flex absolute right-0 p-4 lg:justify-end">
            <button
              className="text-sm lg:justify-end font-semibold  bg-gray-800 rounded-full py-2 px-4 text-white hover:bg-black"
              onClick={() => {
                handleSignOut()
              }}
            >
              Sign out{" "}
            </button>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
