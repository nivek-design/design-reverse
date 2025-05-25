"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { ArrowRight, BarChart2, Users, TrendingUp, Award, ExternalLink } from "lucide-react"
import { StaggerChildren } from "@/components/animations/stagger-children"

// Tipos para os projetos
interface ProjetoMetrica {
  valor: string
  label: string
  icone: React.ReactNode
}

interface Projeto {
  id: string
  titulo: string
  cliente: string
  categoria: string
  descricao: string
  imagem: string
  imagensAdicionais?: string[]
  metricas: ProjetoMetrica[]
  tags: string[]
}

// Dados dos projetos
const projetos: Projeto[] = [
  {
    id: "ecommerce-redesign",
    titulo: "Redesign de E-commerce",
    cliente: "Fashion Store",
    categoria: "Website",
    descricao:
      "Redesign completo da plataforma de e-commerce com foco em experiência do usuário e otimização da jornada de compra, resultando em aumento significativo nas conversões.",
    imagem: "/dashboard-ui.png",
    imagensAdicionais: ["/portfolio-ecommerce-1.png", "/portfolio-ecommerce-2.png"],
    metricas: [
      {
        valor: "+65%",
        label: "Aumento nas vendas mobile",
        icone: <TrendingUp className="h-4 w-4 text-emerald-500" />,
      },
      {
        valor: "-40%",
        label: "Redução no abandono de carrinho",
        icone: <BarChart2 className="h-4 w-4 text-blue-500" />,
      },
      {
        valor: "+52%",
        label: "Melhoria no tempo de carregamento",
        icone: <Award className="h-4 w-4 text-amber-500" />,
      },
    ],
    tags: ["UX/UI Design", "Desenvolvimento Web", "Otimização de Conversão"],
  },
  {
    id: "gaming-portal",
    titulo: "Portal de Jogos Online",
    cliente: "GameZone",
    categoria: "Website",
    descricao:
      "Desenvolvimento de um portal imersivo para comunidade gamer com sistema avançado de busca, perfis personalizáveis e integrações com plataformas de streaming.",
    imagem: "/gaming-website.png",
    imagensAdicionais: ["/portfolio-gaming-1.png", "/portfolio-gaming-2.png"],
    metricas: [
      {
        valor: "+120%",
        label: "Aumento no tempo de permanência",
        icone: <TrendingUp className="h-4 w-4 text-emerald-500" />,
      },
      {
        valor: "+85%",
        label: "Crescimento na base de usuários",
        icone: <Users className="h-4 w-4 text-blue-500" />,
      },
      {
        valor: "-60%",
        label: "Redução na taxa de rejeição",
        icone: <Award className="h-4 w-4 text-amber-500" />,
      },
    ],
    tags: ["Design Interativo", "Desenvolvimento Web", "Comunidade Online"],
  },
  {
    id: "fashion-campaign",
    titulo: "Campanha de Moda Sazonal",
    cliente: "Elegance Boutique",
    categoria: "Google Ads",
    descricao:
      "Estratégia multicanal de Google Ads com segmentação precisa para nova coleção sazonal, incluindo campanhas de Search, Display e Shopping com remarketing dinâmico.",
    imagem: "/woman-hat.png",
    imagensAdicionais: ["/portfolio-fashion-1.png", "/portfolio-fashion-2.png"],
    metricas: [
      {
        valor: "780%",
        label: "ROI sobre investimento em ads",
        icone: <TrendingUp className="h-4 w-4 text-emerald-500" />,
      },
      {
        valor: "-35%",
        label: "Redução no custo por aquisição",
        icone: <BarChart2 className="h-4 w-4 text-blue-500" />,
      },
      {
        valor: "+150%",
        label: "Crescimento nas vendas da coleção",
        icone: <Award className="h-4 w-4 text-amber-500" />,
      },
    ],
    tags: ["Google Ads", "Remarketing", "Otimização de Campanhas"],
  },
  {
    id: "restaurant-website",
    titulo: "Website para Restaurante",
    cliente: "Sabor Gourmet",
    categoria: "Website",
    descricao:
      "Criação de website responsivo com sistema de reservas online, cardápio digital interativo e integração com plataformas de delivery para restaurante premium.",
    imagem: "/portfolio-restaurant.png",
    metricas: [
      {
        valor: "+200%",
        label: "Aumento nas reservas online",
        icone: <TrendingUp className="h-4 w-4 text-emerald-500" />,
      },
      {
        valor: "+45%",
        label: "Crescimento no faturamento",
        icone: <BarChart2 className="h-4 w-4 text-blue-500" />,
      },
      {
        valor: "4.9/5",
        label: "Avaliação dos usuários",
        icone: <Award className="h-4 w-4 text-amber-500" />,
      },
    ],
    tags: ["Design Responsivo", "Sistema de Reservas", "Integração com Delivery"],
  },
  {
    id: "saas-landing",
    titulo: "Landing Page SaaS",
    cliente: "TechCloud",
    categoria: "Website",
    descricao:
      "Design e desenvolvimento de landing page de alta conversão para produto SaaS B2B, com testes A/B e otimização contínua para maximizar leads qualificados.",
    imagem: "/portfolio-saas.png",
    metricas: [
      {
        valor: "+320%",
        label: "Aumento na geração de leads",
        icone: <TrendingUp className="h-4 w-4 text-emerald-500" />,
      },
      {
        valor: "-28%",
        label: "Redução no custo por lead",
        icone: <BarChart2 className="h-4 w-4 text-blue-500" />,
      },
      {
        valor: "+42%",
        label: "Melhoria na taxa de conversão",
        icone: <Award className="h-4 w-4 text-amber-500" />,
      },
    ],
    tags: ["Landing Page", "Otimização de Conversão", "Testes A/B"],
  },
  {
    id: "fitness-ads",
    titulo: "Campanha para Academia",
    cliente: "FitLife",
    categoria: "Google Ads",
    descricao:
      "Campanha integrada de Google Ads e Meta Ads para rede de academias, com foco em captação de novos membros e retenção através de remarketing segmentado.",
    imagem: "/portfolio-fitness.png",
    metricas: [
      {
        valor: "+175%",
        label: "Aumento em novas matrículas",
        icone: <TrendingUp className="h-4 w-4 text-emerald-500" />,
      },
      {
        valor: "3.2x",
        label: "Retorno sobre investimento",
        icone: <BarChart2 className="h-4 w-4 text-blue-500" />,
      },
      {
        valor: "+68%",
        label: "Crescimento em visitas às unidades",
        icone: <Award className="h-4 w-4 text-amber-500" />,
      },
    ],
    tags: ["Google Ads", "Meta Ads", "Geolocalização"],
  },
]

// Componente de filtro de categorias
function CategoriasFiltro({
  categorias,
  categoriaAtiva,
  setCategoriaAtiva,
}: {
  categorias: string[]
  categoriaAtiva: string
  setCategoriaAtiva: (categoria: string) => void
}) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex bg-blue-900/30 backdrop-blur-sm p-1 rounded-full">
        {categorias.map((categoria) => (
          <motion.button
            key={categoria}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
              categoriaAtiva === categoria ? "text-white" : "text-blue-300 hover:text-white"
            }`}
            onClick={() => setCategoriaAtiva(categoria)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {categoriaAtiva === categoria && (
              <motion.div
                className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                layoutId="categoriaBg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {categoria}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

// Componente de card de projeto
function ProjetoCard({ projeto, featured = false }: { projeto: Projeto; featured?: boolean }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-blue-800/30 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Categoria badge */}
      <div className="absolute top-4 left-4 z-20">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            projeto.categoria === "Website"
              ? "bg-blue-500/80 text-white"
              : projeto.categoria === "Google Ads"
                ? "bg-red-500/80 text-white"
                : "bg-purple-500/80 text-white"
          }`}
        >
          {projeto.categoria}
        </span>
      </div>

      {/* Imagem principal */}
      <div className="relative overflow-hidden">
        <Image
          src={projeto.imagem || "/placeholder.svg"}
          alt={projeto.titulo}
          width={800}
          height={600}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            featured ? "h-[400px] md:h-[500px]" : "h-[250px]"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
            {projeto.titulo}
          </h3>
          <p className="text-blue-200 text-sm">{projeto.cliente}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {projeto.tags.slice(0, featured ? 3 : 2).map((tag, index) => (
              <span key={index} className="text-xs bg-white/10 px-2 py-1 rounded-md text-blue-100 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Descrição - visível apenas em cards destacados ou no hover */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              featured ? "max-h-20 opacity-100" : "max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100"
            }`}
          >
            <p className="text-sm text-blue-100 line-clamp-2">{projeto.descricao}</p>
          </div>

          {/* Métricas - visíveis apenas em cards destacados ou no hover */}
          <div
            className={`grid grid-cols-3 gap-2 transition-all duration-500 ${
              featured
                ? "max-h-24 opacity-100 mt-4"
                : "max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-4"
            }`}
          >
            {projeto.metricas.map((metrica, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-1">{metrica.icone}</div>
                <div className="text-sm font-bold text-white">{metrica.valor}</div>
                <div className="text-xs text-blue-200 line-clamp-1">{metrica.label}</div>
              </div>
            ))}
          </div>

          {/* Link */}
          <div
            className={`transition-all duration-500 ${
              featured ? "opacity-100 mt-4" : "opacity-0 group-hover:opacity-100 group-hover:mt-4"
            }`}
          >
            <Link
              href={`/portfolio/${projeto.id}`}
              className="inline-flex items-center text-blue-300 hover:text-white text-sm font-medium transition-colors"
            >
              Ver Detalhes <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Componente principal da seção de projetos
export function ProjetosSection({ showAll = false }: { showAll?: boolean }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // Extrair categorias únicas dos projetos
  const categorias = ["Todos", ...Array.from(new Set(projetos.map((projeto) => projeto.categoria)))]

  // Filtrar projetos com base na categoria selecionada
  const projetosFiltrados =
    categoriaAtiva === "Todos" ? projetos : projetos.filter((projeto) => projeto.categoria === categoriaAtiva)

  // Limitar o número de projetos exibidos na página inicial
  const projetosExibidos = showAll ? projetosFiltrados : projetosFiltrados.slice(0, 3)

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a29] to-[#0a0a29]/90 -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FadeIn direction="up">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full text-sm font-medium">
                Nosso Portfólio
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Projetos de Sucesso
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              Conheça alguns dos projetos que desenvolvemos e os resultados impressionantes que alcançamos para nossos
              clientes.
            </p>
          </FadeIn>
        </div>

        {showAll && (
          <CategoriasFiltro
            categorias={categorias}
            categoriaAtiva={categoriaAtiva}
            setCategoriaAtiva={setCategoriaAtiva}
          />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={categoriaAtiva}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <StaggerChildren direction="row" gap="gap-6">
              {showAll ? (
                // Layout para a página de portfólio completa
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-full">
                  {projetosExibidos.map((projeto, index) => (
                    <ProjetoCard key={projeto.id} projeto={projeto} featured={index === 0} />
                  ))}
                </div>
              ) : (
                // Layout especial para a página inicial
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full">
                  <ProjetoCard projeto={projetosExibidos[0]} featured={true} />
                  <div className="md:col-span-1 space-y-6">
                    {projetosExibidos.slice(1, 3).map((projeto) => (
                      <ProjetoCard key={projeto.id} projeto={projeto} />
                    ))}
                  </div>
                </div>
              )}
            </StaggerChildren>
          </motion.div>
        </AnimatePresence>

        {!showAll && (
          <div className="text-center mt-12">
            <FadeIn direction="up" delay={0.5}>
              <Link href="/portfolio" className="inline-block">
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
                    <div className="text-left mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-white mb-2">Explore Nosso Portfólio Completo</h3>
                      <p className="text-blue-200 text-sm max-w-md">
                        Descubra mais {projetos.length - 3}+ projetos de sucesso e veja como podemos transformar sua
                        presença digital.
                      </p>
                    </div>

                    <div className="flex items-center bg-blue-500 text-white px-5 py-3 rounded-lg transition-all duration-300 group-hover:bg-blue-400">
                      Ver Todos os Projetos
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                </div>
              </Link>
            </FadeIn>
          </div>
        )}

        {/* Estatísticas de projetos */}
        {showAll && (
          <div className="mt-20">
            <FadeIn direction="up">
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-8 border border-blue-800/30">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Impacto Comprovado</h3>
                  <p className="text-blue-200">Resultados médios alcançados em nossos projetos</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-3">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">+127%</div>
                    <div className="text-sm text-blue-200">Aumento médio em conversões</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 mb-3">
                      <BarChart2 className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">3.8x</div>
                    <div className="text-sm text-blue-200">ROI médio para clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 mb-3">
                      <Users className="h-6 w-6 text-amber-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">+85%</div>
                    <div className="text-sm text-blue-200">Aumento em engajamento</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 mb-3">
                      <Award className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">97%</div>
                    <div className="text-sm text-blue-200">Satisfação dos clientes</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  )
}
