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
                  Soluções para Pequenas Empresas
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Marketing digital que cabe no seu orçamento e gera resultados reais
                </h1>
                <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
                  Especializados em ajudar pequenas e médias empresas a crescerem no digital com estratégias eficazes,
                  preços justos e atendimento personalizado.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="#websites">
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 py-6 text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                      Sites Profissionais
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
                  <div className="text-gray-600">Anos ajudando PMEs</div>
                </FadeIn>
                <FadeIn direction="up" delay={0.2} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
                  <div className="text-gray-600">Clientes ativos</div>
                </FadeIn>
                <FadeIn direction="up" delay={0.3} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">R$25Mil+</div>
                  <div className="text-gray-600">Em mídia gerenciada</div>
                </FadeIn>
                <FadeIn direction="up" delay={0.4} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">94%</div>
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
                      Sites Profissionais
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                      Sites que vendem 24 horas por dia para sua empresa
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                      Criamos sites profissionais, rápidos e otimizados que funcionam como um vendedor incansável para
                      seu negócio. Cada site é pensado para converter visitantes em clientes.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-blue-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Design Profissional</h3>
                          <p className="text-gray-600">
                            Visual moderno e profissional que transmite credibilidade e confiança para seus clientes.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-blue-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Foco em Vendas</h3>
                          <p className="text-gray-600">
                            Cada elemento é posicionado estrategicamente para guiar o visitante até a compra ou contato.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-blue-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Aparece no Google</h3>
                          <p className="text-gray-600">
                            Otimização para mecanismos de busca para que seus clientes encontrem você facilmente.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Link href="/services/websites">
                      <Button className="bg-blue-600 hover:bg-blue-700 rounded-md px-6 py-3 text-white">
                        Ver mais sobre sites
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
                            <span className="text-sm font-medium text-gray-800">Responsivo</span>
                          </div>
                        </div>

                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                          <div className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-blue-600" />
                            <span className="text-sm font-medium text-gray-800">Rápido</span>
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
                    <h3 className="text-2xl font-bold mb-4">Tipos de Sites que Criamos</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Soluções sob medida para diferentes tipos de negócios e necessidades.
                    </p>
                  </FadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {[
                    {
                      icon: <Globe className="h-6 w-6 text-white" />,
                      title: "Site Institucional",
                      description:
                        "Apresente sua empresa de forma profissional e conquiste a confiança dos seus clientes.",
                      idealFor: "Empresas de serviços",
                      color: "#3b82f6",
                      features: ["Design profissional", "Páginas otimizadas", "Formulário de contato"],
                      bgImage: "/abstract-network-blue.png",
                    },
                    {
                      icon: <ShoppingCart className="h-6 w-6 text-white" />,
                      title: "Loja Virtual",
                      description: "Venda online 24 horas por dia com uma loja virtual completa e fácil de gerenciar.",
                      idealFor: "Comércio e varejo",
                      color: "#10b981",
                      features: ["Catálogo de produtos", "Pagamento online", "Gestão de pedidos"],
                      bgImage: "/network-visualization.png",
                    },
                    {
                      icon: <Rocket className="h-6 w-6 text-white" />,
                      title: "Landing Page",
                      description:
                        "Páginas focadas em conversão para campanhas específicas ou lançamentos de produtos.",
                      idealFor: "Campanhas e promoções",
                      color: "#f59e0b",
                      features: ["Alta conversão", "Carregamento rápido", "Integração com WhatsApp"],
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
                      Apareça no Google quando seus clientes estão procurando
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                      Gerenciamos suas campanhas no Google Ads para que você apareça exatamente quando seus clientes
                      estão buscando seus produtos ou serviços. Cada real investido é otimizado para gerar o máximo
                      retorno.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-purple-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Público Certo</h3>
                          <p className="text-gray-600">
                            Direcionamos seus anúncios para pessoas que realmente têm interesse no que você oferece.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-purple-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Controle Total do Orçamento</h3>
                          <p className="text-gray-600">
                            Você define quanto quer investir e nós otimizamos cada centavo para gerar o máximo de
                            resultados.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-purple-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Resultados Transparentes</h3>
                          <p className="text-gray-600">
                            Relatórios simples e claros para que você veja exatamente quantos clientes suas campanhas
                            estão trazendo.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Link href="/services/google-ads">
                      <Button className="bg-purple-600 hover:bg-purple-700 rounded-md px-6 py-3 text-white">
                        Saiba mais sobre Google Ads
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
                              <div className="text-sm text-gray-600">Resultados que você pode ver</div>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Mais Clientes</span>
                                <span className="text-sm font-medium text-green-600">+85%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Custo por Cliente</span>
                                <span className="text-sm font-medium text-green-600">-25%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Retorno do Investimento</span>
                                <span className="text-sm font-medium text-green-600">280%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-600">Cliques</div>
                              <div className="text-xl font-bold text-gray-900">2,450</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm text-gray-600">Impressões</div>
                              <div className="text-xl font-bold text-gray-900">45,800</div>
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
                    <h3 className="text-2xl font-bold mb-4">Como Ajudamos Você a Aparecer no Google</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Diferentes estratégias para diferentes objetivos do seu negócio.
                    </p>
                  </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <HoverCard className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                      <Search className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Anúncios de Busca</h4>
                    <p className="text-gray-600 mb-4">
                      Apareça no topo do Google quando alguém busca exatamente o que você oferece.
                    </p>
                    <div className="text-sm text-purple-600 font-medium">
                      Ideal para: Captar clientes prontos para comprar
                    </div>
                  </HoverCard>

                  <HoverCard className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                      <Layers className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Anúncios Visuais</h4>
                    <p className="text-gray-600 mb-4">
                      Mostre sua marca em sites e aplicativos que seus clientes visitam diariamente.
                    </p>
                    <div className="text-sm text-purple-600 font-medium">
                      Ideal para: Aumentar conhecimento da marca
                    </div>
                  </HoverCard>

                  <HoverCard className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                      <MousePointerClick className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Remarketing</h4>
                    <p className="text-gray-600 mb-4">
                      Reconquiste visitantes que já conhecem sua empresa mas ainda não compraram.
                    </p>
                    <div className="text-sm text-purple-600 font-medium">Ideal para: Aumentar vendas e conversões</div>
                  </HoverCard>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <FadeIn direction="up">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4">
                    Como Trabalhamos
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Processo simples e transparente</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Um processo claro e direto para que você saiba exatamente o que esperar em cada etapa.
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
                        <h3 className="text-xl font-bold mb-3">1. Conversa Inicial</h3>
                        <p className="text-gray-600">
                          Conhecemos seu negócio, seus objetivos e desafios. Entendemos o que você precisa para criar a
                          estratégia perfeita.
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
                    <div className="md:w-12 flex justify-center my-4 md:my-0 order-2 relative z-10">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                      <FadeIn direction="left">
                        <h3 className="text-xl font-bold mb-3">2. Criação e Implementação</h3>
                        <p className="text-gray-600">
                          Colocamos a mão na massa! Criamos seu site ou configuramos suas campanhas seguindo as melhores
                          práticas do mercado.
                        </p>
                      </FadeIn>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <FadeIn direction="right">
                        <h3 className="text-xl font-bold mb-3">3. Acompanhamento e Otimização</h3>
                        <p className="text-gray-600">
                          Monitoramos os resultados constantemente e fazemos ajustes para melhorar ainda mais o
                          desempenho.
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
                    <div className="md:w-12 flex justify-center my-4 md:my-0 order-2 relative z-10">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:text-left order-2">
                      <FadeIn direction="left">
                        <h3 className="text-xl font-bold mb-3">4. Relatórios e Comunicação</h3>
                        <p className="text-gray-600">
                          Você recebe relatórios claros sobre os resultados e mantemos comunicação constante sobre o
                          progresso do seu projeto.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para fazer seu negócio crescer?</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Vamos conversar sobre como podemos ajudar sua empresa a ter mais clientes e aumentar as vendas através
                  do marketing digital.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                      Conversar com nossa equipe
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      Ver Nossos Casos de Sucesso
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
