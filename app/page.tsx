import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { ArrowRight, Code, BarChart2 } from "lucide-react"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import { HoverCard } from "@/components/animations/hover-card"
import { TextReveal } from "@/components/animations/text-reveal"
import { AnimatedBackground } from "@/components/animations/animated-background"
import { DiferenciaisSection } from "@/components/sections/diferenciais-section"
import { ProjetosSection } from "@/components/sections/projetos-section"
import type { Metadata } from "next"

export const metadata: Metadata = {

  title:
    "Design Reverse - Agência de Marketing Digital Londrina | Sites, Google Ads, Drone Marketing",
  description:
    "Agência de marketing digital em Londrina especializada em criação de sites, Google Ads, drone marketing e automação com IA. Aumente suas vendas em 150%+ com estratégias comprovadas.",
  keywords: [
    "marketing digital londrina",
    "agência marketing digital",
    "criação sites londrina",
    "google ads londrina",
    "drone marketing",
    "automação ia",
    "gerenciamento redes sociais",
    "seo londrina",
    "sites responsivos",
    "landing pages",
  ],
  openGraph: {
    title: "Design Reverse - Marketing Digital que Transforma Negócios",
    description:
      "Transforme seu negócio com nossa metodologia proprietária. +150% aumento em vendas, +50 empresas transformadas, ROI de 280%.",
    url: "https://designreverse.com.br",
    siteName: "Design Reverse",
    images: [
      {
        url: "/design-reverse-logo.png",
        width: 1200,
        height: 630,
        alt: "Design Reverse - Agência de Marketing Digital Londrina",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Reverse - Marketing Digital Extraordinário",
    description:
      "Desconstruindo o comum, projetando o extraordinário. Marketing digital focado em conversão e crescimento.",
    images: ["/design-reverse-logo.png"],
  },
  alternates: {
    canonical: "https://designreverse.com.br",
  },
};
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <TextReveal text="Desconstruindo o comum, projetando o extraordinário." />
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <p className="text-xl text-blue-200">
                Marketing digital além do comum. Projetamos o crescimento extraordinário do seu negócio com estratégias
                focadas em conversão, visibilidade que quebram padrões.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.6}>
              <Link href="/contact">
                <Button className="bg-blue-500 hover:bg-blue-600 rounded-full px-8 py-6 text-lg mt-4 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                  Descubra como Podemos Ajudar
                </Button>
              </Link>
            </FadeIn>
          </div>
          <div className="md:w-1/2 relative h-[400px]">
            {/* Data visualization elements */}
            <div className="absolute top-0 right-0 w-full h-full">
              {/* Network lines and dots */}
              <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100,200 L200,100 L300,150 L400,50" stroke="#0066cc" strokeWidth="1" strokeDasharray="5,5" />
                <path
                  d="M50,250 L150,300 L250,250 L350,300 L450,200"
                  stroke="#0066cc"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <circle cx="100" cy="200" r="3" fill="#00ccff" />
                <circle cx="200" cy="100" r="3" fill="#00ccff" />
                <circle cx="300" cy="150" r="3" fill="#00ccff" />
                <circle cx="400" cy="50" r="3" fill="#00ccff" />
                <circle cx="50" cy="250" r="3" fill="#00ccff" />
                <circle cx="150" cy="300" r="3" fill="#00ccff" />
                <circle cx="250" cy="250" r="3" fill="#00ccff" />
                <circle cx="350" cy="300" r="3" fill="#00ccff" />
                <circle cx="450" cy="200" r="3" fill="#00ccff" />
              </svg>

              {/* Data cards */}
              <FadeIn direction="left" delay={0.3} className="absolute top-[10%] right-[5%]">
                <div className="bg-blue-800/40 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30 w-[200px] h-[120px] shadow-lg shadow-blue-500/20">
                  <div className="text-xs text-blue-300 mb-2">Crescimento Digital</div>
                  <div className="text-xs text-blue-300">Marketing</div>
                  <div className="mt-4 h-[2px] bg-blue-400/30 w-full"></div>
                  <div className="mt-2 h-[2px] bg-blue-400/30 w-3/4"></div>
                  <div className="mt-2 h-[2px] bg-blue-400/30 w-1/2"></div>
                  <div className="mt-2 h-[2px] bg-blue-400/30 w-3/4"></div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.5} className="absolute top-[40%] right-[20%]">
                <div className="bg-blue-800/40 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30 w-[220px] h-[140px] shadow-lg shadow-blue-500/20">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <div className="h-[5px] bg-blue-400 w-[15px]"></div>
                      <div className="h-[5px] bg-blue-400 w-[30px]"></div>
                      <div className="h-[5px] bg-blue-400 w-[20px]"></div>
                      <div className="h-[5px] bg-blue-400 w-[40px]"></div>
                      <div className="h-[5px] bg-blue-400 w-[25px]"></div>
                    </div>

                    <div className="relative w-[60px] h-[60px] flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400/30"></div>
                      <div className="text-blue-400 font-bold">+85%</div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div className="h-[40px] w-[10px] bg-blue-400 self-end"></div>
                    <div className="h-[20px] w-[10px] bg-blue-400 self-end"></div>
                    <div className="h-[30px] w-[10px] bg-blue-400 self-end"></div>
                    <div className="h-[25px] w-[10px] bg-blue-400 self-end"></div>
                    <div className="h-[35px] w-[10px] bg-blue-400 self-end"></div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.7} className="absolute bottom-[20%] right-[30%]">
                <div className="bg-blue-800/40 backdrop-blur-sm p-3 rounded-lg border border-blue-500/30 shadow-lg shadow-blue-500/20">
                  <div className="text-xs text-blue-300">RESULTADOS</div>
                </div>
              </FadeIn>
            </div>
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
                  "Nosso faturamento aumentou 50% em apenas 3 meses. O
                  investimento se pagou!"
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
                  "Nunca vi resultados tão rápidos. Em 30 dias já estávamos
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
                  superaram as vendas físicas em apenas 6 meses."
                </p>
                <div className="font-semibold">Ademir Batista</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Soluções completas para impulsionar sua presença digital e maximizar seus resultados online.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Card 1 */}
          <FadeIn direction="left" delay={0.2}>
            <HoverCard className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50 hover:border-blue-500/50 transition-all h-full">
              <div className="bg-blue-700 p-3 rounded-lg inline-block mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Criação de Websites Profissionais</h3>
              <p className="text-blue-200 mb-6">
                Sites responsivos, otimizados para SEO e com design moderno que convertem visitantes em clientes.
                Criamos experiências digitais que representam sua marca com excelência.
              </p>
              <Link
                href="/services/websites"
                className="flex items-center text-blue-400 hover:text-blue-300 font-medium group"
              >
                Saiba Mais{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </HoverCard>
          </FadeIn>

          {/* Service Card 2 */}
          <FadeIn direction="right" delay={0.3}>
            <HoverCard className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50 hover:border-blue-500/50 transition-all h-full">
              <div className="bg-blue-700 p-3 rounded-lg inline-block mb-4">
                <BarChart2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Gestão Estratégica de Google Ads</h3>
              <p className="text-blue-200 mb-6">
                Campanhas de anúncios otimizadas para maximizar seu ROI. Análise constante, ajustes estratégicos e
                relatórios transparentes para você acompanhar cada resultado.
              </p>
              <Link
                href="/services/google-ads"
                className="flex items-center text-blue-400 hover:text-blue-300 font-medium group"
              >
                Saiba Mais{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </HoverCard>
          </FadeIn>
        </div>
      </section>

      {/* Diferenciais Section */}
      <DiferenciaisSection />

      {/* Projetos Section */}
      <ProjetosSection />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar seu Negócio Digital?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a alcançar novos patamares
              no ambiente digital.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                Solicite um Orçamento Gratuito
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
