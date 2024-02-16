"use client"

import { UserLabs } from "@/components"
import { useUserLabsData } from "@/hooks"
import { ButtonStatusType } from "@/types/Common"
import { signOut, useSession } from "next-auth/react"
import { useState } from "react"

const HomePage = () => {
  const { data: userData } = useSession()
  const { isLoading, data, error, mutate } = useUserLabsData({
    email: userData?.user?.email,
  })

  const [buttonStatus, setButtonStatus] = useState<ButtonStatusType>({
    status: "idle",
  })

  const handleSignOut = async () => {
    setButtonStatus({
      status: "submitting",
    })

    try {
      signOut()
    } catch (error) {
      alert("An error occurred Signing Out. Please try again later")
      setButtonStatus({
        status: "idle",
      })
    }
  }

  return (
    <div className="m-auto mt-8 p-4 sm:w-[500px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 data-test="aws-rstart-title">AWS r/Start Labs</h1>
        </div>
        <div>
          <button
            data-test="sign-out"
            className="rounded p-1 px-4 hover:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-gray-700"
            disabled={buttonStatus.status === "submitting"}
            onClick={() => handleSignOut()}
          >
            {buttonStatus.status === "idle" ? (
              <div>Log out {"->"}</div>
            ) : (
              <div>Please wait...</div>
            )}{" "}
          </button>
        </div>
      </div>

      <UserLabs
        isLoading={isLoading}
        error={error}
        data={data}
        mutate={mutate}
        userData={userData}
      />
    </div>
  )
}

export default HomePage
