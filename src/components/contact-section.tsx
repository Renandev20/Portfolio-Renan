"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Mail, MessageCircle, MapPin, Send } from "lucide-react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: string; text: string } | null>(null)

  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
        })
      } else {
        setSubmitMessage({
          type: "error",
          text: "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.",
        })
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.",
      })
    } finally {
      setIsSubmitting(false)

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null)
      }, 5000)
    }
  }

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-slate-900 dark:text-white">Entre em </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">Contato</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Vamos conversar!</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Estou sempre aberto a novas oportunidades, parcerias e projetos interessantes. Se você tem uma ideia ou
              projeto em mente, não hesite em entrar em contato!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                  <Mail className="text-teal-500 dark:text-teal-400" size={24} />
                </div>
                <div>
                  <a href="mailto:joaovcruz50@gmail.com" className="text-slate-900 dark:text-white">
                  <h4 className="text-purple-600 dark:text-purple-400 font-medium">Email</h4>
                  <p className="text-slate-900 dark:text-white">joaovcruz50@gmail.com</p>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                  <MessageCircle className="text-teal-500 dark:text-teal-400" size={24} />
                </div>
                <div>
                  <a href="https://wa.me/553599747872" className="text-slate-900 dark:text-white">
                  <h4 className="text-purple-600 dark:text-purple-400 font-medium">WhatsApp</h4>
                  <p className="text-slate-900 dark:text-white">(35) 99747-8472</p>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                  <MapPin className="text-teal-500 dark:text-teal-400" size={24} />
                </div>
                <div>
                  <h4 className="text-purple-600 dark:text-purple-400 font-medium">Localização</h4>
                  <p className="text-slate-900 dark:text-white">Minas Gerais, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {submitMessage && (
                <div
                  className={`p-4 rounded-lg ${
                    submitMessage.type === "success"
                      ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                      : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-slate-900 dark:text-white mb-2 font-medium">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-900 dark:text-white mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-900 dark:text-white mb-2 font-medium">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-900 dark:text-white mb-2 font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300 resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-300 disabled:opacity-70 shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection