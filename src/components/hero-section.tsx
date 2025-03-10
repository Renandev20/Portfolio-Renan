"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { useParallax } from "./parallax-provider"

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const { scrollY } = useParallax()

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let interval: NodeJS.Timeout | null = null

    const startAnimation = () => {
      let iteration = 0
      const originalText = "DESENVOLVEDOR FULLSTACK"

      clearInterval(interval as NodeJS.Timeout)

      interval = setInterval(() => {
        if (titleRef.current) {
          titleRef.current.innerText = originalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index]
              }

              if (letter === " ") return " "
              return letters[Math.floor(Math.random() * 26)]
            })
            .join("")

          if (iteration >= originalText.length) {
            clearInterval(interval as NodeJS.Timeout)
          }

          iteration += 1 / 3
        }
      }, 30)
    }

    startAnimation()

    const timer = setInterval(() => {
      startAnimation()
    }, 5000)

    return () => {
      clearInterval(interval as NodeJS.Timeout)
      clearInterval(timer)
    }
  }, [])

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background com Parallax */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-950"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      />

      {/* Grid Pattern com Parallax */}
      <div
        className="fixed inset-0 bg-grid-pattern opacity-10 dark:opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Blobs com Parallax */}
      <div
        className="fixed -top-40 -right-40 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full filter blur-3xl opacity-20 animate-blob"
        style={{
          transform: `translate(${scrollY * 0.15}px, ${scrollY * -0.1}px)`,
        }}
      />
      <div
        className="fixed -bottom-40 -left-40 w-96 h-96 bg-teal-300 dark:bg-teal-900 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        style={{
          transform: `translate(${scrollY * -0.15}px, ${scrollY * 0.1}px)`,
        }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-500/20 dark:bg-teal-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * (Math.random() * 0.25)}px)`,
              transition: "transform 0.1s linear",
            }}
          />
        ))}
      </div>

      {/* Conteúdo Principal com Parallax */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        >
          Olá, sou{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 relative inline-block">
            João Cruz
            <div
              className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-600/20 blur-xl -z-10"
              style={{
                transform: `translateY(${scrollY * 0.05}px) scale(1.2)`,
              }}
            />
          </span>
        </h1>

        <h2
          ref={titleRef}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-purple-600 dark:text-purple-400"
          style={{
            transform: `translateY(${scrollY * -0.075}px)`,
          }}
        >
          DESENVOLVEDOR FULLSTACK
        </h2>

        <p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-slate-700 dark:text-slate-300"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        >
          Transformando ideias em experiências digitais incríveis com código limpo e design intuitivo.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          style={{
            transform: `translateY(${scrollY * -0.025}px)`,
          }}
        >
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector("#portfolio")
              if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
                window.scrollTo({
                  top: offsetTop - 80,
                  behavior: "smooth",
                })
              }
            }}
            className="group relative px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 text-white rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">Ver Projetos</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector("#contact")
              if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
                window.scrollTo({
                  top: offsetTop - 80,
                  behavior: "smooth",
                })
              }
            }}
            className="group relative px-8 py-3 border-2 border-teal-500 dark:border-teal-400 text-teal-500 dark:text-teal-400 rounded-full font-bold hover:bg-teal-500/10 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">Contato</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        <div
          className="flex justify-center gap-6 mb-16"
          style={{
            transform: `translateY(${scrollY * -0.01}px)`,
          }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{
            transform: `translate(-50%, ${scrollY * 0.05}px)`,
          }}
        >
          <ArrowDown className="text-teal-500 dark:text-teal-400" size={32} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

