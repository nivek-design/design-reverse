"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { HoverCard } from "@/components/animations/hover-card";
import { ScaleIn } from "@/components/animations/scale-in";
import {
  Users,
  Clock,
  TrendingDown,
  Lightbulb,
  BarChart3,
  RefreshCw,
  Rocket,
  Target,
  MessageCircle,
  Award,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Star,
  Calendar,
  Eye,
  Heart,
  Share2,
  PlayCircle,
  Zap,
  Shield,
  Phone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SocialMediaServicePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section with Strong Lead */}
        <div className="bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <Navbar variant="light" />

          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>Transforme Redes Sociais em Máquinas de Vendas</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Menos Tempo Gerenciando Posts,
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent block">
                    Mais Tempo Focado em Estratégia
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
                  Deixe a gestão de mídias sociais com quem entende do assunto.
                  Gerenciamento completo para agências e negócios digitais que
                  querem <strong>resultados reais</strong> e
                  <strong>crescimento consistente</strong>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button 
                    onClick={() => window.open("https://wa.me/5543988125184?text=Olá! Gostaria de solicitar uma análise gratuita das minhas redes sociais. Estou interessado no serviço de gerenciamento de mídias sociais.", "_blank")}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Análise Gratuita das Suas Redes
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm"
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Ver Cases de Sucesso
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-8 text-purple-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span>+50 Clientes Ativos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span>+150% Engajamento Médio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    <span>Suporte Dedicado</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Pain Points Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up" className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Você se identifica com algum destes desafios?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Sabemos que a sua rotina é uma corrida contra o tempo. Entre
                  planejar campanhas, atender clientes e analisar métricas, a
                  gestão diária das redes sociais acaba se tornando uma tarefa
                  complexa e demorada.
                </p>
              </FadeIn>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Clock,
                    title: "Falta de Tempo",
                    description:
                      "Dificuldade em manter a consistência nas postagens e interagir com o público em tempo real.",
                    color: "text-red-600",
                    bgColor: "bg-red-100",
                  },
                  {
                    icon: TrendingDown,
                    title: "Resultados Estagnados",
                    description:
                      "O número de seguidores não cresce e o engajamento das publicações é cada vez menor.",
                    color: "text-orange-600",
                    bgColor: "bg-orange-100",
                  },
                  {
                    icon: Lightbulb,
                    title: "Bloqueio Criativo",
                    description:
                      "Luta constante para encontrar ideias de conteúdo que realmente conectem com a audiência.",
                    color: "text-yellow-600",
                    bgColor: "bg-yellow-100",
                  },
                  {
                    icon: BarChart3,
                    title: "Dificuldade com Métricas",
                    description:
                      "Insegurança ao analisar os dados e comprovar o ROI das ações para o seu cliente.",
                    color: "text-blue-600",
                    bgColor: "bg-blue-100",
                  },
                  {
                    icon: RefreshCw,
                    title: "Constantes Mudanças",
                    description:
                      "Sentimento de estar sempre 'correndo atrás' das novas tendências e algoritmos.",
                    color: "text-purple-600",
                    bgColor: "bg-purple-100",
                  },
                  {
                    icon: Users,
                    title: "Falta de Engajamento",
                    description:
                      "Comunidade desconectada e baixa interação, resultando em oportunidades perdidas.",
                    color: "text-pink-600",
                    bgColor: "bg-pink-100",
                  },
                ].map((pain, index) => (
                  <HoverCard
                    key={index}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`${pain.bgColor} ${pain.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                    >
                      <pain.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">
                      {pain.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pain.description}
                    </p>
                  </HoverCard>
                ))}
              </div>

              <div className="text-center">
                <FadeIn direction="up">
                  <div className="bg-gradient-to-r from-purple-900 to-pink-900 text-white p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">
                      E se você pudesse delegar essa operação com total
                      segurança?
                    </h3>
                    <p className="text-purple-100 text-lg">
                      Com a certeza de que a presença online do seu cliente está
                      crescendo de forma estratégica e consistente.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <FadeIn direction="left">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 rounded-full text-sm font-medium mb-4 border border-purple-500/30">
                      A Solução Definitiva
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                      Gerenciamento Estratégico que
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        {" "}
                        Realmente Funciona
                      </span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      Nosso serviço foi desenhado para eliminar esses desafios.
                      Atuamos como uma extensão da sua equipe, cuidando de toda
                      a operação – do planejamento de conteúdo à análise de
                      resultados.
                    </p>

                    {/* Key Benefits */}
                    <div className="space-y-4">
                      {[
                        {
                          icon: Rocket,
                          title: "Mais Crescimento, Menos Estresse",
                          description:
                            "Construímos uma audiência qualificada enquanto você ganha tempo para focar em novas estratégias.",
                        },
                        {
                          icon: Award,
                          title: "Autoridade de Marca",
                          description:
                            "Transformamos a marca do seu cliente em uma referência no nicho de mercado.",
                        },
                        {
                          icon: MessageCircle,
                          title: "Engajamento que Converte",
                          description:
                            "Criamos uma comunidade fiel que gera leads, vendas e defensores da marca.",
                        },
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-lg">
                            <benefit.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">
                              {benefit.title}
                            </h3>
                            <p className="text-gray-600">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                </div>

                <div className="lg:w-1/2">
                  <ScaleIn delay={0.3}>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
                      <h3 className="text-xl font-bold mb-6 text-center text-gray-900">
                        Resultados Comprovados
                      </h3>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600 mb-2">
                            +150%
                          </div>
                          <div className="text-sm text-gray-600">
                            Aumento Médio de Engajamento
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-pink-600 mb-2">
                            +70%
                          </div>
                          <div className="text-sm text-gray-600">
                            Geração de Leads
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600 mb-2">
                            3x
                          </div>
                          <div className="text-sm text-gray-600">
                            Crescimento de Seguidores
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-pink-600 mb-2">
                            90%
                          </div>
                          <div className="text-sm text-gray-600">
                            Satisfação dos Clientes
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                              >
                                {i}
                              </div>
                            ))}
                          </div>
                          <div className="text-sm text-gray-600">
                            +50 Clientes Ativos
                          </div>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">
                            4.9/5 - Avaliação Média
                          </span>
                        </div>
                      </div>
                    </div>
                  </ScaleIn>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Packages */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <FadeIn direction="up" className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Escolha o Plano Ideal para seu Negócio
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Estruturamos nossos pacotes para atender diferentes
                  necessidades e orçamentos, sempre com foco em resultados e
                  crescimento sustentável.
                </p>
              </FadeIn>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Essential Plan */}
                <HoverCard className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Essencial
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Para quem está começando
                    </p>
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      R$ 897
                    </div>
                    <div className="text-gray-500">/mês</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {[
                      "Gestão de 1 Rede Social",
                      "12 Posts Mensais (Arte + Legenda)",
                      "Planejamento de Conteúdo",
                      "Relatório Mensal Simples",
                      "Suporte via Email",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => window.open("https://wa.me/5543988125184?text=Olá! Tenho interesse no plano Essencial de gerenciamento de mídias sociais (R$ 897/mês). Gostaria de mais informações.", "_blank")}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-lg"
                  >
                    Começar Agora
                  </Button>
                </HoverCard>

                {/* Strategic Plan - Most Popular */}
                <HoverCard className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Estratégico</h3>
                    <p className="text-purple-100 mb-6">
                      O mais escolhido pelos clientes
                    </p>
                    <div className="text-4xl font-bold mb-2">R$ 1.497</div>
                    <div className="text-purple-200">/mês</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {[
                      "Gestão de até 2 Redes Sociais",
                      "20 Posts Mensais + Stories",
                      "Interação e Gerenciamento de Comunidade",
                      "Relatório Mensal Detalhado",
                      "Suporte via WhatsApp",
                      "Consultoria Estratégica",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => window.open("https://wa.me/5543988125184?text=Olá! Tenho interesse no plano Estratégico de gerenciamento de mídias sociais (R$ 1.497/mês). Gostaria de mais informações e começar o quanto antes!", "_blank")}
                    className="w-full bg-white text-purple-600 hover:bg-gray-100 py-3 rounded-lg font-bold"
                  >
                    Escolher Plano Estratégico
                  </Button>
                </HoverCard>

                {/* Performance Plan */}
                <HoverCard className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Performance
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Para crescimento acelerado
                    </p>
                    <div className="text-4xl font-bold text-pink-600 mb-2">
                      R$ 2.497
                    </div>
                    <div className="text-gray-500">/mês</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {[
                      "Gestão de até 3 Redes Sociais",
                      "Conteúdo Ilimitado (Posts + Stories + Reels)",
                      "Gestão Básica de Anúncios",
                      "Reunião Estratégica Mensal",
                      "Relatório Personalizado",
                      "Análise de Concorrentes",
                      "Suporte Prioritário",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => window.open("https://wa.me/5543988125184?text=Olá! Tenho interesse no plano Performance de gerenciamento de mídias sociais (R$ 2.497/mês). Quero maximizar meus resultados!", "_blank")}
                    className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white py-3 rounded-lg"
                  >
                    Maximizar Resultados
                  </Button>
                </HoverCard>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <FadeIn direction="up" className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  O Que Nossos Clientes Dizem
                </h2>
                <p className="text-xl text-gray-600">
                  Resultados reais de quem já transformou suas redes sociais
                  conosco.
                </p>
              </FadeIn>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Maria Silva",
                    role: "Diretora de Marketing",
                    company: "TechStart Digital",
                    content:
                      "Desde que a Design Reverse assumiu nosso Instagram, nosso engajamento cresceu 150% em 3 meses. Eles não apenas postam, eles criam uma verdadeira comunidade.",
                    rating: 5,
                    results: "+150% Engajamento",
                  },
                  {
                    name: "Carlos Mendes",
                    role: "CEO",
                    company: "Inovação Consultoria",
                    content:
                      "Finalmente encontramos uma parceria de verdade. Nossa geração de leads através do LinkedIn aumentou 70% e o time está totalmente alinhado com nossa visão.",
                    rating: 5,
                    results: "+70% Leads",
                  },
                  {
                    name: "Ana Costa",
                    role: "Fundadora",
                    company: "Wellness Brand",
                    content:
                      "O que mais me impressiona é a qualidade do conteúdo e a consistência. Nossa comunidade triplicou em 6 meses e as vendas seguiram o mesmo caminho.",
                    rating: 5,
                    results: "3x Crescimento",
                  },
                ].map((testimonial, index) => (
                  <HoverCard
                    key={index}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.company}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {testimonial.results}
                        </div>
                      </div>
                    </div>
                  </HoverCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-600">
                Esclarecemos suas principais dúvidas sobre nossos serviços.
              </p>
            </FadeIn>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    Preciso ter um contrato de fidelidade?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Nossos contratos são flexíveis e podem ser cancelados com
                    aviso prévio de 30 dias. Acreditamos que a qualidade do
                    nosso trabalho deve ser o motivo para você permanecer
                    conosco, não a obrigatoriedade contratual.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    O valor dos anúncios (tráfego pago) está incluso nos planos?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Nos planos Estratégico e Performance, oferecemos gestão
                    básica de anúncios, mas o investimento em mídia paga é
                    separado e fica por sua conta. Isso garante total
                    transparência e controle sobre seus investimentos
                    publicitários.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    Em quanto tempo começo a ver os resultados?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Os primeiros resultados começam a aparecer entre 30 a 60
                    dias, com melhorias significativas geralmente visíveis a
                    partir do terceiro mês. O crescimento orgânico nas redes
                    sociais é um processo gradual mas consistente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    Quem irá criar o conteúdo? Posso aprovar antes de ser
                    postado?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Nossa equipe de designers e copywriters cria todo o
                    conteúdo. Você recebe um calendário editorial mensal para
                    aprovação antes das postagens. Também oferecemos um processo
                    de aprovação por WhatsApp para maior agilidade.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    Como funciona o processo de onboarding?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Após a contratação, agendamos uma reunião de alinhamento
                    estratégico, onde entendemos sua marca, público e objetivos.
                    Em seguida, desenvolvemos a estratégia de conteúdo e
                    começamos a produção. Todo o processo leva cerca de 7 dias
                    úteis.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Pronto para Transformar suas Redes Sociais?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Não deixe para amanhã o crescimento que pode começar hoje. Nossa
                análise gratuita vai mostrar exatamente onde estão as
                oportunidades nas suas redes sociais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  onClick={() => window.open("https://wa.me/5543988125184?text=Olá! Quero receber uma análise gratuita das minhas redes sociais e saber como vocês podem me ajudar a transformar minha presença digital!", "_blank")}
                  className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-2px]"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Receber Análise Gratuita Agora
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (43) 98812-5184
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3">
                  <Shield className="h-6 w-6 text-green-400" />
                  <span>Sem Contrato de Fidelidade</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  <span>Resultados em 30-60 dias</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Award className="h-6 w-6 text-purple-300" />
                  <span>+50 Clientes Satisfeitos</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
