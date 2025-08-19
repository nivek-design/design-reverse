"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useReverse } from "@/contexts/reverse-context"

export function Navbar({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const logoName = variant === "dark" ? "DESIGN REVERSE" : "DESIGN REVERSE"
  const logoDescription = variant === "dark" ? "MARKETING AGENCY" : "MARKETING AGENCY"
  const pathname = usePathname()
  const router = useRouter()
  const [activeItem, setActiveItem] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isReversed, toggleReverse } = useReverse()

  // Handle navigation with refresh
  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false)
    if (pathname !== href) {
      router.push(href)
      router.refresh()
    }
  }

  // Fechar o menu mobile quando a rota mudar
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Impedir a rolagem do body quando o menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  // Array de itens de navegação com suas rotas e subrotas
  const navItems = [
    {
      name: "HOME",
      href: "/",
      exact: true, // Apenas ativa quando o caminho é exatamente "/"
    },
    {
      name: "SERVIÇOS",
      href: "/services",
      subRoutes: ["/services/websites", "/services/google-ads"], // Subrotas que também ativam este item
    },
    {
      name: "PORTFOLIO",
      href: "/portfolio",
      subRoutes: ["/portfolio/[slug]"], // Padrão para rotas dinâmicas
    },
    {
      name: "SOBRE",
      href: "/about",
    },
    {
      name: "CONTATO",
      href: "/contact",
    },
  ]

  // Função para verificar se uma rota está ativa
  const isRouteActive = (item: (typeof navItems)[0]) => {
    // Caso exato (apenas para a rota raiz "/")
    if (item.exact && pathname === item.href) {
      return true
    }

    // Verificar se o pathname corresponde exatamente à rota
    if (pathname === item.href) {
      return true
    }

    // Verificar se o pathname começa com a rota (para subrotas)
    if (!item.exact && pathname.startsWith(item.href) && item.href !== "/") {
      // Verificar se há outro item com uma correspondência mais específica
      const moreSpecificMatch = navItems.some(
        (otherItem) =>
          otherItem !== item &&
          otherItem.href !== "/" &&
          pathname.startsWith(otherItem.href) &&
          otherItem.href.length > item.href.length,
      )

      // Se não houver correspondência mais específica, esta rota está ativa
      if (!moreSpecificMatch) {
        return true
      }
    }

    // Verificar subrotas específicas
    if (item.subRoutes) {
      // Verificar correspondências exatas
      if (item.subRoutes.includes(pathname)) {
        return true
      }

      // Verificar padrões de rota dinâmica (como [slug])
      return item.subRoutes.some((subRoute) => {
        if (subRoute.includes("[") && subRoute.includes("]")) {
          const pattern = subRoute.replace(/\[\w+\]/g, "[^/]+")
          const regex = new RegExp(`^${pattern.replace(/\//g, "\\/")}$`)
          return regex.test(pathname)
        }
        return false
      })
    }

    return false
  }

  // Atualizar o item ativo quando o pathname mudar
  useEffect(() => {
    const active = navItems.find((item) => isRouteActive(item))
    setActiveItem(active?.name || "")
  }, [pathname])

  // Variantes de animação para o menu mobile
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Variantes de animação para os itens do menu mobile
  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  }

  // Variantes de animação para o backdrop
  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  }

  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between relative z-50">
      <div className="flex items-center gap-3">
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img 
            src="/design-reverse-logotipo-sem-fundo.png" 
            alt="Design Reverse Logo" 
            className="h-12 w-auto"
          />
        </motion.div>
        <div className="flex flex-col">
          <motion.div
            className="font-bold text-lg leading-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {logoName}
          </motion.div>
          <motion.div
            className="font-bold text-xs leading-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {logoDescription}
          </motion.div>
        </div>
      </div>

      {/* Menu de navegação para desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = activeItem === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className="relative text-sm hover:text-white/80 group"
              aria-current={isActive ? "page" : undefined}
            >
              {item.name}
              {isActive && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                  layoutId="navbar-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 scale-x-0 origin-left"
                initial={false}
                whileHover={{ scaleX: isActive ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          )
        })}
      </nav>

      {/* Botão de contato para desktop */}
      <motion.div className="hidden md:block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={toggleReverse}
          className={`${
            isReversed
              ? "bg-orange-500 border-orange-400 hover:bg-orange-600 text-white"
              : "bg-transparent border border-blue-400 text-white hover:bg-blue-900/20"
          } rounded-md text-xs px-6 transition-all duration-300 ${isReversed ? "reverse-button-active" : ""}`}
        >
          {isReversed ? "NORMAL" : "REVERSE"}
        </Button>
      </motion.div>

      {/* Botão do menu mobile */}
      <button
        className="md:hidden flex items-center justify-center"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={mobileMenuOpen}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop escurecido */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Painel do menu */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-gray-900 z-50 flex flex-col"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {/* Cabeçalho do menu mobile */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <img 
                    src="/design-reverse-logotipo-sem-fundo.png" 
                    alt="Design Reverse Logo" 
                    className="h-8 w-auto"
                  />
                  <span className="font-bold text-lg">{logoName}</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-800"
                  aria-label="Fechar menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Links do menu mobile */}
              <nav className="flex flex-col p-6 space-y-6 flex-1">
                {navItems.map((item) => {
                  const isActive = activeItem === item.name

                  return (
                    <motion.div key={item.name} variants={menuItemVariants}>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className={`text-lg font-medium relative w-full text-left ${
                          isActive ? "text-blue-400" : "text-white hover:text-blue-300"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.name}
                        {isActive && (
                          <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400" />
                        )}
                      </button>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Botão de contato no menu mobile */}
              <div className="p-6 border-t border-gray-800">
                <Button
                  className={`w-full ${
                    isReversed ? "bg-orange-500 hover:bg-orange-600" : "bg-blue-600 hover:bg-blue-700"
                  } text-white rounded-md py-6 transition-all duration-300`}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    toggleReverse()
                  }}
                >
                  {isReversed ? "MODO NORMAL" : "MODO REVERSE"}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
