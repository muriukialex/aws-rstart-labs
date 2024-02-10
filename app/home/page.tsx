"use client"

import { signOut } from "next-auth/react"
import { Lab, Divider } from "@/components"
import { weekOne, weekTwo } from "@/lib/labs"
import { useState } from "react"
import { ButtonStatusType } from "@/types/Common"

const HomePage = () => {
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
      console.error(error)
      setButtonStatus({
        status: "idle",
      })
    }
  }

  return (
    <div className="sm:w-[500px] m-auto mt-8 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1>AWS r/Start Labs</h1>
        </div>
        <div>
          <button
            className="p-1 px-4 rounded hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
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

      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 1</h2>
        {weekOne.map((lab) => (
          <Lab key={lab.labId} lab={lab} />
        ))}
      </div>

      <Divider />
      <div className="mt-4 mb-4">
        <h2>Week 2</h2>
        {weekTwo.map((lab) => (
          <Lab key={lab.labId} lab={lab} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
