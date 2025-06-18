import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a29] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-6 rounded-full bg-white/20 flex items-center justify-center">
                <div className="size-3 rounded-full bg-white"></div>
              </div>
              <span className="font-bold text-lg">DESIGN REVERSE</span>
            </div>
            <p className="text-blue-200 mb-4">
              Transformamos sua presença digital em resultados reais com estratégias personalizadas de marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-blue-200 hover:text-white transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/websites" className="text-blue-200 hover:text-white transition-colors">
                  Criação de Websites
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads" className="text-blue-200 hover:text-white transition-colors">
                  Google Ads
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-blue-200 hover:text-white transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-blue-200 hover:text-white transition-colors">
                  Redes Sociais
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-blue-200">contato@designreverse.com</li>
              <li className="text-blue-200">+55 (43) 98812-5184</li>
              <li className="text-blue-200">Londrina, PR - Brasil</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800/30 p-2 rounded-full hover:bg-blue-700/50 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800/30 p-2 rounded-full hover:bg-blue-700/50 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800/30 p-2 rounded-full hover:bg-blue-700/50 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800/30 p-2 rounded-full hover:bg-blue-700/50 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm mb-4 md:mb-0">
              © {currentYear} Design Reverse Marketing Agency. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-blue-300 text-sm hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/terms-of-service" className="text-blue-300 text-sm hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
