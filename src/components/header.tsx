"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, Code } from "lucide-react"


type TypeItemsHeader = {
  name: string
  href: string
}

const ItemsHeader: TypeItemsHeader[] = [
  { name: "Sobre Mim", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Habilidades", href: "#skills" },
  { name: "Contato", href: "#contact" },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)

    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80, 
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-900 dark:text-white ${scrolled ? "shadow-lg" : "shadow-none"} flex py-4 px-6 justify-between items-center sticky top-0 z-20 transition-all duration-300`}
    >
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-purple-600 rounded-lg overflow-hidden">
          <Code className="text-white" size={20} />
        </div>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 font-bold text-xl hidden sm:block">
          João Cruz
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {ItemsHeader.map((item, index) => (
          <a
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="relative px-2 py-1 flex items-center justify-center text-center hover:text-teal-500 dark:hover:text-teal-400 transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-teal-500 after:to-purple-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            key={index}
          >
            {item.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="text-slate-700 dark:text-white" />
          ) : (
            <Menu className="text-slate-700 dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg md:hidden">
          <nav className="flex flex-col p-4">
            {ItemsHeader.map((item, index) => (
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-teal-500 dark:hover:text-teal-400 rounded-md transition-colors duration-300"
                key={index}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

