"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type ParallaxContextType = {
  scrollY: number
}

const ParallaxContext = createContext<ParallaxContextType>({ scrollY: 0 })

export function ParallaxProvider({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <ParallaxContext.Provider value={{ scrollY }}>{children}</ParallaxContext.Provider>
}

export const useParallax = () => useContext(ParallaxContext)

