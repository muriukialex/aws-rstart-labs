import type { Metadata } from "next"
import { appDescription, appTitle, baseLink } from "@/lib/const"

export const metaDataOptions: Metadata = {
  openGraph: {
    title: appTitle,
    description: appDescription,
    url: baseLink,
    siteName: appTitle,
    images: [
      {
        url: baseLink + "/aws-restart-logo.png",
        width: 800,
        height: 600,
      },
      {
        url: baseLink + "/aws-restart-logo.png",
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
      url: baseLink + "/aws-restart-logo.png",
      alt: appTitle + " Logo",
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
