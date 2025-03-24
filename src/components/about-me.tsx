"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useParallax } from "./parallax-provider"

type TypeTechnologies = {
  name: string
  icon: string
  color: string
}

const technologies: TypeTechnologies[] = [
  { name: "JavaScript", icon: "js", color: "#F0DB4F" },
  { name: "React.js", icon: "react", color: "#61DBFB" },
  { name: "TypeScript", icon: "ts", color: "#007ACC" },
  { name: "Python", icon: "python", color: "#306998" },
  { name: "Node.js", icon: "node", color: "#68A063" },
  { name: "PHP", icon: "php", color: "#777BB3" },
  { name: "Git", icon: "git", color: "#F1502F" },
  { name: "GitHub", icon: "github", color: "#ffffff" },
]

const AboutMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const techItemsRef = useRef<(HTMLLIElement | null)[]>([])
  const { scrollY } = useParallax()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")
          }
        })
      },
      { threshold: 0.1 },
    )

    const currentSection = sectionRef.current
    const currentTechItems = techItemsRef.current

    if (currentSection) {
      observer.observe(currentSection)
    }

    currentTechItems.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }

      currentTechItems.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-950 relative overflow-visible mb-8">
      {/* Background Elements com Parallax */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)",
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.1) 0%, transparent 40%)",
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      />

      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out relative z-10"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          style={{
            transform: `translateY(${scrollY * 0.025}px)`,
          }}
        >
          <span className="text-slate-900 dark:text-white">Sobre </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">Mim</span>
        </h2>

        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10 xl:gap-16 text-lg">
          {/* Imagem com efeito de borda animada e parallax */}
          <div
            className="flex-shrink-0 relative group"
            style={{
              transform: `translateY(${scrollY * 0.04}px)`,
            }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-1000"></div>
            <div className="relative">
              <Image
                src="/ProfilePicture.png"
                alt="Foto João Cruz"
                width={280}
                height={280}
                className="rounded-full z-10 relative"
              />
            </div>
          </div>

          {/* Resto do conteúdo com parallax */}
          <div
            className="flex flex-col gap-6 max-w-2xl"
            style={{
              transform: `translateY(${scrollY * 0.025}px)`,
            }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Olá, sou{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
                João Cruz
              </span>
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia e inovação. Minha jornada na programação começou há 3 anos,
              e desde então tenho me dedicado a criar soluções eficientes e impactantes.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Gosto de transformar ideias em realidade através da programação, buscando sempre aprender e evoluir. Meu
              objetivo é desenvolver aplicações que não apenas funcionem bem, mas que também proporcionem uma
              experiência excepcional aos usuários.
            </p>

            <h3 className="text-2xl font-semibold mt-4 text-slate-900 dark:text-white">Tecnologias que domino:</h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8">
              {technologies.map((item, index) => (
                <li
                  key={index}
                  ref={(el) => { if (el) { techItemsRef.current[index] = el } }}
                  className="tech-item px-4 py-3 rounded-xl text-center font-medium opacity-0 translate-y-4 "
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex flex-col items-center gap-2 transform transition-transform duration-300 hover:scale-105">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <span className="text-2xl" style={{ color: item.color }}>
                        {item.icon === "js" && "⬢"}
                        {item.icon === "react" && "⚛️"}
                        {item.icon === "ts" && "TS"}
                        {item.icon === "python" && "🐍"}
                        {item.icon === "node" && "⬢"}
                        {item.icon === "php" && "PHP"}
                        {item.icon === "git" && "⎇"}
                        {item.icon === "github" && "⦿"}
                      </span>
                    </div>
                    <span className="text-slate-900 dark:text-white">{item.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe