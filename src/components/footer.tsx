import { Github, Linkedin, Twitter, Mail, Code } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-teal-500 to-purple-600 rounded-lg overflow-hidden">
                <Code className="text-white" size={16} />
              </div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
                João Cruz
              </h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 mt-2">Desenvolvedor Fullstack</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/joaocruz1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/joao-cruz-604b3b2b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/JCruz00001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:joaovcruz50@gmail.com"
              className="text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            &copy; {currentYear} João Cruz. Todos os direitos reservados.
          </p>

          <nav className="flex gap-6">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector("#about")
                if (element) {
                  const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({
                    top: offsetTop - 80,
                    behavior: "smooth",
                  })
                }
              }}
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 cursor-pointer"
            >
              Sobre Mim
            </a>
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
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 cursor-pointer"
            >
              Portfolio
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
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 cursor-pointer"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer