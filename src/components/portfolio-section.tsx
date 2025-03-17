"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Code } from "lucide-react"
import { useParallax } from "./parallax-provider"
import { motion } from "framer-motion"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
  category: string // Adicionando a categoria ao tipo Project
}

const projects: Project[] = [
  {
    id: 1,
    title: "Controle de E-commerce Integrado com Mercado Livre",
    description: "Sistema de controle de e-commerce que utiliza a API do Mercado Livre para gerenciar e publicar produtos de forma automatizada.",
    image: "/ecommerce.png",
    tags: ["Python", "API", "Automação"],
    github: "https://github.com/joaocruz1/sistem_mercadolivre",
    demo: "https://github.com/joaocruz1/system_mercadolivre",
    category: "Python",
  },
  {
    id: 2,
    title: "Portfólio de João Cruz",
    description: "Meu portfólio pessoal desenvolvido para mostrar minhas habilidades, projetos e experiências como desenvolvedor fullstack.",
    image: "/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/joaocruz1/portfolio_joaocruz",
    demo: "https://github.com/joaocruz1/joaocruz1",
    category: "Next.js",
  },
  {
    id: 3,
    title: "Projeto Review Movies",
    description: "Projeto desenvolvido em 2 dias para aprimorar meu desenvolvimento em React.js, permitindo avaliações de filmes.",
    image: "/reviewmovies.png",
    tags: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/joaocruz1/project-review-movies",
    demo: "https://joaocruz1.github.io/project-review-movies/",
    category: "React.js",
  },
  {
    id: 4,
    title: "Projeto React",
    description: "Projeto desenvolvido para aprimorar habilidades em React.",
    image: "/projectreact.png",
    tags: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/joaocruz1/project-zip-code",
    demo: "https://joaocruz1.github.io/project-zip-code/",
    category: "React.js",
  },
  {
    id: 5,
    title: "ChatBot WhatsApp",
    description: "ChatBot desenvolvido para aprimorar habilidades em desenvolvimento de bots.",
    image: "/chatbot.png",
    tags: ["Python", "ChatBot", "Automação"],
    github: "https://github.com/joaocruz1/chatbot_wpp",
    demo: "https://github.com/joaocruz1/chatbot_wpp",
    category: "Python",
  },
  {
    id: 6,
    title: "Trabalho em C",
    description: "Projeto desenvolvido em linguagem C para fins acadêmicos.",
    image: "/trabalhoc.png",
    tags: ["C", "Programação", "Acadêmico"],
    github: "https://github.com/joaocruz1/velha_c",
    demo: "https://github.com/joaocruz1/velha_c",
    category: "C",
  },
]

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("Todos")
  const { scrollY } = useParallax()

  const filters = ["Todos", "React.js", "Next.js", "Python", "C"]

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeFilter)

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

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-slate-900 dark:text-white">Meu </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">Portfolio</span>
        </h2>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-md"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-500 border border-slate-200 dark:border-slate-700">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection