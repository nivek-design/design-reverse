import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { ScaleIn } from "@/components/animations/scale-in"
import { TextReveal } from "@/components/animations/text-reveal"
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
} from "lucide-react"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#0a0a29] to-[#1a1a4a] text-white">
          <Navbar variant="light" />

          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <FadeIn direction="right">
                  <span className="inline-block px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm font-medium mb-4">
                    Nossa História
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    <TextReveal text="Transformando negócios através do marketing digital" />
                  </h1>
                  <p className="text-xl text-blue-200 mb-8">
                    Nós desconstruímos o marketing digital padrão para desenhar estratégias personalizadas que projetam
                    seu negócio ao extraordinário
                  </p>
                </FadeIn>
              </div>

              <div className="md:w-1/2">
                <ScaleIn delay={0.3}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 blur-lg"></div>
                    <div className="relative grid grid-cols-2 gap-4">
                      <Image
                        src="/business-transformation.png"
                        alt="Transformação de Negócios"
                        width={300}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                      <Image
                        src="/custom-strategy.png"
                        alt="Estratégias Personalizadas"
                        width={300}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                      <Image
                        src="/digital-workflow.png"
                        alt="Fluxo de Trabalho Digital"
                        width={300}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                      <Image
                        src="/breakthrough-innovation.png"
                        alt="Inovação e Breakthrough"
                        width={300}
                        height={300}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </ScaleIn>
              </div>
            </div>
          </div>

          {/* Wave divider */}
          <div className="relative h-20">
            <svg
              className="absolute bottom-0 w-full h-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <FadeIn direction="right">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                    Nossa Jornada
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    <TextReveal text="Uma história de inovação e resultados" />
                  </h2>
                  <div className="space-y-4 text-lg text-gray-700">
                    <p>
                      Fundada em 2023, a Design Reverse nasceu da visão de transformar a maneira como as empresas se
                      conectam com seus clientes no ambiente digital. Começamos pelo marketing digital, determinados a
                      criar estratégias que realmente funcionam.
                    </p>
                    <p>
                      Ao longo dos anos, crescemos consistentemente. Nossa abordagem baseada em dados e resultados nos
                      permitiu construir relacionamentos duradouros com clientes de diversos segmentos.
                    </p>
                    <p>
                      Hoje, somos reconhecidos, ajudando empresas de todos os portes a alcançarem seus objetivos de
                      negócio através de estratégias personalizadas e inovadoras.
                    </p>
                  </div>
                </FadeIn>
              </div>

              <div className="md:w-1/2">
                <ScaleIn delay={0.3}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-10 blur-lg"></div>
                    <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 p-6">
                      <h3 className="text-2xl font-bold mb-6 text-blue-600">Marcos Importantes</h3>

                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-20 text-center">
                            <div className="text-xl font-bold text-blue-600">2023</div>
                            <div className="h-full w-px bg-blue-200 mx-auto mt-2"></div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Fundação da Design Reverse</h4>
                            <p className="text-gray-600">
                              Início das operações com foco em gestão de mídias sociais e SEO.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-20 text-center">
                            <div className="text-xl font-bold text-blue-600">2024</div>
                            <div className="h-full w-px bg-blue-200 mx-auto mt-2"></div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Expansão de Serviços</h4>
                            <p className="text-gray-600">
                              Inclusão de desenvolvimento web e gestão de campanhas Google Ads.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-20 text-center">
                            <div className="text-xl font-bold text-blue-600">2025</div>
                            <div className="h-full w-px bg-blue-200 mx-auto mt-2"></div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Primeiro Grande Projeto</h4>
                            <p className="text-gray-600">Aumentando o nosso faturamento mensal.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  Nossos Princípios
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Missão, Visão e Valores</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Os princípios que guiam nossas decisões e definem quem somos como empresa.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-6">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Missão</h3>
                  <p className="text-gray-700">
                    Transformar a presença digital de nossos clientes em resultados concretos, impulsionando seu
                    crescimento através de estratégias inovadoras e personalizadas de marketing digital.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-6">
                    <Lightbulb className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Visão</h3>
                  <p className="text-gray-700">
                    Ser reconhecida como a agência de marketing digital mais inovadora e eficiente do mercado,
                    estabelecendo novos padrões de excelência e resultados para nossos clientes em todo o mundo.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-6">
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Valores</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Excelência em tudo o que fazemos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Transparência e ética nas relações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Inovação constante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Foco em resultados mensuráveis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Compromisso com o crescimento dos clientes</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  Nossa Equipe
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Conheça os especialistas</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Profissionais apaixonados e altamente qualificados que trabalham incansavelmente para entregar os
                  melhores resultados para nossos clientes.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 - Kevin Araujo */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                  <Image
                    src="/team-member-1.png"
                    alt="Kevin Araujo"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Kevin Araujo</h3>
                      <p className="text-blue-600 font-medium">CEO & Fundador</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    Com mais de 5 anos de experiência na área de ti, especialista em desenvolvimento web e soluções
                    tecnológicas e com uma vaga excelência em marketing digital, Kevin lidera nossa equipe com visão
                    estratégica e paixão por inovação.
                  </p>

                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 - André Araujo */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
                  <Image
                    src="/team-member-2.png"
                    alt="André Araujo"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">André Araujo</h3>
                      <p className="text-purple-600 font-medium">Diretor de Mídia</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    Especialista em planejamento estratégico em campanhas de mídia paga, André desenvolve soluções
                    personalizadas e otimiza investimentos para maximizar o retorno nossos clientes.
                  </p>

                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 - Laura Rossini */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-teal-600"></div>
                  <Image
                    src="/woman-hat.png"
                    alt="Laura Rossini"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-600"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Laura Rossini</h3>
                      <p className="text-teal-600 font-medium">Jurídico</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    Experiência específica com agências de marketing digital ou empresas de tecnologia, Conhecimento
                    prático da LGPD e elaboração e revisão de contratos de prestação de serviços.
                  </p>

                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <FadeIn direction="up" delay={0.5}>
                <p className="text-lg text-gray-700 mb-6">
                  Nossa equipe é composta em diversas áreas, todos comprometidos com a excelência e a inovação.
                </p>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                    Entre em contato com nossa equipe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  Por que nos escolher
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos diferenciais</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  O que nos torna a escolha certa para impulsionar seu negócio no ambiente digital.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Foco em Resultados</h3>
                  <p className="text-gray-700 mb-4">
                    Trabalhamos com metas claras e mensuráveis, garantindo que cada ação gere retorno para seu negócio.
                    Nosso compromisso é com resultados concretos, não apenas métricas vazias.
                  </p>
                  <div className="text-blue-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      <span>ROI médio de 320% para nossos clientes</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Atendimento Personalizado</h3>
                  <p className="text-gray-700 mb-4">
                    Cada cliente é único. Desenvolvemos estratégias sob medida para atender às necessidades específicas
                    do seu negócio, com acompanhamento próximo e comunicação constante.
                  </p>
                  <div className="text-blue-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      <span>97% de taxa de satisfação dos clientes</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Abordagem Integrada</h3>
                  <p className="text-gray-700 mb-4">
                    Integramos diferentes canais e estratégias para criar uma presença digital coesa e eficiente.
                    Trabalhamos com uma visão holística do seu negócio e do mercado.
                  </p>
                  <div className="text-blue-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      <span>Aumento médio de 85% em conversões</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Equipe Especializada</h3>
                  <p className="text-gray-700 mb-4">
                    Nossos profissionais são altamente qualificados e certificados nas principais plataformas de
                    marketing digital, garantindo expertise técnica e estratégica.
                  </p>
                  <div className="text-blue-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      <span>15+ especialistas certificados</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.5}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tecnologia de Ponta</h3>
                  <p className="text-gray-700 mb-4">
                    Utilizamos as ferramentas e tecnologias mais avançadas do mercado para garantir os melhores
                    resultados, mantendo-nos sempre atualizados com as últimas tendências.
                  </p>
                  <div className="text-blue-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      <span>12+ ferramentas premium de análise</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.6}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Transparência Total</h3>
                  <p className="text-gray-700 mb-4">
                    Relatórios detalhados e comunicação clara para que você acompanhe cada etapa do processo e os
                    resultados obtidos, sem caixas-pretas ou métricas confusas.
                  </p>
                  <div className="text-blue-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      <span>Acesso 24/7 a dashboards em tempo real</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  Parceiros
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Empresas que confiam em nós</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Orgulhosamente trabalhamos com empresas de diversos segmentos, ajudando-as a alcançar seus objetivos
                  de negócio.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <FadeIn direction="up" delay={0.1} className="flex justify-center">
                <Image
                  src="/citene-logo.png"
                  alt="Citene"
                  width={150}
                  height={80}
                  className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </FadeIn>
              <FadeIn direction="up" delay={0.2} className="flex justify-center">
                <Image
                  src="/crelire-logo.png"
                  alt="Crelire"
                  width={150}
                  height={80}
                  className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </FadeIn>
              <FadeIn direction="up" delay={0.3} className="flex justify-center">
                <Image
                  src="/wtark-logo.png"
                  alt="Wtark"
                  width={150}
                  height={80}
                  className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </FadeIn>
              <FadeIn direction="up" delay={0.4} className="flex justify-center">
                <Image
                  src="/ecami-logo.png"
                  alt="Ecami"
                  width={150}
                  height={80}
                  className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <TextReveal text="Pronto para transformar sua presença digital?" />
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Entre em contato conosco hoje mesmo para uma consulta gratuita e descubra como podemos ajudar seu
                negócio a alcançar novos patamares no ambiente digital.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                  Fale com um especialista
                </Button>
              </Link>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
