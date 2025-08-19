import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Google Ads Londrina | Gestão de Campanhas e Anúncios Pagos - Design Reverse",
  description: "Gestão profissional de Google Ads em Londrina. Campanhas otimizadas, ROI maximizado e resultados mensuráveis. +135% aumento em conversões. Análise gratuita!",
  keywords: [
    "google ads londrina",
    "campanhas google londrina", 
    "anúncios pagos londrina",
    "gestão google ads paraná",
    "marketing pago londrina",
    "tráfego pago londrina",
    "campanhas adwords londrina",
    "publicidade online londrina",
    "google shopping londrina",
    "remarketing londrina"
  ],
  openGraph: {
    title: "Google Ads Londrina | Gestão Profissional de Campanhas",
    description: "Campanhas de Google Ads otimizadas em Londrina. ROI maximizado, +135% aumento em conversões. Resultados comprovados.",
    url: "https://designreverse.com.br/services/google-ads",
    images: [
      {
        url: "/google-ads-logo.png",
        width: 1200,
        height: 630,
        alt: "Google Ads Londrina - Gestão de Campanhas",
      },
    ],
  },
  alternates: {
    canonical: "https://designreverse.com.br/services/google-ads",
  },
}
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { HoverCard } from "@/components/animations/hover-card"
import { ScaleIn } from "@/components/animations/scale-in"
import {
  Search,
  BarChart3,
  Target,
  Users,
  CheckCircle2,
  MousePointerClick,
  TrendingUp,
  BarChart4,
  PieChart,
  Layers,
  Smartphone,
  Globe,
  LineChart,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GoogleAdsServicePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="bg-gradient-to-br from-[#3b0764] to-[#4c1d95] text-white">
          <Navbar variant="light" />
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn direction="up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Gestão Estratégica de Google Ads</h1>
                <p className="text-xl text-purple-200">
                  Campanhas otimizadas que maximizam seu ROI e geram resultados mensuráveis para seu negócio.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <FadeIn direction="right">
                  <h2 className="text-3xl font-bold mb-6 text-purple-900">Google Ads que Geram Resultados</h2>
                  <p className="text-lg mb-4">
                    No competitivo ambiente digital atual, estar visível para seu público-alvo no momento certo é
                    essencial. O Google Ads é uma das ferramentas mais poderosas para alcançar potenciais clientes
                    quando eles estão ativamente buscando por produtos ou serviços como os seus.
                  </p>
                  <p className="text-lg mb-6">
                    Nossa equipe especializada em Google Ads desenvolve e gerencia campanhas estratégicas que não apenas
                    aumentam sua visibilidade online, mas também são meticulosamente otimizadas para maximizar
                    conversões e retorno sobre investimento.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Target className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>Segmentação Precisa</span>
                    </div>
                    <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <BarChart3 className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>Otimização Contínua</span>
                    </div>
                    <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <TrendingUp className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>ROI Maximizado</span>
                    </div>
                    <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <LineChart className="h-5 w-5 text-purple-700" />
                      </div>
                      <span>Relatórios Detalhados</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
              <div className="md:w-1/2">
                <ScaleIn delay={0.3}>
                  <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
                    <div className="flex items-center gap-3 mb-6">
                      <Image src="/icone-resultados-reais.png" alt="Google Ads" width={50} height={50} />
                      <div>
                        <h3 className="font-bold text-gray-900">Resultados Reais</h3>
                        <div className="text-sm text-gray-600">Média dos nossos clientes</div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Aumento em Conversões</span>
                          <span className="text-sm font-medium text-green-600">+135%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Redução no CPA</span>
                          <span className="text-sm font-medium text-green-600">-42%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">ROI Médio</span>
                          <span className="text-sm font-medium text-green-600">180%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-purple-600">500Mil+</div>
                        <div className="text-sm text-gray-600">Impressões Gerenciadas</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-purple-600">R$25Mil+</div>
                        <div className="text-sm text-gray-600">Em Mídia Gerenciada</div>
                      </div>
                    </div>
                  </div>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="text-center">
              <h2 className="text-3xl font-bold mb-12 text-purple-900">Nossos Serviços de Google Ads</h2>
            </FadeIn>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
              <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Search className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Campanhas de Pesquisa</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Anúncios de texto estrategicamente posicionados nos resultados de pesquisa do Google, exibidos quando
                  usuários buscam por palavras-chave relevantes para seu negócio.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Segmentação por palavras-chave de alta intenção</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Anúncios otimizados para máxima relevância</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Extensões de anúncio para maior visibilidade</span>
                  </div>
                </div>
              </HoverCard>

              <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Layers className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Campanhas de Display</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Anúncios visuais exibidos em milhões de sites, aplicativos e plataformas da rede de display do Google,
                  aumentando o reconhecimento da marca e alcançando novos públicos.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Segmentação por interesses e comportamentos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Banners e anúncios responsivos otimizados</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Estratégias de branding e performance</span>
                  </div>
                </div>
              </HoverCard>

              <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <MousePointerClick className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Campanhas de Remarketing</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Anúncios direcionados a usuários que já visitaram seu site, mantendo sua marca visível e aumentando
                  significativamente as chances de conversão.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Segmentação por páginas visitadas e ações</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Anúncios personalizados por comportamento</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Estratégias de recuperação de carrinho</span>
                  </div>
                </div>
              </HoverCard>

              <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Smartphone className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Campanhas para Aplicativos</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Anúncios específicos para promover o download e uso de aplicativos m��veis, aumentando a base de
                  usuários e o engajamento.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Otimização para instalações e ações in-app</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Segmentação por tipo de dispositivo e sistema</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Estratégias de aquisição de usuários qualificados</span>
                  </div>
                </div>
              </HoverCard>

              <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Globe className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Campanhas de Shopping</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Anúncios de produtos com imagens, preços e informações da loja, exibidos nos resultados de pesquisa do
                  Google e na aba Shopping.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Otimização do feed de produtos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Estratégias de lances por ROAS</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Segmentação por categorias e produtos</span>
                  </div>
                </div>
              </HoverCard>

              <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Campanhas de Performance Max</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Campanhas automatizadas que utilizam machine learning para exibir seus anúncios em todos os canais do
                  Google, maximizando conversões.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Alcance em todos os canais do Google</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Otimização automática por machine learning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Estratégias avançadas de segmentação</span>
                  </div>
                </div>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="text-center">
              <h2 className="text-3xl font-bold mb-12 text-purple-900">Nosso Processo de Gestão</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-purple-700 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Análise e Planejamento</h3>
                  <p className="text-gray-600">
                    Analisamos seu negócio, concorrência e mercado para desenvolver uma estratégia personalizada que
                    atenda aos seus objetivos específicos.
                  </p>
                </HoverCard>

                <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-purple-700 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Configuração e Lançamento</h3>
                  <p className="text-gray-600">
                    Configuramos meticulosamente suas campanhas com estrutura otimizada, segmentação precisa, anúncios
                    persuasivos e estratégias de lance eficientes.
                  </p>
                </HoverCard>

                <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-purple-700 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Otimização Contínua</h3>
                  <p className="text-gray-600">
                    Monitoramos e otimizamos constantemente suas campanhas, realizando ajustes estratégicos para
                    melhorar o desempenho e maximizar o ROI.
                  </p>
                </HoverCard>

                <HoverCard className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-purple-700 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Relatórios e Análises</h3>
                  <p className="text-gray-600">
                    Fornecemos relatórios detalhados e transparentes sobre o desempenho das campanhas, com insights
                    acionáveis para contínua evolução da estratégia.
                  </p>
                </HoverCard>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <ScaleIn delay={0.3}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <div className="text-purple-600 mb-2">
                        <Target className="h-8 w-8" />
                      </div>
                      <h4 className="text-lg font-bold mb-1">Segmentação Precisa</h4>
                      <p className="text-sm text-gray-600">Alcance exatamente o público certo no momento certo.</p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <div className="text-purple-600 mb-2">
                        <BarChart4 className="h-8 w-8" />
                      </div>
                      <h4 className="text-lg font-bold mb-1">Resultados Mensuráveis</h4>
                      <p className="text-sm text-gray-600">Acompanhe cada centavo investido e seu retorno.</p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <div className="text-purple-600 mb-2">
                        <PieChart className="h-8 w-8" />
                      </div>
                      <h4 className="text-lg font-bold mb-1">Orçamento Flexível</h4>
                      <p className="text-sm text-gray-600">Controle total sobre quanto e quando investir.</p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <div className="text-purple-600 mb-2">
                        <TrendingUp className="h-8 w-8" />
                      </div>
                      <h4 className="text-lg font-bold mb-1">Escalabilidade</h4>
                      <p className="text-sm text-gray-600">Expanda facilmente conforme seu negócio cresce.</p>
                    </div>
                  </div>
                </ScaleIn>
              </div>

              <div className="md:w-1/2">
                <FadeIn direction="left">
                  <h2 className="text-3xl font-bold mb-6 text-purple-900">Por que investir em Google Ads?</h2>
                  <p className="text-lg mb-6">
                    O Google Ads oferece uma combinação única de alcance, precisão e controle que o torna uma das
                    ferramentas de marketing digital mais eficazes disponíveis atualmente.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-purple-600">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Resultados Imediatos</h3>
                        <p className="text-gray-600">
                          Diferente do SEO orgânico, o Google Ads pode gerar tráfego e conversões desde o primeiro dia
                          de campanha.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-purple-600">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Controle Total</h3>
                        <p className="text-gray-600">
                          Defina exatamente quanto deseja investir, quais palavras-chave deseja segmentar e quando suas
                          campanhas devem ser exibidas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-purple-600">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Alcance Massivo</h3>
                        <p className="text-gray-600">
                          O Google processa mais de 5,6 bilhões de pesquisas por dia, oferecendo um potencial de alcance
                          incomparável para seu negócio.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-purple-600">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Dados Precisos</h3>
                        <p className="text-gray-600">
                          Acesso a métricas detalhadas que permitem entender exatamente o que está funcionando e o que
                          pode ser melhorado.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-900">
                  Pacotes de Google Ads
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Escolha o plano ideal para seu negócio com gestão profissional e resultados garantidos
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
                  <p className="text-gray-600">Essencial</p>
                  <p className="text-sm text-gray-500 mb-4">Ideal para negócios locais e profissionais autônomos</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    A partir de <span className="text-blue-600">R$ 950</span>
                  </h3>
                  <p className="text-xs text-gray-400">+ valor de investimento em anúncios</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reunião de alinhamento (briefing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Gestão de até 2 campanhas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Criação e otimização de anúncios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Gestão de palavras-chave</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Relatório mensal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Suporte via email/WhatsApp</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Solicitar Orçamento
                </Button>
              </HoverCard>

              {/* Pacote Pro */}
              <HoverCard className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg border-2 border-purple-200 hover:shadow-xl transition-all relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Pacote Pro
                  </h3>
                  <p className="text-gray-600">Crescimento</p>
                  <p className="text-sm text-gray-500 mb-4">Ideal para pequenas e médias empresas</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    A partir de <span className="text-purple-600">R$ 1.800</span>
                  </h3>
                  <p className="text-xs text-gray-400">+ valor de investimento em anúncios</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tudo do Pacote Start +</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Gestão de até 5 campanhas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Otimização contínua (semanal)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Testes A/B em anúncios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Implementação de remarketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reunião de análise mensal</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  Solicitar Orçamento
                </Button>
              </HoverCard>

              {/* Pacote Premium */}
              <HoverCard className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                <div className="text-center mb-6">
                  <div className="bg-amber-100 p-3 rounded-full inline-block mb-4">
                    <TrendingUp className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Pacote Premium
                  </h3>
                  <p className="text-gray-600">Performance Máxima</p>
                  <p className="text-sm text-gray-500 mb-4">Para empresas com crescimento agressivo</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    A partir de <span className="text-amber-600">R$ 3.500</span>
                  </h3>
                  <p className="text-xs text-gray-400">+ valor de investimento em anúncios</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tudo do Pacote Pro +</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Campanhas ilimitadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Planejamento estratégico completo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Gestão avançada de lances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Google Shopping + GA4</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dashboards em tempo real</span>
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Solicitar Orçamento
                </Button>
              </HoverCard>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn direction="up" className="text-center">
              <h2 className="text-3xl font-bold mb-12 text-purple-900">Perguntas Frequentes</h2>
            </FadeIn>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    Quanto devo investir em Google Ads?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    O investimento ideal varia conforme seu setor, objetivos e concorrência. Recomendamos começar com um
                    orçamento que permita testar adequadamente diferentes abordagens (geralmente a partir de
                    R$1.500/mês) e ajustar com base nos resultados. Durante nossa consulta inicial, forneceremos uma
                    recomendação personalizada baseada na análise do seu mercado específico.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    Quanto tempo leva para ver resultados?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Uma das grandes vantagens do Google Ads é a rapidez dos resultados. Você começará a ver tráfego e
                    impressões imediatamente após o lançamento das campanhas. Para resultados otimizados, o período de
                    aprendizado e ajuste geralmente leva de 2 a 4 semanas, quando começamos a coletar dados suficientes
                    para realizar otimizações estratégicas que maximizam o desempenho.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    Como vocês medem o sucesso das campanhas?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Definimos métricas de sucesso alinhadas aos seus objetivos de negócio, que podem incluir conversões,
                    custo por aquisição (CPA), retorno sobre investimento (ROI), taxa de conversão, entre outras.
                    Fornecemos relatórios detalhados e transparentes que mostram claramente o desempenho das campanhas e
                    o impacto nos resultados do seu negócio.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    O Google Ads funciona para qualquer tipo de negócio?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    O Google Ads pode ser eficaz para praticamente qualquer tipo de negócio, mas a estratégia e o tipo
                    de campanha variam conforme o setor e objetivos. Para e-commerces, campanhas de Shopping e
                    remarketing tendem a ter excelentes resultados. Para serviços locais, campanhas de pesquisa com
                    segmentação geográfica são muito eficazes. Durante nossa análise inicial, identificaremos as
                    melhores estratégias para seu negócio específico.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-all">
                    Qual a diferença entre SEO e Google Ads?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    SEO (Search Engine Optimization) e Google Ads são estratégias complementares. O SEO foca em melhorar
                    seu posicionamento orgânico nos resultados de busca, é uma estratégia de longo prazo com resultados
                    mais duradouros, mas que leva tempo para mostrar resultados significativos. Já o Google Ads oferece
                    resultados imediatos, permite maior controle sobre o posicionamento e segmentação, mas requer
                    investimento contínuo. O ideal é utilizar ambas as estratégias de forma integrada para maximizar sua
                    presença online.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para impulsionar seu negócio com Google Ads?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Entre em contato conosco hoje mesmo para uma consulta gratuita e descubra como podemos ajudar seu
                negócio a alcançar novos patamares com campanhas estratégicas de Google Ads.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                  Solicitar Análise Gratuita de Campanhas
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
