import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { FadeIn } from "@/components/animations/fade-in";
import { HoverCard } from "@/components/animations/hover-card";
import { ScaleIn } from "@/components/animations/scale-in";
import {
  Code,
  BarChart2,
  Camera,
  Users,
  Bot,
  MessageCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Zap,
  Globe,
  Heart,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  CheckCircle2,
  Eye,
  User,
  Calendar,
  Phone,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollVideo } from "@/components/animations/scroll-video";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0f0f2a] text-white">
        <Navbar variant="dark" />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center max-w-5xl mx-auto">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Star className="h-4 w-4" />
                Portfólio de Resultados Extraordinários
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Projetos que Transformaram Negócios
              </h1>
              <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                Conheça os casos de sucesso que mudaram a realidade de nossos
                clientes. Cada projeto é uma história de crescimento, inovação e
                resultados mensuráveis.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    50+
                  </div>
                  <div className="text-blue-200 text-sm">
                    Projetos Entregues
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    280%
                  </div>
                  <div className="text-blue-200 text-sm">ROI Médio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    100%
                  </div>
                  <div className="text-blue-200 text-sm">
                    Clientes Satisfeitos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    3 anos
                  </div>
                  <div className="text-blue-200 text-sm">de Experiência</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Website Development Projects */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium mb-4">
                  <Code className="h-4 w-4" />
                  Desenvolvimento Web
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Sites que <span className="text-blue-400">Vendem 24/7</span>
                </h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  Cada site desenvolvido é uma máquina de vendas otimizada para
                  conversão
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Laura Rossini Advocacia */}
              <FadeIn direction="left" delay={0.2}>
                <HoverCard className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-800/50">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/laura-rossini-site.png"
                      alt="Site Laura Rossini Advocacia"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src="/laura-rossini-adv-logo.JPG"
                        alt="Laura Rossini Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-bold">
                          Laura Rossini Advocacia
                        </h3>
                        <p className="text-blue-300 text-sm">
                          Landing Page Institucional
                        </p>
                      </div>
                    </div>
                    <p className="text-blue-200 mb-6 leading-relaxed">
                      Site institucional moderno e profissional que transmite
                      confiança e autoridade, aumentando a credibilidade da
                      advocacia no mercado digital.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-500/20 p-3 rounded-lg text-center">
                        <div className="text-green-400 font-bold text-lg">
                          +85%
                        </div>
                        <div className="text-green-300 text-sm">
                          Visibilidade Online
                        </div>
                      </div>
                      <div className="bg-blue-500/20 p-3 rounded-lg text-center">
                        <div className="text-blue-400 font-bold text-lg">
                          +60%
                        </div>
                        <div className="text-blue-300 text-sm">
                          Novos Clientes
                        </div>
                      </div>
                    </div>
                    <Link href="/portfolio/laura-rossini-adv">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Ver Case Completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </HoverCard>
              </FadeIn>

              {/* Odontologia Zorzzela */}
              <FadeIn direction="right" delay={0.3}>
                <HoverCard className="bg-gradient-to-br from-green-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-green-800/50">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/odontologia-zorzzela-home.png"
                      alt="Site Odontologia Zorzzela"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src="/odontologia-zorzzela-logo.png"
                        alt="Odontologia Zorzzela Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-bold">
                          Odontologia Zorzzela
                        </h3>
                        <p className="text-green-300 text-sm">
                          Landing Page Médica
                        </p>
                      </div>
                    </div>
                    <p className="text-blue-200 mb-6 leading-relaxed">
                      Landing page otimizada para conversão de agendamentos, com
                      design clean e foco na experiência do paciente, resultando
                      em crescimento excepcional.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-500/20 p-3 rounded-lg text-center">
                        <div className="text-green-400 font-bold text-lg">
                          +150%
                        </div>
                        <div className="text-green-300 text-sm">
                          Agendamentos
                        </div>
                      </div>
                      <div className="bg-purple-500/20 p-3 rounded-lg text-center">
                        <div className="text-purple-400 font-bold text-lg">
                          +85%
                        </div>
                        <div className="text-purple-300 text-sm">Conversão</div>
                      </div>
                    </div>
                    <Link href="/portfolio/odontologia-zorzzela">
                      <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                        Ver Case Completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </HoverCard>
              </FadeIn>

              {/* Londrina EPIs E-commerce */}
              <FadeIn direction="left" delay={0.4}>
                <HoverCard className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-800/50">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/ecommerce-londrinaepis.png"
                      alt="E-commerce Londrina EPIs"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src="/londrina-epis-logo.png"
                        alt="Londrina EPIs Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-bold">Londrina EPIs</h3>
                        <p className="text-orange-300 text-sm">
                          E-commerce Completo
                        </p>
                      </div>
                    </div>
                    <p className="text-blue-200 mb-6 leading-relaxed">
                      Plataforma de e-commerce robusta e otimizada que
                      transformou vendas online, superando as vendas físicas em
                      apenas 2 meses de operação.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-orange-500/20 p-3 rounded-lg text-center">
                        <div className="text-orange-400 font-bold text-lg">
                          +320%
                        </div>
                        <div className="text-orange-300 text-sm">
                          Vendas Online
                        </div>
                      </div>
                      <div className="bg-red-500/20 p-3 rounded-lg text-center">
                        <div className="text-red-400 font-bold text-lg">
                          +180%
                        </div>
                        <div className="text-red-300 text-sm">Faturamento</div>
                      </div>
                    </div>
                    <Link href="/portfolio/londrina-epis">
                      <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                        Ver Case Completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </HoverCard>
              </FadeIn>

              <FadeIn direction="right" delay={0.5}>
                <HoverCard className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-800/50">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/site-speedy-serralheria.png"
                      alt="Landing Page Speedy Serralheria"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <Image
                          src="/logo speedy.png"
                          alt="Speddy Seralheria Logo"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          Speedy Serralheria
                        </h3>
                        <p className="text-purple-300 text-sm">Landingpage</p>
                      </div>
                    </div>
                    <p className="text-blue-200 mb-6 leading-relaxed">
                      Speedy Serralheria & Comunicação Visual Criamos estruturas
                      metálicas e soluções visuais que combinam engenharia de
                      precisão com design inovador.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-purple-500/20 p-3 rounded-lg text-center">
                        <div className="text-purple-400 font-bold text-lg">
                          30%
                        </div>
                        <div className="text-purple-300 text-sm">
                          Serviços fechados
                        </div>
                      </div>
                      <div className="bg-pink-500/20 p-3 rounded-lg text-center">
                        <div className="text-pink-400 font-bold text-lg">
                          +90%
                        </div>
                        <div className="text-pink-300 text-sm">Engajamento</div>
                      </div>
                    </div>
                    <Link href="/portfolio/gaming-portal">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Ver Case Completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </HoverCard>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Google Ads Campaign Results */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-400/30 px-4 py-2 rounded-full text-green-300 text-sm font-medium mb-4">
                  <BarChart2 className="h-4 w-4" />
                  Google Ads Campaigns
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Campanhas que{" "}
                  <span className="text-green-400">Multiplicam Vendas</span>
                </h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  Resultados científicos e mensuráveis que transformam
                  investimento em lucro
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <FadeIn direction="left" delay={0.2}>
                <HoverCard className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm p-8 rounded-2xl border border-green-800/50 text-center">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-xl inline-block mb-6">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Laura Rossini Advocacia
                  </h3>
                  <p className="text-blue-200 mb-6">
                    Campanha focada em captação de clientes para serviços
                    jurídicos especializados
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-green-500/20 p-4 rounded-lg">
                      <div className="text-green-400 font-bold text-2xl">
                        480%
                      </div>
                      <div className="text-green-300">ROI</div>
                    </div>
                    <div className="bg-blue-500/20 p-4 rounded-lg">
                      <div className="text-blue-400 font-bold text-2xl">
                        +180%
                      </div>
                      <div className="text-blue-300">Novos Clientes</div>
                    </div>
                  </div>
                  <Link href="/portfolio/laura-rossini-adv">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600">
                      Ver Resultados
                    </Button>
                  </Link>
                </HoverCard>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <HoverCard className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm p-8 rounded-2xl border border-blue-800/50 text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-xl inline-block mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Odontologia Zorzzela
                  </h3>
                  <p className="text-blue-200 mb-6">
                    Campanha de agendamentos para tratamentos odontológicos
                    especializados
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-blue-500/20 p-4 rounded-lg">
                      <div className="text-blue-400 font-bold text-2xl">
                        320%
                      </div>
                      <div className="text-blue-300">ROI</div>
                    </div>
                    <div className="bg-cyan-500/20 p-4 rounded-lg">
                      <div className="text-cyan-400 font-bold text-2xl">
                        +250%
                      </div>
                      <div className="text-cyan-300">Agendamentos</div>
                    </div>
                  </div>
                  <Link href="/portfolio/odontologia-zorzzela">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600">
                      Ver Resultados
                    </Button>
                  </Link>
                </HoverCard>
              </FadeIn>

              <FadeIn direction="right" delay={0.4}>
                <HoverCard className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 backdrop-blur-sm p-8 rounded-2xl border border-orange-800/50 text-center">
                  <div className="bg-gradient-to-r from-orange-600 to-yellow-600 p-4 rounded-xl inline-block mb-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Londrina EPIs</h3>
                  <p className="text-blue-200 mb-6">
                    Campanha para e-commerce de equipamentos de proteção
                    individual
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-orange-500/20 p-4 rounded-lg">
                      <div className="text-orange-400 font-bold text-2xl">
                        420%
                      </div>
                      <div className="text-orange-300">ROI</div>
                    </div>
                    <div className="bg-yellow-500/20 p-4 rounded-lg">
                      <div className="text-yellow-400 font-bold text-2xl">
                        +300%
                      </div>
                      <div className="text-yellow-300">Vendas Online</div>
                    </div>
                  </div>
                  <Link href="/portfolio/londrina-epis">
                    <Button className="w-full bg-gradient-to-r from-orange-600 to-yellow-600">
                      Ver Resultados
                    </Button>
                  </Link>
                </HoverCard>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Social Media Management Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-400/30 px-4 py-2 rounded-full text-purple-300 text-sm font-medium mb-4">
                  <Users className="h-4 w-4" />
                  Gerenciamento de Mídias Sociais
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Redes Sociais que{" "}
                  <span className="text-purple-400">Convertem</span>
                </h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  Transformamos seguidores em clientes fiéis através de
                  estratégias comprovadas
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left" delay={0.2}>
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm p-6 rounded-2xl border border-purple-800/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl">
                        <Instagram className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          Estratégia Instagram
                        </h3>
                        <p className="text-purple-300">
                          Conteúdo viral e vendas diretas
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-purple-400 font-bold text-lg">
                          +250%
                        </div>
                        <div className="text-purple-300 text-sm">
                          Engajamento
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-pink-400 font-bold text-lg">
                          +180%
                        </div>
                        <div className="text-pink-300 text-sm">Seguidores</div>
                      </div>
                      <div className="text-center">
                        <div className="text-cyan-400 font-bold text-lg">
                          +320%
                        </div>
                        <div className="text-cyan-300 text-sm">Conversões</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-800/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl">
                        <Facebook className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Facebook Ads</h3>
                        <p className="text-blue-300">
                          Campanhas de alta conversão
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-blue-400 font-bold text-lg">
                          450%
                        </div>
                        <div className="text-blue-300 text-sm">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-cyan-400 font-bold text-lg">
                          +200%
                        </div>
                        <div className="text-cyan-300 text-sm">Leads</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 font-bold text-lg">
                          +150%
                        </div>
                        <div className="text-green-300 text-sm">Vendas</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm p-6 rounded-2xl border border-red-800/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-r from-red-600 to-orange-600 p-3 rounded-xl">
                        <Youtube className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">YouTube Marketing</h3>
                        <p className="text-red-300">
                          Vídeos que geram autoridade
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-red-400 font-bold text-lg">
                          1M+
                        </div>
                        <div className="text-red-300 text-sm">
                          Visualizações
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-orange-400 font-bold text-lg">
                          +300%
                        </div>
                        <div className="text-orange-300 text-sm">Inscritos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-yellow-400 font-bold text-lg">
                          +180%
                        </div>
                        <div className="text-yellow-300 text-sm">
                          Autoridade
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.3}>
                <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-sm p-8 rounded-3xl border border-purple-800/50">
                  <h3 className="text-3xl font-bold mb-6 text-center">
                    Resultados dos Nossos Clientes
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-blue-200 mb-3">
                        "Nossa presença nas redes sociais aumentou
                        drasticamente. Agora temos uma comunidade engajada que
                        realmente converte em vendas!"
                      </p>
                      <div className="font-semibold">Maria Silva</div>
                      <div className="text-sm text-purple-300">
                        CEO, Boutique Elegance
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-blue-200 mb-3">
                        "O engajamento das nossas redes sociais triplicou em 3
                        meses. Os resultados são impressionantes!"
                      </p>
                      <div className="font-semibold">João Santos</div>
                      <div className="text-sm text-purple-300">
                        Diretor, Fitness Center Pro
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                        <div className="text-purple-400 font-bold text-2xl">
                          25+
                        </div>
                        <div className="text-purple-300 text-sm">
                          Contas Gerenciadas
                        </div>
                      </div>
                      <div className="bg-pink-500/20 p-4 rounded-lg text-center">
                        <div className="text-pink-400 font-bold text-2xl">
                          5M+
                        </div>
                        <div className="text-pink-300 text-sm">
                          Impressões/Mês
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="text-center mt-12">
              <FadeIn direction="up" delay={0.5}>
                <Link href="/services/social-media">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-8 py-6 text-lg font-semibold">
                    Ver Nossos Serviços de Mídias Sociais
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* AI Automation Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-400/30 px-4 py-2 rounded-full text-emerald-300 text-sm font-medium mb-4">
                  <Bot className="h-4 w-4" />
                  Automação com Inteligência Artificial
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  IA que{" "}
                  <span className="text-emerald-400">Vende por Você</span>
                </h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  Chatbots inteligentes e automações que trabalham 24/7 para seu
                  negócio
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* ChatBot IA */}
              <FadeIn direction="left" delay={0.2}>
                <HoverCard className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-sm p-8 rounded-2xl border border-emerald-800/50">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-4 rounded-xl inline-block mb-6">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      ChatBot Inteligente
                    </h3>
                    <p className="text-blue-200 mb-6">
                      Atendimento automatizado que qualifica leads e agenda
                      consultas 24/7
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="bg-emerald-500/20 p-4 rounded-lg">
                        <div className="text-emerald-400 font-bold text-xl">
                          98%
                        </div>
                        <div className="text-emerald-300 text-sm">
                          Taxa de Resposta
                        </div>
                      </div>
                      <div className="bg-green-500/20 p-4 rounded-lg">
                        <div className="text-green-400 font-bold text-xl">
                          +180%
                        </div>
                        <div className="text-green-300 text-sm">
                          Leads Qualificados
                        </div>
                      </div>
                      <div className="bg-cyan-500/20 p-4 rounded-lg">
                        <div className="text-cyan-400 font-bold text-xl">
                          24/7
                        </div>
                        <div className="text-cyan-300 text-sm">
                          Disponibilidade
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6">
                      <h4 className="font-semibold mb-2">Funcionalidades:</h4>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          Qualificação automática de leads
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          Agendamento de consultas
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          Respostas personalizadas
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          Integração com CRM
                        </li>
                      </ul>
                    </div>
                  </div>
                </HoverCard>
              </FadeIn>

              {/* Automação de Email Marketing */}
              <FadeIn direction="up" delay={0.3}>
                <HoverCard className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm p-8 rounded-2xl border border-blue-800/50">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl inline-block mb-6">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Email Marketing IA
                    </h3>
                    <p className="text-blue-200 mb-6">
                      Sequências inteligentes que nutrem leads e convertem
                      automaticamente
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="bg-blue-500/20 p-4 rounded-lg">
                        <div className="text-blue-400 font-bold text-xl">
                          45%
                        </div>
                        <div className="text-blue-300 text-sm">
                          Taxa de Abertura
                        </div>
                      </div>
                      <div className="bg-purple-500/20 p-4 rounded-lg">
                        <div className="text-purple-400 font-bold text-xl">
                          +250%
                        </div>
                        <div className="text-purple-300 text-sm">
                          Conversões
                        </div>
                      </div>
                      <div className="bg-cyan-500/20 p-4 rounded-lg">
                        <div className="text-cyan-400 font-bold text-xl">
                          Auto
                        </div>
                        <div className="text-cyan-300 text-sm">Segmentação</div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6">
                      <h4 className="font-semibold mb-2">Recursos:</h4>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          Segmentação inteligente
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          A/B Testing automático
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          Personalização dinâmica
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          Relatórios avançados
                        </li>
                      </ul>
                    </div>
                  </div>
                </HoverCard>
              </FadeIn>

              {/* CRM Automatizado */}
              <FadeIn direction="right" delay={0.4}>
                <HoverCard className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 backdrop-blur-sm p-8 rounded-2xl border border-orange-800/50">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-orange-600 to-yellow-600 p-4 rounded-xl inline-block mb-6">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">CRM Inteligente</h3>
                    <p className="text-blue-200 mb-6">
                      Sistema que gerencia leads, vendas e relacionamento
                      automaticamente
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="bg-orange-500/20 p-4 rounded-lg">
                        <div className="text-orange-400 font-bold text-xl">
                          +300%
                        </div>
                        <div className="text-orange-300 text-sm">
                          Produtividade
                        </div>
                      </div>
                      <div className="bg-yellow-500/20 p-4 rounded-lg">
                        <div className="text-yellow-400 font-bold text-xl">
                          95%
                        </div>
                        <div className="text-yellow-300 text-sm">
                          Leads Capturados
                        </div>
                      </div>
                      <div className="bg-red-500/20 p-4 rounded-lg">
                        <div className="text-red-400 font-bold text-xl">
                          Zero
                        </div>
                        <div className="text-red-300 text-sm">
                          Leads Perdidos
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6">
                      <h4 className="font-semibold mb-2">Benefícios:</h4>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          Funil de vendas automático
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          Follow-up inteligente
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          Scoring de leads
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          Dashboard em tempo real
                        </li>
                      </ul>
                    </div>
                  </div>
                </HoverCard>
              </FadeIn>
            </div>

            {/* Success Story */}
            <div className="mt-16">
              <FadeIn direction="up" delay={0.5}>
                <div className="bg-gradient-to-br from-emerald-900/60 to-cyan-900/60 backdrop-blur-sm p-8 rounded-3xl border border-emerald-800/50 max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4">
                      Case de Sucesso: Automação Completa
                    </h3>
                    <p className="text-xl text-emerald-200">
                      Como a automação IA transformou o atendimento de uma
                      empresa em Londrina
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="space-y-4">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Eye className="h-4 w-4 text-emerald-400" />
                            Problema Identificado
                          </h4>
                          <p className="text-sm text-blue-200">
                            Empresa perdia 60% dos leads por falta de
                            atendimento imediato
                          </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Zap className="h-4 w-4 text-yellow-400" />
                            Solução Implementada
                          </h4>
                          <p className="text-sm text-blue-200">
                            ChatBot IA + CRM automatizado + Email Marketing
                            inteligente
                          </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-green-400" />
                            Resultados Obtidos
                          </h4>
                          <ul className="text-sm text-blue-200 space-y-1">
                            <li>• 95% dos leads capturados e qualificados</li>
                            <li>• +280% no faturamento em 4 meses</li>
                            <li>• Redução de 70% no tempo de resposta</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-6 rounded-2xl border border-emerald-500/30">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <div className="text-emerald-400 font-bold text-3xl">
                              280%
                            </div>
                            <div className="text-emerald-300 text-sm">
                              Aumento de Vendas
                            </div>
                          </div>
                          <div>
                            <div className="text-cyan-400 font-bold text-3xl">
                              95%
                            </div>
                            <div className="text-cyan-300 text-sm">
                              Leads Capturados
                            </div>
                          </div>
                          <div>
                            <div className="text-green-400 font-bold text-3xl">
                              24/7
                            </div>
                            <div className="text-green-300 text-sm">
                              Atendimento
                            </div>
                          </div>
                          <div>
                            <div className="text-blue-400 font-bold text-3xl">
                              70%
                            </div>
                            <div className="text-blue-300 text-sm">
                              Economia de Tempo
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <div className="flex items-center gap-1 mb-3 justify-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                          <p className="text-sm text-blue-200 italic">
                            "A automação mudou completamente nosso negócio.
                            Agora vendemos até dormindo!"
                          </p>
                          <div className="text-sm font-semibold mt-2">
                            Carlos Mendes, CEO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="text-center mt-12">
              <FadeIn direction="up" delay={0.6}>
                <Link href="/services/ai-automation">
                  <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 rounded-full px-8 py-6 text-lg font-semibold">
                    Descobrir Automação com IA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Drone Marketing Section */}
        <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-400/30 px-4 py-2 rounded-full text-orange-300 text-sm font-medium mb-4">
                  <Camera className="h-4 w-4" />
                  Drone Marketing
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Imagens que{" "}
                  <span className="text-orange-400">Param o Scroll</span>
                </h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  Conteúdo visual cinematográfico que eleva sua marca ao próximo
                  nível
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left" delay={0.2}>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">
                    Portfólio de Vídeos Profissionais
                  </h3>
                  <p className="text-xl text-blue-200 leading-relaxed">
                    Nossa coleção de vídeos aéreos cinematográficos que
                    transformam a percepção da sua marca e geram impacto visual
                    incomparável.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-orange-500/20 p-4 rounded-lg text-center">
                      <div className="text-orange-400 font-bold text-2xl">
                        10+
                      </div>
                      <div className="text-orange-300 text-sm">
                        Vídeos Produzidos
                      </div>
                    </div>
                    <div className="bg-red-500/20 p-4 rounded-lg text-center">
                      <div className="text-red-400 font-bold text-2xl">4K</div>
                      <div className="text-red-300 text-sm">
                        Ultra HD Quality
                      </div>
                    </div>
                    <div className="bg-yellow-500/20 p-4 rounded-lg text-center">
                      <div className="text-yellow-400 font-bold text-2xl">
                        +300%
                      </div>
                      <div className="text-yellow-300 text-sm">Engajamento</div>
                    </div>
                    <div className="bg-pink-500/20 p-4 rounded-lg text-center">
                      <div className="text-pink-400 font-bold text-2xl">
                        Cinema
                      </div>
                      <div className="text-pink-300 text-sm">Quality Level</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">
                      Tipos de Conteúdo:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                        <span>Vídeos Institucionais Aéreos</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                        <span>Cobertura de Eventos Corporativos</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                        <span>Showcase de Produtos e Serviços</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                        <span>Conteúdo para Redes Sociais</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                        <span>Documentários Corporativos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.3}>
                <div className="grid grid-cols-2 gap-4">
                  <ScaleIn delay={0.1}>
                    <div className="bg-gradient-to-br from-orange-900/60 to-red-900/60 backdrop-blur-sm rounded-xl border border-orange-800/50 aspect-square overflow-hidden relative">
                      <ScrollVideo
                        src="/Roteiro_de_Vídeo_Institucional_Cinematográfico-2.mp4"
                        className=" h-full object-cover "
                        muted={true}
                        loop={true}
                        controls={false}
                        threshold={1}
                      />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="bg-black/70 backdrop-blur-sm p-2 rounded-lg">
                          <div className="text-orange-400 font-bold text-sm">
                            Vídeo Institucional
                          </div>
                          <div className="text-orange-300 text-xs">
                            Cinematográfico
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScaleIn>

                  <ScaleIn delay={0.2}>
                    <div className="bg-gradient-to-br from-orange-900/60 to-red-900/60 backdrop-blur-sm rounded-xl border border-orange-800/50 aspect-square overflow-hidden relative">
                      <ScrollVideo
                        src="/Roteiro_de_Vídeo_Institucional_Cinematográfico-2.mp4"
                        className="w-full h-full object-contain "
                        muted={true}
                        loop={true}
                        controls={false}
                        threshold={0.5}
                      />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="bg-black/70 backdrop-blur-sm p-2 rounded-lg">
                          <div className="text-orange-400 font-bold text-sm">
                            Vídeo de Casamento
                          </div>
                          <div className="text-orange-300 text-xs">Evento</div>
                        </div>
                      </div>
                    </div>
                  </ScaleIn>

                  <ScaleIn delay={0.3}>
                    <div className="bg-gradient-to-br from-orange-900/60 to-red-900/60 backdrop-blur-sm rounded-xl border border-orange-800/50 aspect-square overflow-hidden relative">
                      <ScrollVideo
                        src="/Roteiro_de_Vídeo_Institucional_Cinematográfico-2.mp4"
                        className="w-full h-full object-contain "
                        muted={true}
                        loop={true}
                        controls={false}
                        threshold={0.5}
                      />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="bg-black/70 backdrop-blur-sm p-2 rounded-lg">
                          <div className="text-orange-400 font-bold text-sm">
                            Vídeo para Mídia Sociais
                          </div>
                          <div className="text-orange-300 text-xs">
                            Feed Instagram, TikTok, Facebook, etc.
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScaleIn>

                  <ScaleIn delay={0.4}>
                    <div className="bg-gradient-to-br from-orange-900/60 to-red-900/60 backdrop-blur-sm rounded-xl border border-orange-800/50 aspect-square overflow-hidden relative">
                      <ScrollVideo
                        src="/Roteiro_de_Vídeo_Institucional_Cinematográfico-2.mp4"
                        className="w-full h-full object-contain "
                        muted={true}
                        loop={true}
                        controls={false}
                        threshold={0.5}
                      />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="bg-black/70 backdrop-blur-sm p-2 rounded-lg">
                          <div className="text-orange-400 font-bold text-sm">
                            Vídeo Empresarial
                          </div>
                          <div className="text-orange-300 text-xs">
                            Empresas e Negócios de todos tamanhos
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScaleIn>
                </div>

                <div className="mt-8 bg-gradient-to-br from-orange-900/60 to-red-900/60 backdrop-blur-sm p-6 rounded-2xl border border-orange-800/50">
                  <h4 className="text-xl font-bold mb-4 text-center">
                    Equipamentos Profissionais
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>DJI 4 mini pro</span>
                      <span className="text-orange-400">4K/60fps</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gimbal Estabilizado</span>
                      <span className="text-orange-400">DJI 4 mini pro</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Edição Profissional</span>
                      <span className="text-orange-400">Cinema Grade</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trilha Sonora</span>
                      <span className="text-orange-400">Customizada</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="text-center mt-12">
              <FadeIn direction="up" delay={0.5}>
                <Link href="/services/drone-marketing">
                  <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 rounded-full px-8 py-6 text-lg font-semibold">
                    Ver Portfólio Completo de Drone
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto para Ter Resultados como Estes?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Cada projeto em nosso portfólio representa uma história de
                sucesso real. Sua empresa pode ser a próxima a alcançar
                resultados extraordinários.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-blue-900 hover:bg-blue-50 text-xl px-12 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] font-bold">
                    Quero Meu Projeto Agora
                    <Rocket className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 text-xl px-12 py-6 rounded-full font-semibold"
                  >
                    Ver Nossos Serviços
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
