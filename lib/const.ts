export const links = {
  sign_in: "/",
  home: "/home",
}

export function isBrowser(): boolean {
  return typeof window !== "undefined"
}

export const appTitle = "Track AWS r/Start Labs"
export const appDescription = "Keep Track Of AWS r/Start Labs"

export const baseLink = isBrowser() ? window.location.origin : ""
