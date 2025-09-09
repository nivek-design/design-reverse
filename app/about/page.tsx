import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { FadeIn } from "@/components/animations/fade-in";
import { ScaleIn } from "@/components/animations/scale-in";
import { TextReveal } from "@/components/animations/text-reveal";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import {
  Award,
  Users,
  Target,
  Lightbulb,
  Heart,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Star,
  Globe,
  Zap,
  Shield,
  Rocket,
  Crown,
  Trophy,
  Brain,
  Eye,
  Sparkles,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a29] via-[#1a1a4a] to-[#2a1a5a] text-white">
        <Navbar variant="light" />

        {/* Hero Section - Redesigned */}
        <section className="relative container mx-auto px-4 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl"></div>
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 px-6 py-3 rounded-full text-blue-300 text-sm font-medium">
                  <Crown className="h-5 w-5" />
                  Excelência em Marketing Digital desde 2023
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
                <TextReveal text="Transformamos" />
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  <TextReveal text="Negócios em Lendas" delay={0.5} />
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                Não somos apenas uma agência de marketing digital. Somos
                arquitetos do sucesso, especialistas em transformar empresas
                comuns em líderes extraordinários de mercado.
              </p>
            </FadeIn>

            {/* Premium Stats */}
            <FadeIn direction="up" delay={0.8}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-black/20 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-12">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                    <AnimatedCounter from={0} to={280} />%
                  </div>
                  <div className="text-blue-200 text-sm">
                    ROI Médio Garantido
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                    <AnimatedCounter from={0} to={50} />+
                  </div>
                  <div className="text-blue-200 text-sm">
                    Empresas Dominando
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                    <AnimatedCounter from={0} to={24} />
                    /7
                  </div>
                  <div className="text-blue-200 text-sm">Suporte Premium</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    <AnimatedCounter from={0} to={98} />%
                  </div>
                  <div className="text-blue-200 text-sm">Taxa de Sucesso</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-full px-10 py-6 text-xl font-bold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl">
                    <Trophy className="mr-2 h-6 w-6" />
                    Quero Ser uma Lenda
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-6 text-xl font-semibold backdrop-blur-sm"
                  >
                    <Eye className="mr-2 h-6 w-6" />
                    Ver Transformações
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Our Exclusive Method Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 px-4 py-2 rounded-full text-purple-300 text-sm font-medium mb-4">
                  <Brain className="h-4 w-4" />
                  Metodologia Proprietária
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  O Método <span className="text-purple-400">REVERSE</span> que
                  Quebra Paradigmas
                </h2>
                <p className="text-xl text-blue-200 max-w-4xl mx-auto">
                  Enquanto outros seguem fórmulas prontas, nós desconstruímos o
                  comum e projetamos estratégias únicas que garantem dominância
                  total de mercado.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left" delay={0.2}>
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm p-6 rounded-xl border border-blue-800/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-blue-600 p-3 rounded-lg">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">
                        1. Diagnóstico Cirúrgico
                      </h3>
                    </div>
                    <p className="text-blue-200">
                      Análise profunda que identifica exatamente onde seus
                      concorrentes estão falhando e como explorar essas lacunas
                      para sua vantagem competitiva.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 backdrop-blur-sm p-6 rounded-xl border border-green-800/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-green-600 p-3 rounded-lg">
                        <Rocket className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">
                        2. Estratégia Disruptiva
                      </h3>
                    </div>
                    <p className="text-blue-200">
                      Criamos abordagens inovadoras que posicionam sua empresa
                      como única no mercado, eliminando a competição por preço.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm p-6 rounded-xl border border-purple-800/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-purple-600 p-3 rounded-lg">
                        <Crown className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">
                        3. Execução de Elite
                      </h3>
                    </div>
                    <p className="text-blue-200">
                      Implementação precisa com monitoramento 24/7, ajustes em
                      tempo real e otimização contínua para máxima performance.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.4}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 blur-2xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                      Resultados Comprovados
                    </h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-200">
                          Aumento Médio em Vendas
                        </span>
                        <span className="text-3xl font-bold text-green-400">
                          +280%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-200">Redução em CAC</span>
                        <span className="text-3xl font-bold text-blue-400">
                          -65%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-200">Aumento em LTV</span>
                        <span className="text-3xl font-bold text-purple-400">
                          +450%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-200">Tempo para ROI</span>
                        <span className="text-3xl font-bold text-yellow-400">
                          15 dias
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Team Excellence Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-400/30 px-4 py-2 rounded-full text-yellow-300 text-sm font-medium mb-4">
                  <Sparkles className="h-4 w-4" />
                  Elite de Especialistas
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Conheça os <span className="text-yellow-400">Mestres</span>{" "}
                  por Trás dos Resultados
                </h2>
                <p className="text-xl text-blue-200 max-w-4xl mx-auto">
                  Uma equipe altamente especializada que não apenas executa, mas
                  inova e supera expectativas em cada projeto.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Kevin - CEO */}
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl border border-blue-800/50 overflow-hidden group hover:border-blue-400/80 transition-all duration-300">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="/kevin-perfil.png"
                      alt="Kevin Araujo - CEO"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform object-[55%_15%] duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <Crown className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Kevin Araujo</h3>
                          <p className="text-blue-300">CEO & Visionário</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-blue-200 mb-4">
                      Arquiteto de estratégias disruptivas que transformaram
                      mais de 50 empresas em líderes de mercado. Especialista em
                      quebrar paradigmas e criar vantagens competitivas.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-600/20 px-3 py-1 rounded-full text-xs text-blue-300">
                        Estratégia
                      </span>
                      <span className="bg-purple-600/20 px-3 py-1 rounded-full text-xs text-purple-300">
                        Inovação
                      </span>
                      <span className="bg-cyan-600/20 px-3 py-1 rounded-full text-xs text-cyan-300">
                        Liderança
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://www.linkedin.com/in/nivekdesign"
                        className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 hover:bg-blue-600/40 transition-colors"
                        target="_blank"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Lucas Junior */}
              <FadeIn direction="up" delay={0.3}>
                <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl border border-green-800/50 overflow-hidden group hover:border-green-400/80 transition-all duration-300">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="/team-member-2.png"
                      alt="Lucas Junior"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Lucas Junior</h3>
                          <p className="text-green-300">Mestre em Google Ads</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-blue-200 mb-4">
                      Especialista em campanhas que convertem cada clique em
                      resultado real. Responsável por gerar mais de R$ 10M em
                      vendas através de mídia paga.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-green-600/20 px-3 py-1 rounded-full text-xs text-green-300">
                        Google Ads
                      </span>
                      <span className="bg-blue-600/20 px-3 py-1 rounded-full text-xs text-blue-300">
                        Conversão
                      </span>
                      <span className="bg-yellow-600/20 px-3 py-1 rounded-full text-xs text-yellow-300">
                        ROI
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Laura Rossini */}
              <FadeIn direction="right" delay={0.4}>
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl border border-purple-800/50 overflow-hidden group hover:border-purple-400/80 transition-all duration-300">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="/woman-hat.png"
                      alt="Laura Rossini"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                          <Shield className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Laura Rossini</h3>
                          <p className="text-purple-300">Consultora Jurídica</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-blue-200 mb-4">
                      Garante total conformidade legal em todos os projetos.
                      Especialista em LGPD, contratos digitais e proteção de
                      dados.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-purple-600/20 px-3 py-1 rounded-full text-xs text-purple-300">
                        LGPD
                      </span>
                      <span className="bg-pink-600/20 px-3 py-1 rounded-full text-xs text-pink-300">
                        Compliance
                      </span>
                      <span className="bg-blue-600/20 px-3 py-1 rounded-full text-xs text-blue-300">
                        Jurídico
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why We're Different Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-400/30 px-4 py-2 rounded-full text-red-300 text-sm font-medium mb-4">
                  <Zap className="h-4 w-4" />
                  Diferenciais Únicos
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Por que Somos <span className="text-red-400">Imbatíveis</span>
                </h2>
                <p className="text-xl text-blue-200 max-w-4xl mx-auto">
                  Não compare nossa excelência com agências convencionais. Somos
                  uma categoria à parte.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 backdrop-blur-sm p-8 rounded-2xl border border-yellow-800/50 text-center">
                  <div className="bg-yellow-600 p-4 rounded-full inline-block mb-6">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Garantia de Resultados
                  </h3>
                  <p className="text-blue-200 mb-4">
                    Único no mercado: Se não atingirmos as metas acordadas em 90
                    dias, devolvemos 100% do investimento.
                  </p>
                  <div className="text-yellow-400 font-bold">
                    ROI Garantido ou Dinheiro de Volta
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm p-8 rounded-2xl border border-blue-800/50 text-center">
                  <div className="bg-blue-600 p-4 rounded-full inline-block mb-6">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">IA Proprietária</h3>
                  <p className="text-blue-200 mb-4">
                    Desenvolvemos nossa própria inteligência artificial para
                    otimização contínua e previsão de tendências.
                  </p>
                  <div className="text-blue-400 font-bold">
                    Tecnologia Exclusiva
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.4}>
                <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm p-8 rounded-2xl border border-green-800/50 text-center">
                  <div className="bg-green-600 p-4 rounded-full inline-block mb-6">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Velocidade Supersônica
                  </h3>
                  <p className="text-blue-200 mb-4">
                    Implementação completa em 72h. Primeiros resultados visíveis
                    em menos de 15 dias.
                  </p>
                  <div className="text-green-400 font-bold">
                    Resultados Imediatos
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.5}>
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm p-8 rounded-2xl border border-purple-800/50 text-center">
                  <div className="bg-purple-600 p-4 rounded-full inline-block mb-6">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Acesso VIP</h3>
                  <p className="text-blue-200 mb-4">
                    Linha direta com CEO, relatórios em tempo real e acesso a
                    estratégias confidenciais de mercado.
                  </p>
                  <div className="text-purple-400 font-bold">
                    Tratamento de Elite
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.6}>
                <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm p-8 rounded-2xl border border-red-800/50 text-center">
                  <div className="bg-red-600 p-4 rounded-full inline-block mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Proteção Total</h3>
                  <p className="text-blue-200 mb-4">
                    Seguro de investimento, backup de todas as campanhas e
                    proteção contra ataques de concorrentes.
                  </p>
                  <div className="text-red-400 font-bold">
                    Investimento Protegido
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.7}>
                <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm p-8 rounded-2xl border border-cyan-800/50 text-center">
                  <div className="bg-cyan-600 p-4 rounded-full inline-block mb-6">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Domínio Global</h3>
                  <p className="text-blue-200 mb-4">
                    Estratégias que funcionam localmente e globalmente.
                    Preparamos sua empresa para expansão internacional.
                  </p>
                  <div className="text-cyan-400 font-bold">Visão Mundial</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-400/30 px-4 py-2 rounded-full text-green-300 text-sm font-medium mb-4">
                  <Star className="h-4 w-4" />
                  Casos de Sucesso
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Transformações{" "}
                  <span className="text-green-400">Legendárias</span>
                </h2>
                <p className="text-xl text-blue-200 max-w-4xl mx-auto">
                  Cada cliente é uma história de superação, crescimento e
                  dominância total de mercado.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    +180%
                  </div>
                  <p className="text-blue-200 mb-4">
                    "Nosso faturamento explodiu em apenas 3 meses. O ROI foi
                    imediato e agora somos referência no mercado jurídico."
                  </p>
                  <div className="font-semibold text-white">Laura Rossini</div>
                  <div className="text-sm text-blue-300">
                    CEO, Laura Rossini Advocacia
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 backdrop-blur-sm p-8 rounded-xl border border-green-800/50">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    +450%
                  </div>
                  <p className="text-blue-200 mb-4">
                    "Transformaram nossa clínica. Agenda lotada por 6 meses e
                    lista de espera. Resultado que nunca imaginamos possível."
                  </p>
                  <div className="font-semibold text-white">
                    Gustavo Zorzzela
                  </div>
                  <div className="text-sm text-blue-300">
                    CEO, Odontologia Zorzzela
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.4}>
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    +320%
                  </div>
                  <p className="text-blue-200 mb-4">
                    "E-commerce que superou loja física em apenas 2 meses.
                    Vendas online agora representam 80% do faturamento."
                  </p>
                  <div className="font-semibold text-white">Ademir Santos</div>
                  <div className="text-sm text-blue-300">
                    CEO, Londrina EPI's
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
