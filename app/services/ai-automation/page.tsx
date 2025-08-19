import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Bot,
  MessageSquare,
  TrendingUp,
  Star,
  Zap,
  Shield,
  Clock,
  Target,
  CheckCircle2,
  ArrowRight,
  Phone,
  Instagram,
  MessageCircle,
  Globe,
  Users,
  BarChart3,
  Award,
  Brain,
  Sparkles,
  Rocket,
  Calendar,
  Settings,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/fade-in";
import { ScaleIn } from "@/components/animations/scale-in";
import { HoverCard } from "@/components/animations/hover-card";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title:
    "Automação com IA Londrina | Chatbots WhatsApp, Instagram - Design Reverse",
  description:
    "Automação inteligente com IA para sua empresa em Londrina. Chatbots para WhatsApp, Instagram, Telegram. Atendimento 24/7, qualificação de leads automatizada. Aumente vendas!",
  keywords: [
    "automação com ia londrina",
    "chatbot whatsapp londrina",
    "bot instagram londrina",
    "automação atendimento londrina",
    "inteligência artificial londrina",
    "chatbot para empresas paraná",
    "automação vendas londrina",
    "bot telegram londrina",
    "ai automation londrina",
    "marketing automation londrina",
  ],
  openGraph: {
    title: "Automação com IA Londrina | Chatbots Inteligentes 24/7",
    description:
      "Transforme conversas em vendas com automação inteligente. Chatbots para WhatsApp, Instagram e mais em Londrina.",
    url: "https://designreverse.com.br/services/ai-automation",
    images: [
      {
        url: "/ai-automation-showcase.png",
        width: 1200,
        height: 630,
        alt: "Automação com IA Londrina - Chatbots Inteligentes",
      },
    ],
  },
  alternates: {
    canonical: "https://designreverse.com.br/services/ai-automation",
  },
};

export default function AIAutomationPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-emerald-900 via-cyan-900 to-black text-white">
          <Navbar variant="light" />
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn direction="up">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Sua Empresa Operando{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    24/7
                  </span>
                  : Automações Inteligentes que Vendem e Atendem por Você
                </h1>
                <p className="text-xl md:text-2xl text-emerald-200 mb-8 leading-relaxed">
                  Transforme conversas em vendas com chatbots alimentados por
                  IA. Automatize atendimento no WhatsApp, Instagram, Telegram e
                  mais.
                  <strong>
                    {" "}
                    Menos tarefas repetitivas, mais resultados
                  </strong>{" "}
                  para empresas em Londrina e região.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact?service=ai-automation">
                    <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl">
                      Solicitar Orçamento Gratuito
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-emerald-400 text-emerald-400 hover:bg-emerald-500/10 rounded-full px-8 py-6 text-lg font-semibold"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Demonstração
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Platforms Integration Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Plataformas que Integramos
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Conecte todos os seus canais de atendimento em uma automação
                  inteligente
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
              <ScaleIn delay={0.1}>
                <div className="flex flex-col items-center group">
                  <div className="bg-green-100 p-4 rounded-xl group-hover:bg-green-200 transition-all">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-sm font-medium mt-3">WhatsApp</span>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.2}>
                <div className="flex flex-col items-center group">
                  <div className="bg-pink-100 p-4 rounded-xl group-hover:bg-pink-200 transition-all">
                    <Instagram className="h-8 w-8 text-pink-600" />
                  </div>
                  <span className="text-sm font-medium mt-3">Instagram</span>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.3}>
                <div className="flex flex-col items-center group">
                  <div className="bg-blue-100 p-4 rounded-xl group-hover:bg-blue-200 transition-all">
                    <MessageSquare className="h-8 w-8 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium mt-3">Telegram</span>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.4}>
                <div className="flex flex-col items-center group">
                  <div className="bg-blue-100 p-4 rounded-xl group-hover:bg-blue-200 transition-all">
                    <MessageSquare className="h-8 w-8 text-blue-700" />
                  </div>
                  <span className="text-sm font-medium mt-3">Facebook</span>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.5}>
                <div className="flex flex-col items-center group">
                  <div className="bg-purple-100 p-4 rounded-xl group-hover:bg-purple-200 transition-all">
                    <Globe className="h-8 w-8 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium mt-3">Site/Chatbot</span>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.6}>
                <div className="flex flex-col items-center group">
                  <div className="bg-gray-100 p-4 rounded-xl group-hover:bg-gray-200 transition-all">
                    <MessageSquare className="h-8 w-8 text-gray-600" />
                  </div>
                  <span className="text-sm font-medium mt-3">X (Twitter)</span>
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                  Você está perdendo tempo e dinheiro?
                </h2>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                <div className="flex flex-wrap">
                  <FadeIn
                    direction="left"
                    className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500  "
                  >
                    <div className="flex items-start gap-4 ">
                      <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                        <Clock className="h-5 w-5 text-red-600" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Respondendo as mesmas perguntas?
                        </h3>
                        <p className="text-gray-600">
                          Cansado de responder "qual o horário de
                          funcionamento?" e "quais serviços vocês oferecem?"
                          dezenas de vezes por dia?
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn
                    direction="left"
                    delay={0.1}
                    className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 "
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                        <Users className="h-5 w-5 text-orange-600" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Equipe sobrecarregada?
                        </h3>
                        <p className="text-gray-600">
                          Sua equipe de vendas não consegue atender todos os
                          contatos imediatamente e você está perdendo
                          oportunidades?
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn
                    direction="left"
                    delay={0.2}
                    className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                        <Clock className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Perdendo clientes fora do horário?
                        </h3>
                        <p className="text-gray-600">
                          Quantos clientes em potencial desistiram porque
                          ninguém respondeu à noite ou no fim de semana?
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn
                    direction="left"
                    delay={0.3}
                    className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Dificuldade para qualificar leads?
                        </h3>
                        <p className="text-gray-600">
                          Gostaria de qualificar leads de forma automática antes
                          de passá-los para um vendedor especializado?
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 to-cyan-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <FadeIn direction="left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    A Solução é a Automação Inteligente
                  </h2>
                  <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
                    Nossos chatbots com Inteligência Artificial transformam sua
                    forma de atender. Eles entendem perguntas naturais,
                    qualificam leads automaticamente e direcionam clientes
                    qualificados para sua equipe.{" "}
                    <strong>
                      Resultado: mais vendas, menos trabalho repetitivo.
                    </strong>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 bg-emerald-800/30 p-4 rounded-lg">
                      <Bot className="h-6 w-6 text-emerald-400" />
                      <span>Atendimento 24/7</span>
                    </div>
                    <div className="flex items-center gap-3 bg-cyan-800/30 p-4 rounded-lg">
                      <Brain className="h-6 w-6 text-cyan-400" />
                      <span>IA Conversacional</span>
                    </div>
                    <div className="flex items-center gap-3 bg-emerald-800/30 p-4 rounded-lg">
                      <Target className="h-6 w-6 text-emerald-400" />
                      <span>Qualificação Automática</span>
                    </div>
                    <div className="flex items-center gap-3 bg-cyan-800/30 p-4 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-cyan-400" />
                      <span>Aumento de Conversões</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
              <div className="lg:w-1/2">
                <ScaleIn delay={0.3}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg transform rotate-3 scale-105 opacity-20"></div>
                    <Image
                      src="/ai-automation-showcase.png"
                      alt="Automação com IA Showcase"
                      width={600}
                      height={400}
                      className="relative rounded-lg shadow-2xl"
                    />
                  </div>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Pacotes de Automação
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Escolha o pacote ideal para o seu negócio e comece a
                  automatizar hoje mesmo
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Pacote Start */}
              <HoverCard className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                    <Bot className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Automação Start
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ideal para profissionais autônomos e negócios locais
                  </p>
                  <div className="text-center">
                    <span className="text-sm text-gray-500">Setup</span>
                    <div className="text-3xl font-bold text-blue-600">
                      R$ 997
                    </div>
                    <span className="text-sm text-gray-500">+ R$ 147/mês</span>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-700 text-sm mb-4">
                    Comece a automatizar seu atendimento em um canal principal,
                    qualificando contatos e respondendo às dúvidas mais comuns
                    24h por dia.
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      1 Canal de Automação (WhatsApp ou Instagram)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Fluxo de Conversa Básico (até 10 etapas)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Menu de Opções personalizável
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Captura de Dados do Cliente
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Mensagem de Boas-Vindas Automática
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Treinamento para uso da plataforma
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Quero Este Pacote
                </Button>
              </HoverCard>

              {/* Pacote Pro */}
              <HoverCard className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 rounded-xl shadow-lg border-2 border-emerald-200 hover:shadow-xl transition-all relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="bg-emerald-100 p-3 rounded-full inline-block mb-4">
                    <Brain className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Automação Pro
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Para empresas que buscam crescimento e integração
                  </p>
                  <div className="text-center">
                    <span className="text-sm text-gray-500">Setup</span>
                    <div className="text-3xl font-bold text-emerald-600">
                      R$ 1.897
                    </div>
                    <span className="text-sm text-gray-500">+ R$ 297/mês</span>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-700 text-sm mb-4">
                    A solução mais popular. Integre múltiplos canais e crie
                    fluxos inteligentes que nutrem, qualificam e direcionam seus
                    clientes, otimizando o trabalho da sua equipe.
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tudo do Pacote Start</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Até 2 Canais de Automação
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Fluxos Avançados (até 25 etapas)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Integração com Planilhas Google
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Lembretes Automáticos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Relatório Mensal de Performance
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                  Quero Este Pacote
                </Button>
              </HoverCard>

              {/* Pacote Premium */}
              <HoverCard className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                <div className="text-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
                    <Sparkles className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Automação Premium
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A máxima performance com IA
                  </p>
                  <div className="text-center">
                    <span className="text-sm text-gray-500">
                      Setup a partir de
                    </span>
                    <div className="text-3xl font-bold text-purple-600">
                      R$ 3.497
                    </div>
                    <span className="text-sm text-gray-500">
                      + Mensalidade Personalizada
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-700 text-sm mb-4">
                    Uma solução completa e personalizada. Usamos IA para
                    entender a intenção do cliente, oferecendo respostas
                    naturais e integrando com seu CRM.
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tudo do Pacote Pro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Até 4 Canais de Automação
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Fluxos Ilimitados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      IA Conversacional (ChatGPT/Gemini)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Integração com CRM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Dashboard em Tempo Real
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Suporte Prioritário</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Quero Este Pacote
                </Button>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Como Funciona?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Um processo simples e transparente para colocar sua automação
                  no ar
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <ScaleIn delay={0.1}>
                <div className="text-center">
                  <div className="bg-emerald-100 p-6 rounded-full inline-block mb-6">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">1. Diagnóstico</h3>
                  <p className="text-gray-600">
                    Entendemos suas necessidades e objetivos em uma reunião
                    rápida e estratégica.
                  </p>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.2}>
                <div className="text-center">
                  <div className="bg-blue-100 p-6 rounded-full inline-block mb-6">
                    <Settings className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    2. Desenvolvimento
                  </h3>
                  <p className="text-gray-600">
                    Criamos e configuramos toda a automação personalizada para
                    o seu negócio.
                  </p>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.3}>
                <div className="text-center">
                  <div className="bg-green-100 p-6 rounded-full inline-block mb-6">
                    <Rocket className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">3. Lançamento</h3>
                  <p className="text-gray-600">
                    Ativamos o bot e acompanhamos os primeiros dias de
                    operação para garantir perfeito funcionamento.
                  </p>
                </div>
              </ScaleIn>

              <ScaleIn delay={0.4}>
                <div className="text-center">
                  <div className="bg-purple-100 p-6 rounded-full inline-block mb-6">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">4. Otimização</h3>
                  <p className="text-gray-600">
                    Analisamos os dados e propomos melhorias contínuas para
                    maximizar resultados.
                  </p>
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <FadeIn direction="up">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Perguntas Frequentes
                  </h2>
                  <p className="text-xl text-gray-600">
                    Tire suas principais dúvidas sobre automação com IA
                  </p>
                </FadeIn>
              </div>

              <FadeIn direction="up" delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem
                    value="human-contact"
                    className="border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold">
                      Vou perder o contato humano com meu cliente?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Não! A automação filtra e qualifica os contatos, passando
                      apenas leads qualificados para sua equipe. Isso significa
                      que seus vendedores gastam mais tempo com clientes prontos
                      para comprar, melhorando a qualidade do atendimento
                      humano.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="difficulty"
                    className="border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold">
                      É muito difícil de usar depois de pronto?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Não. Entregamos tudo funcionando e fornecemos treinamento
                      completo. A interface é intuitiva e você pode fazer
                      ajustes simples sem conhecimento técnico. Para mudanças
                      mais complexas, nossa equipe está sempre disponível.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="timeline"
                    className="border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold">
                      Em quanto tempo a automação fica pronta?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Depende da complexidade: Pacote Start (5-7 dias), Pacote
                      Pro (7-10 dias), Pacote Premium (10-15 dias). Incluímos
                      testes, ajustes e treinamento nestes prazos.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="technical-knowledge"
                    className="border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold">
                      Eu preciso ter conhecimento técnico?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Absolutamente não. Cuidamos de toda a parte técnica:
                      configuração, integração, programação e manutenção. Você
                      só precisa focar no seu negócio enquanto a automação
                      trabalha para você.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-cyan-900 to-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto para colocar sua empresa no piloto automático?
                </h2>
                <p className="text-xl text-emerald-200 mb-8 leading-relaxed">
                  Não deixe seus concorrentes saírem na frente. Fale com um de
                  nossos especialistas em Londrina e descubra o plano de
                  automação ideal para o seu negócio.
                  <strong>A primeira consultoria é gratuita.</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact?service=ai-automation">
                    <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl">
                      Agendar Consultoria Gratuita
                      <Calendar className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      variant="outline"
                      className="border-emerald-400 text-emerald-400 hover:bg-emerald-500/10 rounded-full px-8 py-6 text-lg font-semibold"
                    >
                      Ver Casos de Sucesso
                    </Button>
                  </Link>
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
