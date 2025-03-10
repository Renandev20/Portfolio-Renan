"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ExternalLink, Github, Code } from "lucide-react"
import { useParallax } from "./parallax-provider"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Uma plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, notificações e colaboração em equipe.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Site de portfólio responsivo com animações suaves e design moderno.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Dashboard de previsão do tempo com visualizações de dados e alertas em tempo real.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["JavaScript", "API", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "Aplicativo de mídia social com feed personalizado, mensagens e compartilhamento de conteúdo.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Plataforma de blog com editor de texto rico, comentários e análises.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const sectionRef = useRef<HTMLDivElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  const { scrollY } = useParallax()

  const filters = ["All", "React", "Next.js", "JavaScript", "Node.js", "Firebase"]

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.tags.includes(activeFilter)))
    }
  }, [activeFilter])

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    projectRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }

      projectRefs.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  return (
    <section id="portfolio" className="py-20 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements com Parallax */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-10"
        style={{
          backgroundImage: "linear-gradient(45deg, rgba(56, 189, 248, 0.1) 0%, transparent 70%)",
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(-45deg, rgba(124, 58, 237, 0.1) 0%, transparent 70%)",
          transform: `translateY(${scrollY * -0.02}px)`,
        }}
      />

      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-slate-900 dark:text-white">Meu </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">Portfolio</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-md"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {if (el) {(projectRefs.current[index] = el)}}}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-500 opacity-0 translate-y-10 border border-slate-200 dark:border-slate-700"
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: `translateY(${scrollY * 0.02}px)`,
              }}
            >
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-end justify-center p-4 backdrop-blur-sm group-hover:backdrop-blur-md">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md flex items-center gap-1"
                    >
                      <Code size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection

