"use client"

import { useRef, useEffect } from "react"
import { useParallax } from "./parallax-provider"
import { Database, Code2, Brain, Server, Coffee } from "lucide-react"
import type { JSX } from "react/jsx-runtime"

type LearningTech = {
  name: string
  icon: JSX.Element
  progress: number
  description: string
  color: string
}

const learningTechs: LearningTech[] = [
  {
    name: "Java",
    icon: <Coffee className="w-8 h-8" />,
    progress: 45,
    description: "Aprendendo Java para desenvolvimento backend e aplicações enterprise.",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Modelagem de Banco de Dados",
    icon: <Database className="w-8 h-8" />,
    progress: 60,
    description: "Estudando design e modelagem de bancos de dados relacionais e NoSQL.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Node.js",
    icon: <Server className="w-8 h-8" />,
    progress: 70,
    description: "Aprofundando conhecimentos em Node.js e sua arquitetura event-driven.",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Design Patterns",
    icon: <Brain className="w-8 h-8" />,
    progress: 40,
    description: "Estudando padrões de projeto e boas práticas de arquitetura.",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "API REST",
    icon: <Code2 className="w-8 h-8" />,
    progress: 65,
    description: "Desenvolvendo APIs RESTful com boas práticas e documentação.",
    color: "from-teal-500 to-cyan-600",
  },
]

const LearningSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const techRefs = useRef<(HTMLDivElement | null)[]>([])
  const { scrollY } = useParallax()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")

            const progressBar = entry.target.querySelector(".progress-bar") as HTMLElement
            if (progressBar) {
              const progress = progressBar.dataset.progress
              setTimeout(() => {
                progressBar.style.width = `${progress}%`
              }, 300)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    techRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }

      techRefs.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background Elements com Parallax */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)",
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)",
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      />

      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-slate-900 dark:text-white">Tecnologias em </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
              Desenvolvimento
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Sempre em busca de novos conhecimentos e aprimoramento contínuo. Estas são algumas das tecnologias que estou
            atualmente estudando e desenvolvendo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningTechs.map((tech, index) => (
            <div
              key={tech.name}
              ref={(el) => {if (el){(techRefs.current[index] = el)}}}
              className="relative bg-white dark:bg-slate-800 rounded-xl p-6 opacity-0 translate-y-10 transition-all duration-500 hover:shadow-xl border border-slate-200 dark:border-slate-700 group"
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: `translateY(${scrollY * 0.015}px)`,
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10 ${tech.color}" />

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${tech.color} text-white`}>{tech.icon}</div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{tech.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{tech.description}</p>

                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-semibold inline-block text-teal-600 dark:text-teal-400">
                        Progresso
                      </div>
                      <div className="text-xs font-semibold inline-block text-teal-600 dark:text-teal-400">
                        {tech.progress}%
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-200 dark:bg-slate-700">
                      <div
                        className={`progress-bar shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                        style={{ width: "0%" }}
                        data-progress={tech.progress}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-r from-teal-500/20 to-purple-600/20 rounded-full filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-teal-500/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      </div>
    </section>
  )
}

export default LearningSection

