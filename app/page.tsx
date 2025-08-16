import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { ArrowRight, Code, BarChart2, Video } from "lucide-react"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import { HoverCard } from "@/components/animations/hover-card"
import { TextReveal } from "@/components/animations/text-reveal"
import { AnimatedBackground } from "@/components/animations/animated-background"
import { DiferenciaisSection } from "@/components/sections/diferenciais-section"
import { ProjetosSection } from "@/components/sections/projetos-section"

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

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Soluções completas para impulsionar sua presença digital e maximizar seus resultados online.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                href="/services#websites"
                className="flex items-center text-blue-400 hover:text-blue-300 font-medium group"
              >
                Saiba Mais{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </HoverCard>
          </FadeIn>

          {/* Service Card 2 */}
          <FadeIn direction="up" delay={0.3}>
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
                href="/services#google-ads"
                className="flex items-center text-blue-400 hover:text-blue-300 font-medium group"
              >
                Saiba Mais{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </HoverCard>
          </FadeIn>

          {/* Service Card 3 - Drone Marketing */}
          <FadeIn direction="right" delay={0.4}>
            <HoverCard className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm p-8 rounded-xl border border-orange-500/30 hover:border-orange-400/50 transition-all h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-400/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg inline-block mb-4 relative z-10">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-white">Marketing com Drone</h3>
                <div className="bg-orange-400/20 text-orange-300 text-xs px-3 py-1 rounded-full inline-block mb-3 font-semibold animate-pulse">
                  🔥 NOVIDADE QUE ESTÁ BOMBANDO
                </div>
                <p className="text-orange-100 mb-4 text-sm">
                  Imagens aéreas que geram <strong className="text-orange-300">3x mais engajamento</strong> nas redes sociais. 
                  Destaque sua marca com perspectivas únicas que seus concorrentes não têm.
                </p>
                <div className="bg-orange-500/20 p-3 rounded-lg mb-4 border-l-4 border-orange-400">
                  <p className="text-orange-200 text-sm">
                    <strong>Resultados comprovados:</strong> +300% engajamento e +85% conversão em leads
                  </p>
                </div>
              </div>
              <Link
                href="/services#drone-services"
                className="flex items-center text-orange-300 hover:text-orange-200 font-medium group relative z-10"
              >
                Ver Como Funciona{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </HoverCard>
          </FadeIn>
        </div>
      </section>

      {/* Drone Marketing CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative z-10 text-center text-white">
            <FadeIn direction="up">
              <div className="bg-white/20 backdrop-blur-sm inline-block px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-bold">🎯 ESTRATÉGIA QUE ESTÁ REVOLUCIONANDO O MERCADO</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Seus Concorrentes Ainda Usam Fotos Comuns.
                <br />
                <span className="text-yellow-300">E Você?</span>
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                Enquanto sua concorrência investe milhares em anúncios tradicionais, você pode se destacar com 
                <strong className="text-yellow-300"> imagens aéreas profissionais</strong> que geram resultados 3x superiores pelo mesmo custo.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">+300%</div>
                  <div className="text-sm text-orange-100">Mais engajamento nas redes sociais</div>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">+85%</div>
                  <div className="text-sm text-orange-100">Aumento na conversão de leads</div>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">+200%</div>
                  <div className="text-sm text-orange-100">Mais compartilhamentos orgânicos</div>
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact?service=drone">
                  <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                    🚁 Quero Imagens Aéreas Profissionais
                  </button>
                </Link>
                <Link href="/services#drone-services">
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                    Ver Exemplos de Projetos
                  </button>
                </Link>
              </div>
              <p className="text-sm text-orange-200 mt-4">
                ⚡ Consulta gratuita • Piloto certificado ANAC • Resultados garantidos
              </p>
            </FadeIn>
          </div>
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
