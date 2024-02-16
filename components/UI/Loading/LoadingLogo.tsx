import { appTitle } from "@/lib/const"
import Image from "next/image"

const LoadingLogo = () => {
  return (
    <div className="flex h-screen animate-bounce items-center justify-center">
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
  )
}

export default LoadingLogo
