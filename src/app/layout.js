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
    <html lang="en" className={`${cinzel.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  )
}