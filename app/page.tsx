"use client"

import { GoogleIcon } from "@/components"
import { appTitle } from "@/lib/const"
import { ButtonStatusType } from "@/types/Common"
import { signIn } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"

const LoginPage = () => {
  const [buttonStatus, setButtonStatus] = useState<ButtonStatusType>({
    status: "idle",
  })
  const handleSignIn = async () => {
    setButtonStatus({
      status: "submitting",
    })

    try {
      signIn("google")
    } catch (error) {
      alert("An error occurred Signing In. Please try again later")
      setButtonStatus({
        status: "idle",
      })
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <div className="mb-10 flex items-center justify-center">
          <Image
            className="dark:hidden" // shown in light theme
            alt={appTitle}
            src="/aws-restart-logo-light.png"
            width={128}
            height={75}
          />
          <Image
            className="hidden dark:block" // shown in dark theme
            alt={appTitle}
            src="/aws-restart-logo.png"
            width={128}
            height={75}
          />
        </div>
        <div className="mb-4">
          <h2>Track AWS r/Start Labs 👍🏽</h2>
        </div>
        <div>
          <button
            data-test="sign-in-with-google"
            onClick={() => handleSignIn()}
            disabled={buttonStatus.status === "submitting"}
            className="w-full rounded-md border bg-white p-4 text-center text-sm text-gray-500 hover:bg-gray-100 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-black dark:text-white dark:hover:bg-gray-900"
          >
            <GoogleIcon className="mr-2 inline size-5" />
            {buttonStatus.status === "submitting"
              ? "Signing in..."
              : "Sign in with Google"}
          </button>
        </div>
      </div>
    </main>
  )
}

export default LoginPage
