import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import {
  ArrowRight,
  Code,
  BarChart2,
  Users,
  CheckCircle2,
  Star,
  Zap,
  Rocket,
  TrendingUp,
  Eye,
  Target,
  Globe,
  MessageCircle,
  Bot,
  Camera,
  Play,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/animations/fade-in";
import { HoverCard } from "@/components/animations/hover-card";
import { TextReveal } from "@/components/animations/text-reveal";
import { AnimatedBackground } from "@/components/animations/animated-background";
import { DiferenciaisSection } from "@/components/sections/diferenciais-section";
import { ProjetosSection } from "@/components/sections/projetos-section";
import { StructuredData } from "@/components/seo/structured-data";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a4a] via-[#0a0a29] to-[#1a0040] text-white">
      <AnimatedBackground />
      <Navbar variant="dark" />

      {/* Hero Section - Redesigned */}
      <section className="relative container mx-auto px-4 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <FadeIn direction="up" delay={0.1}>
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium">
                <Zap className="h-4 w-4" />
                Transforme seu Negócio Digital Hoje
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              <TextReveal text="Desconstruindo o comum, projetando o extraordinário." />
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                <TextReveal text="o Extraordinário" delay={0.5} />
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Marketing digital que quebra padrões. Criamos estratégias focadas
              em conversão, visibilidade e crescimento extraordinário que seus
              concorrentes não conseguem igualar.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-10 py-6 text-xl font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl shadow-blue-500/25">
                  Quero Crescer Agora
                  <Rocket className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-600/10 rounded-full px-10 py-6 text-xl font-semibold"
                >
                  <Play className="mr-2 h-6 w-6" />
                  Ver Cases de Sucesso
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Stats Section */}
          <FadeIn direction="up" delay={1.0}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter from={0} to={150} />%
                </div>
                <div className="text-blue-200">Aumento Médio em Vendas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                  <AnimatedCounter from={0} to={50} />+
                </div>
                <div className="text-blue-200">Empresas Transformadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  <AnimatedCounter from={0} to={24} />
                  /7
                </div>
                <div className="text-blue-200">Suporte Especializado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  <AnimatedCounter from={0} to={280} />%
                </div>
                <div className="text-blue-200">ROI Médio</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Seu Negócio Está{" "}
                <span className="text-red-400">Perdendo Dinheiro</span> Todos os
                Dias
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto">
                Enquanto você não investe em marketing digital estratégico, seus
                concorrentes estão conquistando seus clientes
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-red-900/20 border border-red-500/30 p-8 rounded-xl text-center">
                <div className="text-red-400 text-6xl font-bold mb-4">73%</div>
                <p className="text-red-200">
                  das empresas perdem clientes por não ter presença digital
                  forte
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-orange-900/20 border border-orange-500/30 p-8 rounded-xl text-center">
                <div className="text-orange-400 text-6xl font-bold mb-4">
                  R$ 50k
                </div>
                <p className="text-orange-200">
                  é o valor médio perdido por ano sem estratégia digital
                  adequada
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.6}>
              <div className="bg-yellow-900/20 border border-yellow-500/30 p-8 rounded-xl text-center">
                <div className="text-yellow-400 text-6xl font-bold mb-4">
                  3 seg
                </div>
                <p className="text-yellow-200">
                  é o tempo que você tem para impressionar um cliente online
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="text-center">
            <FadeIn direction="up" delay={0.8}>
              <h3 className="text-3xl font-bold mb-6 text-green-400">
                Mas há uma solução...
              </h3>
              <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
                Com nossa metodologia proprietária, transformamos sua presença
                digital em uma máquina de vendas que trabalha 24/7 para você
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-full px-8 py-4 text-lg font-semibold">
                  Quero a Solução Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section - Redesigned */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nossos{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Serviços Exclusivos
                </span>
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Cada serviço é uma arma poderosa para dominar seu mercado e
                deixar a concorrência para trás
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Website Development */}
            <FadeIn direction="left" delay={0.2}>
              <HoverCard className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm p-8 rounded-2xl border border-blue-800/50 hover:border-blue-500/80 transition-all h-full group">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">
                      Websites que Vendem 24/7
                    </h3>
                    <p className="text-blue-200 mb-4 leading-relaxed">
                      Sites que não apenas impressionam, mas convertem
                      visitantes em clientes pagantes. Design estratégico +
                      otimização para conversão = Mais vendas automáticas.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span>Landing Pages de Alta Conversão</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span>E-commerce Otimizado para Vendas</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span>SEO que Domina o Google</span>
                      </li>
                    </ul>
                    <Link
                      href="/services/websites"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group"
                    >
                      Descobrir Como Vender Mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>

            {/* Google Ads */}
            <FadeIn direction="right" delay={0.3}>
              <HoverCard className="bg-gradient-to-br from-green-900/40 to-blue-900/40 backdrop-blur-sm p-8 rounded-2xl border border-green-800/50 hover:border-green-500/80 transition-all h-full group">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                    <BarChart2 className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">
                      Google Ads que Multiplicam Vendas
                    </h3>
                    <p className="text-blue-200 mb-4 leading-relaxed">
                      Campanhas científicas que garantem mais clientes com menor
                      investimento. Cada clique é calculado para gerar resultado
                      real no seu faturamento.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span>ROI Garantido de 300%+</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span>Otimização Diária por IA</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span>Relatórios Transparentes</span>
                      </li>
                    </ul>
                    <Link
                      href="/services/google-ads"
                      className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group"
                    >
                      Multiplicar Vendas Agora
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Drone Marketing */}
            <FadeIn direction="left" delay={0.4}>
              <HoverCard className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm p-8 rounded-2xl border border-orange-800/50 hover:border-orange-500/80 transition-all h-full group">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Marketing Aéreo Cinematográfico
                  </h3>
                  <p className="text-blue-200 mb-4 text-sm leading-relaxed">
                    Imagens que fazem seus clientes pararem o scroll. Conteúdo
                    visual de cinema que eleva sua marca ao próximo nível.
                  </p>
                  <div className="text-orange-400 font-bold mb-4">
                    Filmagem 4K Ultra HD
                  </div>
                  <Link
                    href="/services/drone-marketing"
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium group text-sm"
                  >
                    Ver o Diferencial
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </HoverCard>
            </FadeIn>

            {/* Social Media */}
            <FadeIn direction="up" delay={0.5}>
              <HoverCard className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm p-8 rounded-2xl border border-purple-800/50 hover:border-purple-500/80 transition-all h-full group">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Redes Sociais que Convertem
                  </h3>
                  <p className="text-blue-200 mb-4 text-sm leading-relaxed">
                    Transformamos seguidores em clientes fiéis. Estratégia +
                    conteúdo viral + vendas automáticas.
                  </p>
                  <div className="text-purple-400 font-bold mb-4">
                    +200% Engajamento
                  </div>
                  <Link
                    href="/services/social-media"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group text-sm"
                  >
                    Viralizar Agora
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </HoverCard>
            </FadeIn>

            {/* AI Automation */}
            <FadeIn direction="right" delay={0.6}>
              <HoverCard className="bg-gradient-to-br from-emerald-900/40 to-cyan-900/40 backdrop-blur-sm p-8 rounded-2xl border border-emerald-800/50 hover:border-emerald-500/80 transition-all h-full group">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    IA que Vende por Você
                  </h3>
                  <p className="text-blue-200 mb-4 text-sm leading-relaxed">
                    Chatbots inteligentes que atendem, qualificam e vendem 24/7.
                    Sua empresa no piloto automático.
                  </p>
                  <div className="text-emerald-400 font-bold mb-4">
                    Atendimento 24/7
                  </div>
                  <Link
                    href="/services/ai-automation"
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium group text-sm"
                  >
                    Automatizar Vendas
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </HoverCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Mais de <span className="text-green-400">50 Empresas</span> Já
                Transformaram Seus Resultados
              </h2>
              <p className="text-xl text-blue-200">
                Veja o que nossos clientes estão dizendo sobre os resultados
                extraordinários
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-blue-200 mb-4">
                  "Nosso faturamento aumentou 180% em apenas 3 meses. O
                  investimento se pagou na primeira semana!"
                </p>
                <div className="font-semibold">Laura Rossini</div>
                <div className="text-sm text-blue-300">
                  CEO, Laura Rossini Advocacia
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-blue-200 mb-4">
                  "Nunca vi resultados tão rápidos. Em 15 dias já estávamos
                  tendo mais agendamentos que conseguíamos atender."
                </p>
                <div className="font-semibold">Gustavo Zorzzela</div>
                <div className="text-sm text-blue-300">
                  CEO, Odontologia Zorzzela
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-blue-200 mb-4">
                  "O e-commerce transformou nosso negócio. Vendas online
                  superaram as vendas físicas em apenas 2 meses."
                </p>
                <div className="font-semibold">Ademir Santos</div>
                <div className="text-sm text-blue-300">CEO, Londrina EPI's</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-300">
              Cada Dia de Atraso São R$ 1.000+ Perdidos
            </h2>
            <p className="text-xl text-orange-200 mb-8 max-w-4xl mx-auto">
              Enquanto você pensa, seus concorrentes estão conquistando seus
              clientes. Não deixe para amanhã o que pode transformar seu negócio
              hoje.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Diferenciais Section */}
      <DiferenciaisSection />

      {/* Projetos Section */}
      <ProjetosSection />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para Dominar seu Mercado?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Não perca mais tempo competindo por migalhas. Torne-se o líder
              absoluto do seu segmento com nossas estratégias exclusivas de
              marketing digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 text-xl px-12 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] font-bold">
                  DOMINAR MEU MERCADO AGORA
                  <Target className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-xl px-12 py-6 rounded-full font-semibold"
                >
                  Ver Todos os Serviços
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />

      {/* Dados Estruturados para SEO */}
      <StructuredData
        type="Organization"
        data={{
          services: [
            "Criação de Sites",
            "Google Ads",
            "Drone Marketing",
            "Gerenciamento de Redes Sociais",
            "Automação com IA",
            "SEO",
          ],
        }}
      />
      <StructuredData
        type="LocalBusiness"
        data={{
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "50",
          },
        }}
      />
    </div>
  );
}
