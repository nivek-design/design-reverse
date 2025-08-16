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
                  <Link href="#drone-services">
                    <Button className="bg-orange-600 hover:bg-orange-700 rounded-full px-6 py-6 text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                      Marketing com Drone
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
                  <div className="text-4xl font-bold text-blue-600 mb-2">R$30Mil+</div>
                  <div className="text-gray-600">Em mídia gerenciada</div>
                </FadeIn>
                <FadeIn direction="up" delay={0.4} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projetos com drone realizados</div>
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
                          src="/ecommerce-google.png"
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

                      <video
                        src="https://videos.pexels.com/video-files/3209828/3209828-uhd_4096_2160_25fps.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto"
                        poster="https://images.pexels.com/videos/3209828/pexels-photo-3209828.jpeg"
                      >
                        <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_4096_2160_25fps.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeos HTML5.
                      </video>

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
                            <Image src="/icon-google-ads.png" alt="Google Ads" width={40} height={40} />
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

          {/* Drone Services Section */}
          <section id="drone-services" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/2">
                  <FadeIn direction="right">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                      Inovação em Marketing
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                      Marketing Digital que Eleva sua Marca: Imagens Aéreas que Convertem
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                      Em um mercado visualmente saturado, destacar-se é fundamental. Fotos e vídeos tradicionais não conseguem 
                      mostrar a real dimensão do seu projeto, propriedade ou evento. Nossa solução combina tecnologia de ponta 
                      em drones com expertise em marketing digital para criar conteúdo que gera engajamento instantâneo e 
                      resultados comerciais tangíveis.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-orange-400">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Perspectiva Única</h3>
                          <p className="text-gray-300">
                            Ângulos impossíveis de alcançar com fotografia tradicional, revelando a verdadeira magnitude do seu negócio.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-orange-400">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Conteúdo Viral</h3>
                          <p className="text-gray-300">
                            Imagens aéreas geram 3x mais engajamento nas redes sociais, aumentando o alcance orgânico da sua marca.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-orange-400">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Estratégia Integrada</h3>
                          <p className="text-gray-300">
                            Não apenas capturamos imagens, mas integramos o material a uma estratégia completa de marketing digital.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact?service=drone">
                      <Button className="bg-orange-500 hover:bg-orange-600 rounded-md px-6 py-3 text-white">
                        Solicitar Demonstração
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </FadeIn>
                </div>

                <div className="md:w-1/2 relative">
                  <ScaleIn delay={0.3}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg transform rotate-3 scale-105 opacity-20"></div>
                      <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                        <Image
                          src="/drone-marketing-showcase.png"
                          alt="Marketing com Drone"
                          width={600}
                          height={400}
                          className="w-full h-auto"
                        />

                        {/* Floating elements */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-800">4K Recording</span>
                          </div>
                        </div>

                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                          <div className="flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-orange-600" />
                            <span className="text-sm font-medium text-gray-800">+300% Engajamento</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScaleIn>
                </div>
              </div>

              {/* Detailed Services */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <FadeIn direction="up">
                    <h3 className="text-2xl font-bold mb-4">Nossos Serviços com Drone</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                      Soluções completas que transformam perspectivas aéreas em resultados comerciais tangíveis.
                    </p>
                  </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Fotografia e Filmagem */}
                  <HoverCard className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-center text-white">Fotografia e Filmagem Aérea</h4>
                    <p className="text-gray-300 mb-4 text-center">
                      Captura profissional em alta resolução (4K/5.3K) com equipamentos de última geração e pilotos certificados pela ANAC.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Fotografias em alta resolução para catálogos e websites</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Vídeos cinematográficos para campanhas publicitárias</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Tour virtual 360° aéreo interativo</span>
                      </div>
                    </div>
                  </HoverCard>

                  {/* Produção e Pós-Produção */}
                  <HoverCard className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v-1a2 2 0 114 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-center text-white">Produção e Pós-Produção</h4>
                    <p className="text-gray-300 mb-4 text-center">
                      Transformamos material bruto em peças de marketing profissionais, otimizadas para cada canal e objetivo.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Edição profissional com trilha sonora e color grading</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Vídeos curtos para Reels, TikTok e YouTube Shorts</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Motion graphics e animações personalizadas</span>
                      </div>
                    </div>
                  </HoverCard>

                  {/* Estratégia Digital */}
                  <HoverCard className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <BarChart3 className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-center text-white">Estratégia Digital Integrada</h4>
                    <p className="text-gray-300 mb-4 text-center">
                      Integramos o material aéreo a uma estratégia completa de marketing digital para maximizar resultados.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Planejamento de conteúdo estratégico</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Campanhas de tráfego pago com criativos de alto impacto</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Otimização SEO para vídeos e análise de métricas</span>
                      </div>
                    </div>
                  </HoverCard>
                </div>
              </div>

              {/* Target Industries */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <FadeIn direction="up">
                    <h3 className="text-2xl font-bold mb-4 text-white">Setores que Atendemos</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                      Soluções especializadas para diferentes indústrias, adaptadas às necessidades específicas de cada segmento.
                    </p>
                  </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Imobiliário */}
                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500"></div>
                    <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">Imobiliário e Construção</h4>
                    <p className="text-gray-300 text-sm">
                      Acelere as vendas de imóveis e documente o progresso de obras com uma visão completa e impressionante do empreendimento.
                    </p>
                  </div>

                  {/* Turismo */}
                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-500"></div>
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">Turismo e Hotelaria</h4>
                    <p className="text-gray-300 text-sm">
                      Atraia mais hóspedes exibindo a beleza e infraestrutura completa do seu hotel, resort ou pousada de um ângulo único.
                    </p>
                  </div>

                  {/* Eventos */}
                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                    <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">Eventos e Festivais</h4>
                    <p className="text-gray-300 text-sm">
                      Capture a magnitude do seu evento, criando memórias inesquecíveis e material poderoso para próximas edições.
                    </p>
                  </div>

                  {/* Agronegócio */}
                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">Agronegócio</h4>
                    <p className="text-gray-300 text-sm">
                      Otimize o planejamento e comunicação no campo com mapeamento aéreo e demonstração de tecnologia agrícola.
                    </p>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <FadeIn direction="up">
                    <h3 className="text-2xl font-bold mb-4 text-white">Nosso Processo</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                      Metodologia estruturada que garante segurança, qualidade e resultados excepcionais.
                    </p>
                  </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">Briefing Estratégico</h4>
                    <p className="text-gray-300 text-sm">
                      Entendimento profundo dos seus objetivos de negócio e definição da estratégia de captura.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">Plano de Voo</h4>
                    <p className="text-gray-300 text-sm">
                      Planejamento seguro e criativo das filmagens, executado por pilotos certificados pela ANAC.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">Criação de Conteúdo</h4>
                    <p className="text-gray-300 text-sm">
                      Edição do material bruto, transformando-o em peças de marketing de alto impacto.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">Distribuição e Análise</h4>
                    <p className="text-gray-300 text-sm">
                      Publicação estratégica nos canais digitais e monitoramento detalhado dos resultados.
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Showcase */}
              <div className="mt-20">
                <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-8 border border-orange-500/30">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-white">Resultados Comprovados</h3>
                    <p className="text-gray-300">Impacto real das nossas campanhas com drone</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-400 mb-2">+300%</div>
                      <div className="text-gray-300 text-sm">Engajamento nas redes sociais</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-400 mb-2">+150%</div>
                      <div className="text-gray-300 text-sm">Tempo de permanência no site</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-400 mb-2">+85%</div>
                      <div className="text-gray-300 text-sm">Taxa de conversão em leads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-400 mb-2">+200%</div>
                      <div className="text-gray-300 text-sm">Compartilhamentos orgânicos</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 text-center">
                <FadeIn direction="up">
                  <h3 className="text-2xl font-bold mb-4 text-white">Pronto para levar sua marca a novas alturas?</h3>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Fale com um de nossos especialistas e solicite uma proposta personalizada. Vamos mostrar como 
                    as imagens aéreas podem transformar sua presença online e gerar resultados reais.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="/contact?service=drone">
                      <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-8 py-6 text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                        Solicitar Orçamento para Drone
                      </Button>
                    </Link>
                    <Link href="/portfolio">
                      <Button
                        variant="outline"
                        className="bg-transparent border-orange-400 text-orange-400 hover:bg-orange-500/10 rounded-full px-8 py-6 text-lg transition-all duration-300 hover:translate-y-[-2px]"
                      >
                        Ver Projetos com Drone
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Google Ads Detailed Section */}
          <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <FadeIn direction="up">
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                    Gestão Especializada
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Google Ads que Geram Resultados Reais
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Transformamos cada clique em oportunidade de negócio. Nossa gestão estratégica de campanhas 
                    Google Ads maximiza seu investimento e acelera o crescimento da sua empresa.
                  </p>
                </FadeIn>
              </div>

              {/* Main Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <HoverCard className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Search className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Visibilidade Imediata</h3>
                  <p className="text-gray-600 mb-4">
                    Apareça no topo do Google quando seus clientes estão procurando exatamente o que você oferece.
                  </p>
                  <div className="text-purple-600 font-semibold">
                    ✓ Resultados desde o primeiro dia
                  </div>
                </HoverCard>

                <HoverCard className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">ROI Otimizado</h3>
                  <p className="text-gray-600 mb-4">
                    Cada real investido é monitorado e otimizado para gerar o máximo retorno possível.
                  </p>
                  <div className="text-purple-600 font-semibold">
                    ✓ Média de 280% de ROI
                  </div>
                </HoverCard>

                <HoverCard className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Público Qualificado</h3>
                  <p className="text-gray-600 mb-4">
                    Direcionamos seus anúncios para pessoas que realmente têm interesse no seu produto ou serviço.
                  </p>
                  <div className="text-purple-600 font-semibold">
                    ✓ Segmentação avançada
                  </div>
                </HoverCard>
              </div>

              {/* Detailed Features */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-purple-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">
                      O que está incluído na nossa gestão:
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-2 rounded-full flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Análise e Planejamento Estratégico</h4>
                          <p className="text-gray-600">
                            Estudamos seu mercado, concorrência e público-alvo para criar campanhas certeiras.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-2 rounded-full flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Criação de Anúncios Persuasivos</h4>
                          <p className="text-gray-600">
                            Textos e criativos que chamam atenção e geram cliques qualificados.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-2 rounded-full flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Otimização Contínua</h4>
                          <p className="text-gray-600">
                            Monitoramento diário e ajustes constantes para melhorar resultados.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-2 rounded-full flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Relatórios Transparentes</h4>
                          <p className="text-gray-600">
                            Relatórios claros mostrando exatamente quantos leads e vendas geramos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-white">
                      <h4 className="text-xl font-bold mb-6">Resultados Médios dos Nossos Clientes</h4>
                      
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <span>Aumento em Conversões</span>
                          <span className="text-2xl font-bold">+135%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-3">
                          <div className="bg-white h-3 rounded-full" style={{ width: "85%" }}></div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span>Redução no Custo por Cliente</span>
                          <span className="text-2xl font-bold">-42%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-3">
                          <div className="bg-white h-3 rounded-full" style={{ width: "65%" }}></div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span>Retorno sobre Investimento</span>
                          <span className="text-2xl font-bold">280%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-3">
                          <div className="bg-white h-3 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>

                      <div className="mt-8 p-4 bg-white/10 rounded-lg">
                        <div className="text-center">
                          <div className="text-3xl font-bold">R$ 25mil+</div>
                          <div className="text-sm opacity-90">em investimento gerenciado mensalmente</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campaign Types */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Tipos de Campanhas que Gerenciamos
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Cada tipo de campanha tem seu objetivo específico para maximizar seus resultados.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                    <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-7 w-7 text-blue-600" />
                    </div>
                    <h4 className="font-bold mb-2">Rede de Pesquisa</h4>
                    <p className="text-gray-600 text-sm">Anúncios de texto nos resultados do Google</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                    <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingCart className="h-7 w-7 text-green-600" />
                    </div>
                    <h4 className="font-bold mb-2">Google Shopping</h4>
                    <p className="text-gray-600 text-sm">Produtos com imagem, preço e avaliações</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                    <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Layers className="h-7 w-7 text-orange-600" />
                    </div>
                    <h4 className="font-bold mb-2">Rede Display</h4>
                    <p className="text-gray-600 text-sm">Banners visuais em sites parceiros</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                    <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MousePointerClick className="h-7 w-7 text-purple-600" />
                    </div>
                    <h4 className="font-bold mb-2">Remarketing</h4>
                    <p className="text-gray-600 text-sm">Reconquiste quem já visitou seu site</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Pronto para multiplicar seus resultados com Google Ads?
                  </h3>
                  <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                    Fale conosco e descubra como podemos colocar sua empresa no topo do Google 
                    e gerar mais leads e vendas para seu negócio.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="/services/google-ads">
                      <Button className="bg-white text-purple-600 hover:bg-purple-50 rounded-full px-8 py-6 text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                        Ver Detalhes Completos
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/contact?service=google-ads">
                      <Button
                        variant="outline"
                        className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg transition-all duration-300 hover:translate-y-[-2px]"
                      >
                        Solicitar Análise Gratuita
                      </Button>
                    </Link>
                  </div>
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
