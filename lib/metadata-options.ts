import { appDescription, appTitle } from "@/lib/const"
import type { Metadata } from "next"

export const metaDataOptions: Metadata = {
  metadataBase: new URL("https://aws-rstart-labs.vercel.app"),
  openGraph: {
    title: appTitle,
    description: appDescription,
    url: "/",
    siteName: appTitle,
    images: [
      {
        url: "/aws-restart-logo.png",
        width: 800,
        height: 600,
      },
      {
        url: "/aws-restart-logo.png",
        width: 1800,
        height: 1600,
        alt: appTitle,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  title: appTitle,
  description: appDescription,
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION_ID!,
  },
  twitter: {
    card: "summary_large_image",
    title: appTitle,
    description: appDescription,
    images: {
      url: "/aws-restart-logo.png",
      alt: appTitle,
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
