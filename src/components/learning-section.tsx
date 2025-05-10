"use client"

import { useRef } from "react"
import { useParallax } from "./parallax-provider"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import {
  Rocket,
  Presentation,
  Briefcase,
  Coffee,
  Smartphone,
  Brain,
  Code2,
  Laptop,
} from "lucide-react"
import type { JSX } from "react/jsx-runtime"

type LearningItem = {
  name: string
  icon: JSX.Element
  description: string
  color: string
}

const learningItems: LearningItem[] = [
  {
    name: "Feira do Conhecimento",
    icon: <Rocket className="w-8 h-8" />,
    description: "Participei do evento na competição de robô seguidor de linha.",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Ceará Científico",
    icon: <Presentation className="w-8 h-8" />,
    description: "Apresentei de forma acadêmica o projeto R.E.S.P.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "SIERA TECH",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Apresentei o projeto R.E.S.P em uma feira de empreendedorismo.",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Java Cloud Native",
    icon: <Coffee className="w-8 h-8" />,
    description: "Aperfeiçoando habilidades em Java, APIs e Spring Boot.",
    color: "from-yellow-500 to-red-500",
  },
  {
    name: "Santander Bootcamp - Flutter",
    icon: <Smartphone className="w-8 h-8" />,
    description: "Meu primeiro contato com desenvolvimento mobile usando Flutter.",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "BairesDev - Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    description: "Inteligência artificial, redes neurais e aprendizado de máquina.",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "XP Inc. - Full Stack Developer",
    icon: <Laptop className="w-8 h-8" />,
    description: "Desenvolvimento full stack com React e C#.",
    color: "from-sky-500 to-blue-600",
  },
]

const LearningSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useParallax()

  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)",
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)",
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      />

      <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Certificados e Eventos
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Veja alguns dos meus certificados e eventos/competições em que participei.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {learningItems.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="relative bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 transition-transform transform hover:scale-[1.02] group">
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-md -z-10`}
                />
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} text-white`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Decorative elements */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-r from-teal-500/20 to-purple-600/20 rounded-full filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-teal-500/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      </div>
    </section>
  )
}

export default LearningSection
