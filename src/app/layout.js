import "./globals.css"
import Navbar from "@/components/Navbar"
import { Cinzel, DM_Sans } from "next/font/google"

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })

export const metadata = {
  title: "Albinaa Festival 2027",
  description: "Alfest 2027", 
}

export default function RootLayout({ children }) {
  return (
    /* Adding "dark" right here inside the className string establishes your dark theme 
      as the native default across all components, preventing any light flash on load.
    */
    <html lang="en" className={`dark ${cinzel.variable} ${dmSans.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body className="font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  )
}