"use client"

import { links } from "@/lib/const"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const AuthGuardProvider = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      push(links.sign_in)
    },
  })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}

export default AuthGuardProvider
