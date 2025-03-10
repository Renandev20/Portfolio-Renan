"use client"

import { useEffect, useRef } from "react"
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"
import { JSX } from "react"

type Skill = {
  name: string
  level: number
  category: string
  icon: JSX.Element
}

const skills: Skill[] = [
  {
    name: "HTML/CSS",
    level: 95,
    category: "Frontend",
    icon: <Layout className="text-teal-500" size={24} />,
  },
  {
    name: "JavaScript",
    level: 90,
    category: "Frontend",
    icon: <Code className="text-teal-500" size={24} />,
  },
  {
    name: "React",
    level: 85,
    category: "Frontend",
    icon: <Globe className="text-teal-500" size={24} />,
  },
  {
    name: "TypeScript",
    level: 80,
    category: "Frontend",
    icon: <Code className="text-teal-500" size={24} />,
  },
  {
    name: "Node.js",
    level: 75,
    category: "Backend",
    icon: <Server className="text-teal-500" size={24} />,
  },
  {
    name: "Python",
    level: 70,
    category: "Backend",
    icon: <Code className="text-teal-500" size={24} />,
  },
  {
    name: "SQL",
    level: 85,
    category: "Backend",
    icon: <Database className="text-teal-500" size={24} />,
  },
  {
    name: "React Native",
    level: 65,
    category: "Mobile",
    icon: <Smartphone className="text-teal-500" size={24} />,
  },
]

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")

            if (entry.target.classList.contains("skill-progress")) {
              const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
              const level = skills[index].level

              const progressBar = entry.target.querySelector(".progress-bar") as HTMLElement
              if (progressBar) {
                setTimeout(() => {
                  progressBar.style.width = `${level}%`
                }, 300)
              }
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    skillRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }

      skillRefs.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-slate-950">
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-slate-900 dark:text-white">Minhas </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
            Habilidades
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => {if (el){(skillRefs.current[index] = el)}}}
              data-index={index}
              className="skill-progress opacity-0 translate-y-10 transition-all duration-700 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl border border-slate-200 dark:border-slate-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg">{skill.icon}</div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">{skill.name}</h3>
                <span className="ml-auto text-teal-500 dark:text-teal-400 font-semibold">{skill.level}%</span>
              </div>

              <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="progress-bar h-full bg-gradient-to-r from-teal-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

