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
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Controle de E-commerce Integrado com Mercado Livre",
    description: "Sistema de controle de e-commerce que utiliza a API do Mercado Livre para gerenciar e publicar produtos.",
    image: "/ecommerce.png",
    tags: ["Python", "API", "Automação"],
    github: "https://github.com/Renandev20/Ecomerce",
    demo: "https://github.com/Renandev20/Ecomerce",
    category: "Web",
  },
  {
    id: 2,
    title: "ATENA CALC",
    description: "Site educacional Atena Calc, projeto final da disciplina de Programação Web.",
    image: "/Captura de tela 2025-05-07 174458.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Renandev20/Atena2",
    demo: "https://renandev20.github.io/Atena2/",
    category: "Web",
  },
  {
    id: 3,
    title: "Movies View",
    description: "Aplicação React para avaliação de filmes, desenvolvida em 2 dias.",
    image: "/reviewmovies.png",
    tags: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/joaocruz1/project-review-movies",
    demo: "https://joaocruz1.github.io/project-review-movies/",
    category: "Web",
  },
  {
    id: 4,
    title: "Projeto DT Cash (Financeiro)",
    description: "Sistema de controle financeiro pessoal.",
    image: "/Captura de tela 2025-05-07 174724.png",
    tags: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/Renandev20/DT-CASH",
    demo: "https://github.com/Renandev20/DT-CASH",
    category: "Web",
  },
  {
    id: 5,
    title: "SISU",
    description: "Simulador de SISU com IA.",
    image: "/Captura de tela 2025-05-07 183538.png",
    tags: ["Python", "IA", "HTML/CSS/JS"],
    github: "https://github.com/Renandev20/Simulador-SISU?tab=readme-ov-file",
    demo: "https://github.com/Renandev20/Simulador-SISU?tab=readme-ov-file",
    category: "Web",
  },
  {
    id: 6,
    title: "Corinthians",
    description: "Site temático do Corinthians.",
    image: "/Captura de tela 2025-05-07 175404.png",
    tags: ["Mysql", "HTML", "CSS"],
    github: "https://github.com/Renandev20/Corinthians",
    demo: "https://github.com/Renandev20/Corinthians",
    category: "Web",
  },
  {
    id: 7,
    title: "Aplicativo contatos  em Flutter",
    description: "Aplicativo de contatos  desenvolvido com Flutter.",
    image: "/Captura de tela 2025-05-07 182954.png",
    tags: ["Flutter", "Dart", "API"],
    github: "https://github.com/Renandev20/APP-Contato",
    demo: "https://github.com/Renandev20/APP-Contato",
    category: "Mobile",
  },
  {
    id: 8,
    title: "Gestão de Times",
    description: "Aplicativo para gestão de equipes.",
    image: "/Captura de tela 2025-05-07 180059.png",
    tags: ["Banco de Dados", "Java"],
    github: "https://github.com/Renandev20/ProjetofinalBD-SistemadeEsporte",
    demo: "https://github.com/Renandev20/ProjetofinalBD-SistemadeEsporte",
    category: "Desktop",
  },
  {
    id: 9,
    title: "Aplicativo de Votação",
    description: "Sistema de votação em tempo real.",
    image: "/Captura de tela 2025-05-07 180543.png",
    tags: ["Java", "Docker", "MongoDB"],
    github: "https://github.com/Renandev20/-Sistema-para-Eleicao-Usando-Quarkus-Framework",
    demo: "https://github.com/Renandev20/-Sistema-para-Eleicao-Usando-Quarkus-Framework",
    category: "Web",
  },
  {
    id: 10,
    title: "Atena Vest",
    description: "Aplicativo de estudos.",
    image: "/Imagem do WhatsApp de 2024-12-02 à(s) 10.49.31_dae8e44a.jpg",
    tags: ["Flutter", "Dart"],
    github: "",
    demo: "",
    category: "Mobile",
  },
  {
    id: 11,
    title: "R.E.S.P",
    description: "Sistema automatizado apresentado em feira científica.",
    image: "/Captura de tela 2025-05-07 181125.png",
    tags: ["Arduino", "Python", "IA"],
    github: "https://github.com/Renandev20/R.E.S.P",
    demo: "https://github.com/Renandev20/R.E.S.P",
    category: "Automação",
  },
  {
    id: 12,
    title: "Spotify Clone",
    description: "Projeto final de HTML e CSS recriando o visual do Spotify.",
    image: "/Captura de tela 2025-05-07 181816.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/seuusuario/bot-mensagens",
    demo: "https://github.com/seuusuario/bot-mensagens",
    category: "Web",
  },
  {
    id: 13,
    title: "Jogo Detona Ralph",
    description: "Jogo inspirado no filme Detona Ralph.",
    image: "/Captura de tela 2025-05-07 181539.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Renandev20/DIO-GAME",
    demo: "https://renandev20.github.io/DIO-GAME/",
    category: "Web",
  },
]

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("Todos")
  const { scrollY } = useParallax()

  const filters = ["Todos", "Web", "Backend", "Automação", "Desktop", "Mobile", "C"]

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
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
