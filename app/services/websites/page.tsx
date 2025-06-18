import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Code, Smartphone, Search, Zap, ShoppingCart, Building, FileText } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { ScaleIn } from "@/components/animations/scale-in"
import { HoverCard } from "@/components/animations/hover-card"
import { PageTransition } from "@/components/page-transition"

export default function WebsitesServicePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="bg-gradient-to-br from-[#0a0a29] to-[#1a1a4a] text-white">
          <Navbar variant="light" />
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn direction="up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Criação de Websites Profissionais</h1>
                <p className="text-xl text-blue-200">
                  Sites responsivos, otimizados para SEO e com design moderno que convertem visitantes em clientes.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <FadeIn direction="right">
                  <h2 className="text-3xl font-bold mb-6 text-blue-900">Websites que Geram Resultados</h2>
                  <p className="text-lg mb-4">
                    Na era digital, seu website é frequentemente o primeiro contato que potenciais clientes têm com sua
                    marca. Mais do que apenas uma vitrine online, um site bem desenvolvido é uma poderosa ferramenta de
                    marketing e vendas.
                  </p>
                  <p className="text-lg mb-6">
                    Nossa equipe especializada cria websites que não apenas impressionam visualmente, mas também são
                    estrategicamente projetados para converter visitantes em clientes, otimizados para mecanismos de
                    busca e perfeitamente integrados com campanhas Google Ads para maximizar seus resultados.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Code className="h-5 w-5 text-blue-700" />
                      </div>
                      <span>Código Limpo</span>
                    </div>
                    <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Smartphone className="h-5 w-5 text-blue-700" />
                      </div>
                      <span>Responsivo</span>
                    </div>
                    <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Search className="h-5 w-5 text-blue-700" />
                      </div>
                      <span>Otimizado para SEO</span>
                    </div>
                    <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Zap className="h-5 w-5 text-blue-700" />
                      </div>
                      <span>Alta Performance</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
              <div className="md:w-1/2">
                <ScaleIn delay={0.3}>
                  <Image
                    src="/website-ads-integration.png"
                    alt="Integração Website e Google Ads"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl"
                  />
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="text-center">
              <h2 className="text-3xl font-bold mb-12 text-blue-900">Nosso Processo</h2>
            </FadeIn>
            <StaggerChildren className="">
              <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-700 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Planejamento e Estratégia</h3>
                <p className="text-gray-600">
                  Entendemos seu negócio, objetivos e público-alvo para desenvolver uma estratégia personalizada para
                  seu website.
                </p>
              </HoverCard>
              <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-700 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Design e Desenvolvimento</h3>
                <p className="text-gray-600">
                  Criamos layouts modernos e intuitivos, seguidos pelo desenvolvimento com as tecnologias mais atuais do
                  mercado.
                </p>
              </HoverCard>
              <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-700 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Lançamento e Otimização</h3>
                <p className="text-gray-600">
                  Após testes rigorosos, lançamos seu site e continuamos otimizando para garantir máxima performance e
                  conversão.
                </p>
              </HoverCard>
            </StaggerChildren>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="text-center">
              <h2 className="text-3xl font-bold mb-12 text-blue-900">O que está incluso?</h2>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 group">
                <div className="bg-blue-100 p-3 rounded-lg h-fit transition-all duration-300 group-hover:bg-blue-200">
                  <Code className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-700">
                    Design Personalizado
                  </h3>
                  <p className="text-gray-600">
                    Layout exclusivo que reflete a identidade da sua marca e atende às necessidades específicas do seu
                    negócio.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-blue-100 p-3 rounded-lg h-fit transition-all duration-300 group-hover:bg-blue-200">
                  <Smartphone className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-700">
                    Responsividade Total
                  </h3>
                  <p className="text-gray-600">
                    Seu site se adapta perfeitamente a qualquer dispositivo: desktop, tablet ou smartphone.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-blue-100 p-3 rounded-lg h-fit transition-all duration-300 group-hover:bg-blue-200">
                  <Search className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-700">
                    Otimização para SEO
                  </h3>
                  <p className="text-gray-600">
                    Estrutura técnica e conteúdo otimizados para melhor posicionamento nos mecanismos de busca.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-blue-100 p-3 rounded-lg h-fit transition-all duration-300 group-hover:bg-blue-200">
                  <Zap className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-700">
                    Alta Performance
                  </h3>
                  <p className="text-gray-600">
                    Carregamento rápido e experiência fluida para manter os visitantes engajados com seu conteúdo.
                  </p>
                </div>
              </div>
            </StaggerChildren>
          </div>
        </section>

        {/* Types of Websites Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Tipos de Sites que Desenvolvemos</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Criamos soluções digitais personalizadas para diversos segmentos e necessidades, sempre com foco em
                design moderno, experiência do usuário e resultados mensuráveis.
              </p>
            </FadeIn>

            <StaggerChildren direction="grid" columns={{ sm: 1, md: 2, lg: 3 }} gap={8} animationVariant="fadeUp">
              {/* Site Institucional */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/sites-responsivos.png"
                    alt="Site Institucional"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Building className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Sites Institucionais</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Apresente sua empresa, valores e serviços de forma profissional e atrativa para seus potenciais
                    clientes. Ideal para estabelecer presença digital e credibilidade.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Responsivo
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      SEO Otimizado
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">CMS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">A partir de R$ 3.500</span>
                    <Link
                      href="/contact?type=institucional"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                    >
                      Solicitar orçamento
                      <svg
                        className="w-3.5 h-3.5 ml-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Landing Pages */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/landingpage-image.png"
                    alt="Landing Page"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover object-[25%_15%] transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <FileText className="h-5 w-5 text-purple-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Landing Pages</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Páginas estratégicas focadas em conversão para campanhas específicas, produtos ou serviços. Maximize
                    seus resultados com páginas otimizadas para conversão.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Alta Conversão
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      A/B Testing
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Analytics
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">A partir de R$ 2.000</span>
                    <Link
                      href="/contact?type=landing"
                      className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center"
                    >
                      Solicitar orçamento
                      <svg
                        className="w-3.5 h-3.5 ml-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* E-commerce */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/ecommerce-service.PNG"
                    alt="E-commerce"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    Alta Demanda
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <ShoppingCart className="h-5 w-5 text-green-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">E-commerce</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Lojas virtuais completas com gestão de produtos, pagamentos seguros e experiência de compra
                    otimizada. Venda seus produtos 24/7 com uma plataforma robusta.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Pagamentos
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Estoque</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Logística
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">A partir de R$ 8.000</span>
                    <Link
                      href="/contact?type=ecommerce"
                      className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center"
                    >
                      Solicitar orçamento
                      <svg
                        className="w-3.5 h-3.5 ml-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Blogs e Portais */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/blogs-services.png"
                    alt="Blog e Portal"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover object-[25%_85%] transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <FileText className="h-5 w-5 text-orange-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Blogs e Portais</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Plataformas de conteúdo otimizadas para SEO, com categorização eficiente e experiência de leitura
                    agradável. Ideal para estratégias de marketing de conteúdo.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">SEO</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      WordPress
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Newsletter
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">A partir de R$ 4.500</span>
                    <Link
                      href="/contact?type=blog"
                      className="text-orange-600 hover:text-orange-800 text-sm font-medium flex items-center"
                    >
                      Solicitar orçamento
                      <svg
                        className="w-3.5 h-3.5 ml-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Aplicações Web */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/web-apps-services.png"
                    alt="Aplicação Web"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    Avançado
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                      <Code className="h-5 w-5 text-indigo-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Aplicações Web</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Sistemas web personalizados com funcionalidades específicas para seu negócio, como dashboards, área
                    de membros e integrações com APIs.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">React</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Next.js</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">APIs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">A partir de R$ 12.000</span>
                    <Link
                      href="/contact?type=webapp"
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                    >
                      Solicitar orçamento
                      <svg
                        className="w-3.5 h-3.5 ml-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sites Responsivos */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/site-mobile-app-services.png"
                    alt="Site Responsivo"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover object-[25%_85%] transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Smartphone className="h-5 w-5 text-red-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Sites Responsivos</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Sites que se adaptam perfeitamente a qualquer dispositivo, garantindo uma experiência consistente em
                    desktops, tablets e smartphones.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Mobile-first
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Adaptativo
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">PWA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Incluído em todos os projetos</span>
                    <Link
                      href="/contact"
                      className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
                    >
                      Saiba mais
                      <svg
                        className="w-3.5 h-3.5 ml-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerChildren>

            <div className="mt-16 text-center">
              <FadeIn direction="up">
                <p className="text-gray-600 mb-6">
                  Não encontrou o tipo de site que procura? Temos soluções personalizadas para necessidades específicas.
                </p>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Fale com um especialista</Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="text-center">
              <h2 className="text-3xl font-bold mb-12 text-blue-900">Perguntas Frequentes</h2>
            </FadeIn>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    Quanto tempo leva para criar um website?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    O prazo varia conforme a complexidade do projeto. Um site institucional simples pode levar de 2 a 4
                    semanas, enquanto um e-commerce completo pode levar de 6 a 12 semanas. Durante nossa consulta
                    inicial, forneceremos um cronograma detalhado para seu projeto específico.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    Vocês oferecem manutenção após o lançamento do site?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Sim, oferecemos planos de manutenção mensal que incluem atualizações de segurança, backups
                    regulares, pequenas alterações de conteúdo e suporte técnico. Isso garante que seu site permaneça
                    seguro, atualizado e funcionando perfeitamente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    O site será otimizado para dispositivos móveis?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Absolutamente! Todos os nossos sites são desenvolvidos com abordagem mobile-first, garantindo uma
                    experiência perfeita em qualquer dispositivo. Com mais de 60% do tráfego web vindo de dispositivos
                    móveis, consideramos a responsividade uma prioridade absoluta.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    Vocês também cuidam do hospedagem do site?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Sim, oferecemos soluções de hospedagem seguras, rápidas e confiáveis. Nossos servidores são
                    otimizados para garantir máxima performance, tempo de atividade e segurança para seu site. Também
                    podemos trabalhar com sua hospedagem atual, se preferir.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    Como funciona o processo de pagamento?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Trabalhamos com um modelo de pagamento em etapas: 40% no início do projeto, 30% após aprovação do
                    design e 30% na entrega final. Para projetos maiores, podemos criar um plano de pagamento
                    personalizado que se adapte ao seu orçamento.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para criar seu website?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Entre em contato conosco hoje mesmo para uma consulta gratuita e descubra como podemos transformar sua
                presença digital.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                  Solicitar Orçamento para Criação de Sites
                </Button>
              </Link>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
