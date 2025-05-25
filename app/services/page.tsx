import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { HoverCard } from "@/components/animations/hover-card"
import { ScaleIn } from "@/components/animations/scale-in"
import {
  Code,
  Search,
  BarChart3,
  Zap,
  Globe,
  CheckCircle2,
  ArrowRight,
  MousePointerClick,
  Layers,
  ShoppingCart,
  Rocket,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#0a0a29] to-[#1a1a4a] text-white relative overflow-hidden">
          <Navbar variant="light" />

          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn direction="up">
                <span className="inline-block px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm font-medium mb-4">
                  Soluções Digitais Completas
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Transformamos sua presença digital em resultados concretos
                </h1>
                <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
                  Oferecemos serviços especializados em criação de websites e gestão de campanhas Google Ads que
                  impulsionam seu negócio com estratégias personalizadas e foco em ROI.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="#websites">
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 py-6 text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                      Criação de Websites
                    </Button>
                  </Link>
                  <Link href="#google-ads">
                    <Button className="bg-purple-600 hover:bg-purple-700 rounded-full px-6 py-6 text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                      Google Ads
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-[20%] left-[5%] opacity-20 animate-pulse">
            <Code className="h-16 w-16 text-blue-400" />
          </div>
          <div className="absolute top-[30%] right-[10%] opacity-20 animate-pulse delay-300">
            <Search className="h-12 w-12 text-purple-400" />
          </div>
          <div className="absolute bottom-[30%] left-[15%] opacity-20 animate-pulse delay-700">
            <BarChart3 className="h-14 w-14 text-blue-400" />
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-[100px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white text-gray-900 flex-grow">
          {/* Stats Section */}
          <section className="py-12 border-b border-gray-100">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <FadeIn direction="up" delay={0.1} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
                  <div className="text-gray-600">Anos de experiência</div>
                </FadeIn>
                <FadeIn direction="up" delay={0.2} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">11+</div>
                  <div className="text-gray-600">Projetos entregues</div>
                </FadeIn>
                <FadeIn direction="up" delay={0.3} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">R$50Mil+</div>
                  <div className="text-gray-600">Em mídia gerenciada</div>
                </FadeIn>
                <FadeIn direction="up" delay={0.4} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Clientes satisfeitos</div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Website Creation Section */}
          <section id="websites" className="py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/2">
                  <FadeIn direction="right">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                      Criação de Websites
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                      Sites que convertem visitantes em clientes
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                      Desenvolvemos websites profissionais, responsivos e otimizados para SEO que não apenas
                      impressionam visualmente, mas também são estrategicamente projetados para gerar resultados
                      concretos para seu negócio.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-blue-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Design Personalizado</h3>
                          <p className="text-gray-600">
                            Layouts exclusivos que refletem a identidade da sua marca e atendem às necessidades
                            específicas do seu negócio.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-blue-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Otimização para Conversão</h3>
                          <p className="text-gray-600">
                            Estrutura e elementos estrategicamente posicionados para maximizar a taxa de conversão de
                            visitantes em leads ou vendas.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-blue-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">SEO Integrado</h3>
                          <p className="text-gray-600">
                            Otimização técnica e de conteúdo para melhor posicionamento nos mecanismos de busca,
                            aumentando sua visibilidade online.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Link href="/services/websites">
                      <Button className="bg-blue-600 hover:bg-blue-700 rounded-md px-6 py-3 text-white">
                        Conheça nossos serviços de websites
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </FadeIn>
                </div>

                <div className="md:w-1/2 relative">
                  <ScaleIn delay={0.3}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-3 scale-105 opacity-20"></div>
                      <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                        <Image
                          src="/website-creation.png"
                          alt="Criação de Websites"
                          width={600}
                          height={400}
                          className="w-full h-auto"
                        />

                        {/* Floating elements */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                          <div className="flex items-center gap-2">
                            <Code className="h-5 w-5 text-blue-600" />
                            <span className="text-sm font-medium text-gray-800">Design Responsivo</span>
                          </div>
                        </div>

                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                          <div className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-blue-600" />
                            <span className="text-sm font-medium text-gray-800">Alta Performance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScaleIn>
                </div>
              </div>

              {/* Types of Websites */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <FadeIn direction="up">
                    <h3 className="text-2xl font-bold mb-4">Tipos de Sites que Desenvolvemos</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Criamos diferentes tipos de websites para atender às necessidades específicas de cada negócio.
                    </p>
                  </FadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {[
                    {
                      icon: <Globe className="h-6 w-6 text-white" />,
                      title: "Sites Institucionais",
                      description:
                        "Apresente sua empresa, valores e serviços de forma profissional e atrativa para seus potenciais clientes.",
                      idealFor: "Empresas e prestadores de serviços",
                      color: "#3b82f6",
                      features: ["Design personalizado", "Páginas otimizadas", "Integração com redes sociais"],
                      bgImage: "/abstract-network-blue.png",
                    },
                    {
                      icon: <ShoppingCart className="h-6 w-6 text-white" />,
                      title: "E-commerce",
                      description:
                        "Lojas virtuais completas com gestão de produtos, pagamentos seguros e experiência de compra otimizada.",
                      idealFor: "Lojas e comércio eletrônico",
                      color: "#10b981",
                      features: ["Catálogo de produtos", "Gateway de pagamento", "Gestão de estoque"],
                      bgImage: "/network-visualization.png",
                    },
                    {
                      icon: <Rocket className="h-6 w-6 text-white" />,
                      title: "Landing Pages",
                      description:
                        "Páginas estratégicas focadas em conversão para campanhas específicas, produtos ou serviços.",
                      idealFor: "Campanhas e lançamentos",
                      color: "#f59e0b",
                      features: ["Alta conversão", "Call-to-action estratégicos", "Integração com CRM"],
                      bgImage: "/mechanical-object.png",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl"
                    >
                      {/* Background image with overlay */}
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10">
                        <Image src={item.bgImage || "/placeholder.svg"} alt="" fill className="object-cover" />
                      </div>

                      {/* Colored accent line */}
                      <div
                        className="h-2 w-full transition-all duration-300 group-hover:h-3"
                        style={{ backgroundColor: item.color }}
                      />

                      <div className="p-8">
                        {/* Icon with background */}
                        <div className="mb-6 flex">
                          <div
                            className="flex h-16 w-16 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
                            style={{ backgroundColor: item.color }}
                          >
                            {item.icon}
                          </div>

                          {/* Decorative element */}
                          <div
                            className="ml-4 mt-2 h-1 w-12 opacity-0 transition-all duration-500 group-hover:w-20 group-hover:opacity-100"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>

                        {/* Content */}
                        <h4 className="mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-gray-900">
                          {item.title}
                        </h4>
                        <p className="mb-6 text-gray-600">{item.description}</p>

                        {/* Features list */}
                        <ul className="mb-6 space-y-2">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div
                                className="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white"
                                style={{ backgroundColor: item.color }}
                              >
                                <CheckCircle2 className="h-3 w-3" />
                              </div>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* Ideal for tag */}
                        <div className="flex items-center justify-between">
                          <div
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                            style={{ backgroundColor: `${item.color}20`, color: item.color }}
                          >
                            Ideal para: {item.idealFor}
                          </div>

                          {/* Arrow indicator */}
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                            style={{ backgroundColor: `${item.color}20`, color: item.color }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Google Ads Section */}
          <section id="google-ads" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
                <div className="md:w-1/2">
                  <FadeIn direction="left">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                      Google Ads
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                      Campanhas que maximizam seu retorno sobre investimento
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                      Gerenciamos campanhas de Google Ads com estratégias avançadas de segmentação, otimização contínua
                      e análise de dados para garantir o melhor custo-benefício e resultados mensuráveis para seu
                      negócio.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-purple-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Segmentação Precisa</h3>
                          <p className="text-gray-600">
                            Direcionamos seus anúncios para o público certo no momento certo, maximizando a relevância e
                            as chances de conversão.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-purple-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Otimização Contínua</h3>
                          <p className="text-gray-600">
                            Monitoramento e ajustes constantes para melhorar o desempenho das campanhas e reduzir o
                            custo por aquisição.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-purple-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Relatórios Transparentes</h3>
                          <p className="text-gray-600">
                            Relatórios detalhados e de fácil compreensão para que você acompanhe o desempenho e os
                            resultados de suas campanhas.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Link href="/services/google-ads">
                      <Button className="bg-purple-600 hover:bg-purple-700 rounded-md px-6 py-3 text-white">
                        Conheça nossos serviços de Google Ads
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </FadeIn>
                </div>

                <div className="md:w-1/2 relative">
                  <ScaleIn delay={0.3}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg transform -rotate-3 scale-105 opacity-20"></div>
                      <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                        <div className="p-6 bg-white">
                          <div className="flex items-center gap-3 mb-6">
                            <Image src="/google-ads-logo.png" alt="Google Ads" width={40} height={40} />
                            <div>
                              <h3 className="font-bold text-gray-900">Campanhas Otimizadas</h3>
                              <div className="text-sm text-gray-600">Resultados mensuráveis</div>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Taxa de Conversão</span>
                                <span className="text-sm font-medium text-green-600">+12.5%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Custo por Aquisição</span>
                                <span className="text-sm font-medium text-green-600">-18.3%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">ROI</span>
                                <span className="text-sm font-medium text-green-600">320%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-600">Cliques</div>
                              <div className="text-xl font-bold text-gray-900">12,450</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-600">Impressões</div>
                              <div className="text-xl font-bold text-gray-900">245,800</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScaleIn>
                </div>
              </div>

              {/* Types of Google Ads Campaigns */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <FadeIn direction="up">
                    <h3 className="text-2xl font-bold mb-4">Tipos de Campanhas que Gerenciamos</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Desenvolvemos e otimizamos diferentes tipos de campanhas no Google Ads para atender aos objetivos
                      específicos do seu negócio.
                    </p>
                  </FadeIn>
                </div>

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <HoverCard className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                      <Search className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Campanhas de Pesquisa</h4>
                    <p className="text-gray-600 mb-4">
                      Anúncios de texto exibidos nos resultados de pesquisa do Google quando usuários buscam por
                      palavras-chave relevantes.
                    </p>
                    <div className="text-sm text-purple-600 font-medium">
                      Ideal para: Captar clientes com intenção de compra
                    </div>
                  </HoverCard>

                  <HoverCard className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                      <Layers className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Campanhas de Display</h4>
                    <p className="text-gray-600 mb-4">
                      Anúncios visuais exibidos em sites parceiros do Google, aplicativos e YouTube para aumentar o
                      reconhecimento da marca.
                    </p>
                    <div className="text-sm text-purple-600 font-medium">
                      Ideal para: Aumentar visibilidade e reconhecimento
                    </div>
                  </HoverCard>

                  <HoverCard className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                      <MousePointerClick className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Campanhas de Remarketing</h4>
                    <p className="text-gray-600 mb-4">
                      Anúncios direcionados a usuários que já visitaram seu site, aumentando as chances de conversão.
                    </p>
                    <div className="text-sm text-purple-600 font-medium">
                      Ideal para: Recuperar visitantes e aumentar conversões
                    </div>
                  </HoverCard>
                </StaggerChildren>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <FadeIn direction="up">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4">
                    Nosso Processo
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Como trabalhamos</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Seguimos uma metodologia estruturada para garantir resultados consistentes e de alta qualidade em
                    todos os nossos projetos.
                  </p>
                </FadeIn>
              </div>

              <div className="relative">
                {/* Connecting line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

                <div className="space-y-12 relative">
                  {/* Step 1 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <FadeIn direction="right">
                        <h3 className="text-xl font-bold mb-3">1. Análise e Planejamento</h3>
                        <p className="text-gray-600">
                          Entendemos profundamente seu negócio, objetivos, público-alvo e concorrência para desenvolver
                          uma estratégia personalizada que atenda às suas necessidades específicas.
                        </p>
                      </FadeIn>
                    </div>
                    <div className="md:w-12 flex justify-center my-4 md:my-0 order-1 md:order-2 relative z-10">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-3"></div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 order-2"></div>
                    <div className="md:w-12 flex justify-center my-4 md:my-0 order-1 relative z-10">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                      <FadeIn direction="left">
                        <h3 className="text-xl font-bold mb-3">2. Desenvolvimento e Implementação</h3>
                        <p className="text-gray-600">
                          Criamos e implementamos soluções de alta qualidade, seja um website profissional ou campanhas
                          estratégicas de Google Ads, seguindo as melhores práticas do mercado.
                        </p>
                      </FadeIn>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <FadeIn direction="right">
                        <h3 className="text-xl font-bold mb-3">3. Otimização Contínua</h3>
                        <p className="text-gray-600">
                          Monitoramos constantemente o desempenho, analisamos dados e realizamos ajustes estratégicos
                          para melhorar continuamente os resultados e maximizar o retorno sobre investimento.
                        </p>
                      </FadeIn>
                    </div>
                    <div className="md:w-12 flex justify-center my-4 md:my-0 order-1 md:order-2 relative z-10">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-3"></div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 order-2"></div>
                    <div className="md:w-12 flex justify-center my-4 md:my-0 order-1 relative z-10">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                      <FadeIn direction="left">
                        <h3 className="text-xl font-bold mb-3">4. Relatórios e Transparência</h3>
                        <p className="text-gray-600">
                          Fornecemos relatórios detalhados e transparentes sobre o desempenho e os resultados, mantendo
                          uma comunicação clara e constante durante todo o processo.
                        </p>
                      </FadeIn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar sua presença digital?</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Entre em contato conosco hoje mesmo para uma consulta gratuita e descubra como podemos ajudar seu
                  negócio a alcançar novos patamares no ambiente digital.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                      Solicitar Orçamento Gratuito
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      Ver Nosso Portfólio
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </PageTransition>
  )
}
