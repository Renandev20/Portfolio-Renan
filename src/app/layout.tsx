import type React from "react"
import { Roboto_Slab } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-geist-robotoSlab",
})

export const metadata: Metadata = {
  title: "João Cruz | Desenvolvedor Fullstack",
  description: "Portfolio de João Cruz, desenvolvedor fullstack especializado em React, Next.js e Node.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={robotoSlab.variable} suppressHydrationWarning>
      <body>
          <ParallaxProvider>{children}</ParallaxProvider>
      </body>
    </html>
  )
}

