import { appTitle } from "@/lib/const"
import Image from "next/image"

const LoadingLogo = () =>{
    return (
        <div className="h-screen flex items-center justify-center animate-bounce">
            <Image alt={appTitle} src="/aws-restart-logo.png" width={120} height={50} />
        </div>
    )
}

export default LoadingLogo