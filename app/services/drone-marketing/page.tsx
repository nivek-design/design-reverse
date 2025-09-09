import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollVideo } from "@/components/animations/scroll-video";

export const metadata: Metadata = {
  title:
    "Drone Marketing Londrina | Filmagem Aérea 4K para Marketing Digital - Design Reverse",
  description:
    "Serviços de drone marketing em Londrina. Filmagem aérea profissional 4K, fotos aéreas para marketing digital. Aumente o engajamento com imagens cinematográficas únicas!",
  keywords: [
    "drone marketing londrina",
    "filmagem aérea londrina",
    "fotos drone londrina",
    "vídeo aéreo londrina",
    "drone 4k londrina",
    "marketing aéreo paraná",
    "filmagem drone profissional",
    "imagens aéreas londrina",
    "drone publicitário londrina",
    "captação aérea londrina",
  ],
  openGraph: {
    title: "Drone Marketing Londrina | Filmagem Aérea Profissional 4K",
    description:
      "Imagens aéreas cinematográficas para seu marketing. Drone 4K, qualidade profissional em Londrina e região.",
    url: "https://designreverse.com.br/services/drone-marketing",
    images: [
      {
        url: "/drone-marketing-showcase.png",
        width: 1200,
        height: 630,
        alt: "Drone Marketing Londrina - Filmagem Aérea 4K",
      },
    ],
  },
  alternates: {
    canonical: "https://designreverse.com.br/services/drone-marketing",
  },
};
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Eye,
  TrendingUp,
  Star,
  Video,
  Rocket,
  Gem,
  CheckCircle2,
  ArrowRight,
  Play,
  Camera,
  Clock,
  Globe,
  Users,
  BarChart3,
  Award,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { ScaleIn } from "@/components/animations/scale-in";
import { HoverCard } from "@/components/animations/hover-card";
import { PageTransition } from "@/components/page-transition";

export default function DroneMarketingPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-900 via-red-900 to-black text-white">
          <Navbar variant="light" />
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn direction="up">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Drone Marketing Londrina - Filmagem Aérea 4K que{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Multiplica Conversões
                  </span>{" "}
                  no Marketing Digital
                </h1>
                <p className="text-xl md:text-2xl text-orange-200 mb-8 leading-relaxed">
                  Crie campanhas de marketing digital memoráveis com a
                  perspectiva única e impactante que só a filmagem aérea
                  profissional pode oferecer. Aumente o engajamento, a percepção
                  de valor da marca e, o mais importante, as conversões.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact?service=drone">
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-5 py-7 text-xl font-bold transition-all duration-300 hover:translate-y-[-3px] hover:shadow-2xl shadow-orange-500/25 border border-orange-400/30">
                      SOLICITAR ORÇAMENTO GRÁTIS
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-orange-400 text-orange-400 hover:bg-orange-500/10 rounded-full px-8 py-6 text-lg font-semibold"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Ver Portfólio
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Problem Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                  O Desafio do Marketing Digital Moderno
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-12">
                  No universo do marketing digital, a atenção do público é o bem
                  mais valioso. A cada segundo, milhares de conteúdos disputam
                  um espaço no feed. Como garantir que a mensagem do seu cliente
                  não apenas seja vista, mas também sentida e lembrada? Vídeos
                  de baixa qualidade, ângulos repetitivos e falta de impacto
                  visual podem estar custando caro, resultando em baixo
                  engajamento e campanhas que não decolam.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <FadeIn direction="left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    A Solução: Captação Profissional com Drone
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Nossa captação profissional de vídeo com drone é a resposta.
                    Transformamos a maneira como as marcas se comunicam
                    visualmente. Com tecnologia de ponta e um olhar
                    cinematográfico, capturamos imagens aéreas que geram
                    impacto, contam histórias e, acima de tudo, impulsionam os
                    resultados das suas estratégias de marketing digital.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                      <Camera className="h-5 w-5 text-orange-600" />
                      <span className="text-orange-800 font-medium">
                        4K Ultra HD
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                      <Award className="h-5 w-5 text-blue-600" />
                      <span className="text-blue-800 font-medium">
                        Qualidade Cinematográfica
                      </span>
                    </div>
                  </div>
                </FadeIn>
              </div>
              <div className="lg:w-1/2">
                <ScaleIn delay={0.3}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg transform rotate-3 scale-105 opacity-20"></div>
                    <ScrollVideo
                      src="/Roteiro_de_Vídeo_Institucional_Cinematográfico.mp4"
                      className=" h-full object-cover "
                      muted={true}
                      loop={true}
                      controls={false}
                      threshold={1}
                      loading="lazy"
                    />
                  </div>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Benefícios e Diferenciais
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Traduza as características do nosso serviço em benefícios
                  diretos para o seu marketing
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <HoverCard className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm p-8 rounded-xl border border-orange-800/50 hover:border-orange-500/50 transition-all">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg inline-block mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Impacto Visual Imediato
                </h3>
                <p className="text-gray-300">
                  Prenda a atenção nos primeiros 3 segundos com imagens aéreas
                  de tirar o fôlego. Vídeos com drone aumentam o tempo de
                  permanência do usuário em até 88%.
                </p>
              </HoverCard>

              <HoverCard className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50 hover:border-blue-500/50 transition-all">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg inline-block mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Aumento de Conversão</h3>
                <p className="text-gray-300">
                  Landing pages com vídeo podem aumentar as conversões em até
                  80%. Conteúdos visuais dinâmicos geram mais curtidas,
                  compartilhamentos e comentários.
                </p>
              </HoverCard>

              <HoverCard className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-sm p-8 rounded-xl border border-emerald-800/50 hover:border-emerald-500/50 transition-all">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-lg inline-block mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Percepção de Alto Valor
                </h3>
                <p className="text-gray-300">
                  Associe a marca do seu cliente à inovação, profissionalismo e
                  qualidade. Imagens cinematográficas elevam o status de
                  qualquer produto ou serviço.
                </p>
              </HoverCard>

              <HoverCard className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50 hover:border-purple-500/50 transition-all">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg inline-block mb-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Versatilidade para Campanhas
                </h3>
                <p className="text-gray-300">
                  Ideal para lançamentos de produtos, vídeos institucionais,
                  cobertura de eventos, marketing imobiliário, turismo e muito
                  mais. Um único voo, múltiplas possibilidades.
                </p>
              </HoverCard>

              <HoverCard className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-sm p-8 rounded-xl border border-yellow-800/50 hover:border-yellow-500/50 transition-all">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-lg inline-block mb-4">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Destaque-se da Concorrência
                </h3>
                <p className="text-gray-300">
                  Em um mercado saturado, ofereça ao seu cliente um diferencial
                  competitivo claro com conteúdo visual que a maioria ainda não
                  utiliza.
                </p>
              </HoverCard>

              <HoverCard className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-indigo-800/50 hover:border-indigo-500/50 transition-all">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-3 rounded-lg inline-block mb-4">
                  <Gem className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Qualidade de Cinema</h3>
                <p className="text-gray-300">
                  Entregue material com ultra-resolução 4K, garantindo cores
                  vibrantes, detalhes nítidos e acabamento profissional que
                  impressiona em qualquer tela.
                </p>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Pacotes de Serviço
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Opções claras e com bom custo-benefício para diferentes
                  necessidades
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Pacote Start */}
              <HoverCard className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Pacote Start
                  </h3>
                  <p className="text-gray-600">Ideal para Redes Sociais</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    A partir de <span className="text-blue-600">R$ 500,00</span>
                  </h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Até 1 hora de captação em 1 localização
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Vídeo editado de até 60 segundos (vertical e horizontal)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Captura em 4K</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Ideal para Reels, Shorts e posts de alto impacto
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Solicitar Orçamento
                </Button>
              </HoverCard>

              {/* Pacote Pro */}
              <HoverCard className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl shadow-lg border-2 border-orange-200 hover:shadow-xl transition-all relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-full inline-block mb-4">
                    <BarChart3 className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Pacote Pro
                  </h3>
                  <p className="text-gray-600">O Mais Popular</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    A partir de{" "}
                    <span className="text-orange-600">R$ 1.200,00</span>
                  </h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Até 3 horas de captação em até 2 localizações
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Vídeo institucional/promocional editado até 2 minutos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      5 clipes curtos para redes sociais
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Captura em 4K/ + Color grading profissional
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Solicitar Orçamento
                </Button>
              </HoverCard>

              {/* Pacote Premium */}
              <HoverCard className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                <div className="text-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Pacote Premium
                  </h3>
                  <p className="text-gray-600">Produção Premium</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    A partir de{" "}
                    <span className="text-purple-600">R$ 2.800,00</span>
                  </h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Diária completa de captação (até 6 horas)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Múltiplas localizações + Roteiro detalhado
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Vídeo principal de até 3-5 minutos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Captura em 4K com máxima qualidade
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Solicitar Orçamento
                </Button>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <FadeIn direction="up">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Perguntas Frequentes
                  </h2>
                  <p className="text-xl text-gray-600">
                    Esclareça suas principais dúvidas sobre nossos serviços
                  </p>
                </FadeIn>
              </div>

              <FadeIn direction="up" delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem
                    value="process"
                    className="border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold">
                      Como funciona o processo, desde o briefing até a entrega
                      final?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      1) Briefing detalhado e planejamento estratégico 2)
                      Agendamento e captação no local 3) Edição profissional com
                      color grading 4) Revisões e ajustes 5) Entrega final em
                      até 7 dias úteis.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="delivery"
                    className="border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold">
                      Em quanto tempo recebo o material editado?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      O prazo padrão é de 5 a 7 dias úteis após a captação. Para
                      projetos urgentes, oferecemos entrega expressa em até 48
                      horas (taxa adicional aplicável).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="regions"
                    className="border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold">
                      Vocês atuam em quais regiões?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Atendemos Londrina e região. Para localizações
                      específicas, consulte nossa equipe sobre disponibilidade e
                      custos de deslocamento.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="weather"
                    className="border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold">
                      O que acontece se as condições climáticas não forem
                      favoráveis?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Reagendamos sem custos adicionais. Monitoramos as
                      condições meteorológicas com antecedência e sempre
                      priorizamos a segurança e qualidade do material captado.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-20 bg-gradient-to-br from-orange-900 via-red-900 to-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto para levar sua marca a novas alturas?
                </h2>
                <p className="text-xl text-orange-200 mb-8 leading-relaxed">
                  Fale com um de nossos especialistas e solicite uma proposta
                  personalizada. Vamos mostrar como as imagens aéreas podem
                  transformar sua presença online e gerar resultados reais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact?service=drone">
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl">
                      Leve seu Marketing para as Alturas
                      <Rocket className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      variant="outline"
                      className="border-orange-400 text-orange-400 hover:bg-orange-500/10 rounded-full px-8 py-6 text-lg font-semibold"
                    >
                      Ver Portfólio Completo
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
