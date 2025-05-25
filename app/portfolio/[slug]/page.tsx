import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Quote } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { ScaleIn } from "@/components/animations/scale-in"
import { AnimatedCounter } from "@/components/animations/animated-counter"
import { PageTransition } from "@/components/page-transition"

// This would normally come from a database or CMS
const projects = {
  "ecommerce-redesign": {
    title: "Redesign de E-commerce",
    client: "Fashion Store",
    category: "Website",
    challenge:
      "A Fashion Store enfrentava problemas com altas taxas de abandono de carrinho e baixa conversão em dispositivos móveis. O site antigo tinha uma interface desatualizada e problemas de usabilidade que afetavam diretamente as vendas.",
    solution:
      "Desenvolvemos um novo e-commerce completamente responsivo com foco na experiência do usuário. Implementamos um checkout simplificado, melhoramos a navegação por categorias e criamos páginas de produto otimizadas para conversão. Integramos sistemas de pagamento seguros e implementamos recursos de cross-selling inteligentes.",
    results: [
      { text: "Aumento de 65% nas vendas via dispositivos móveis", value: 65 },
      { text: "Redução de 40% na taxa de abandono de carrinho", value: 40 },
      { text: "Crescimento de 28% no valor médio dos pedidos", value: 28 },
      { text: "Melhoria de 52% no tempo de carregamento das páginas", value: 52 },
    ],
    testimonial: {
      quote:
        "O redesign do nosso e-commerce transformou completamente nosso negócio online. A equipe da Cuttital entendeu perfeitamente nossas necessidades e entregou um site que não apenas é bonito, mas também converte muito melhor. Nossos clientes adoraram a nova experiência!",
      author: "Maria Silva",
      position: "Diretora de Marketing, Fashion Store",
    },
    images: [
      {
        src: "/portfolio-ecommerce-1.png",
        alt: "Homepage do e-commerce",
      },
      {
        src: "/portfolio-ecommerce-2.png",
        alt: "Página de produto",
      },
      {
        src: "/portfolio-ecommerce-3.png",
        alt: "Checkout mobile",
      },
    ],
  },
  "gaming-portal": {
    title: "Portal de Jogos Online",
    client: "GameZone",
    category: "Website",
    challenge:
      "A GameZone precisava de uma plataforma robusta para apresentar seu catálogo de jogos, com recursos avançados de filtragem, sistema de avaliações e integração com sua comunidade de jogadores.",
    solution:
      "Criamos um portal completo com design imersivo inspirado no universo gamer. Implementamos um sistema avançado de busca e filtragem, perfis de usuário personalizáveis, sistema de avaliação e comentários, e integrações com plataformas de streaming como Twitch e YouTube.",
    results: [
      { text: "Aumento de 120% no tempo médio de permanência no site", value: 120 },
      { text: "Crescimento de 85% na base de usuários cadastrados", value: 85 },
      { text: "Mais de 10.000 avaliações de jogos no primeiro mês", value: 10000 },
      { text: "Redução de 60% na taxa de rejeição", value: 60 },
    ],
    testimonial: {
      quote:
        "O portal superou todas as nossas expectativas! A Cuttital conseguiu capturar perfeitamente a essência do nosso público gamer e criar uma plataforma que não só é visualmente impressionante, mas também extremamente funcional e envolvente.",
      author: "Pedro Almeida",
      position: "CEO, GameZone",
    },
    images: [
      {
        src: "/portfolio-gaming-1.png",
        alt: "Homepage do portal de jogos",
      },
      {
        src: "/portfolio-gaming-2.png",
        alt: "Página de detalhes do jogo",
      },
      {
        src: "/portfolio-gaming-3.png",
        alt: "Perfil de usuário",
      },
    ],
  },
  "fashion-campaign": {
    title: "Campanha de Moda Sazonal",
    client: "Elegance Boutique",
    category: "Google Ads",
    challenge:
      "A Elegance Boutique precisava aumentar as vendas de sua nova coleção sazonal em um mercado altamente competitivo, com um orçamento limitado e prazo curto antes do início da temporada.",
    solution:
      "Desenvolvemos uma estratégia multicanal de Google Ads focada em segmentação precisa. Criamos campanhas de Search, Display e Shopping com anúncios altamente personalizados para diferentes segmentos de público. Implementamos remarketing dinâmico e otimizamos as campanhas diariamente com base em dados de performance.",
    results: [
      { text: "ROI de 780% sobre o investimento em publicidade", value: 780 },
      { text: "Redução de 35% no custo por aquisição", value: 35 },
      { text: "Aumento de 95% no tráfego qualificado para o site", value: 95 },
      { text: "Crescimento de 150% nas vendas da coleção em comparação com o ano anterior", value: 150 },
    ],
    testimonial: {
      quote:
        "A campanha de Google Ads desenvolvida pela Cuttital foi um sucesso absoluto! Conseguimos vender praticamente toda a coleção em tempo recorde e com um retorno sobre investimento que superou todas as nossas expectativas. A equipe é extremamente profissional e atenta aos detalhes.",
      author: "Carolina Mendes",
      position: "Proprietária, Elegance Boutique",
    },
    images: [
      {
        src: "/portfolio-fashion-1.png",
        alt: "Anúncios de display da campanha",
      },
      {
        src: "/portfolio-fashion-2.png",
        alt: "Resultados da campanha no Google Ads",
      },
      {
        src: "/portfolio-fashion-3.png",
        alt: "Landing page da coleção",
      },
    ],
  },
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return <div>Projeto não encontrado</div>
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="bg-gradient-to-br from-[#0a0a29] to-[#1a1a4a] text-white">
          <Navbar variant="light" />
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="left">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-6 transition-colors group"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />{" "}
                  Voltar para o Portfólio
                </Link>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-blue-700/50 px-3 py-1 rounded-full text-sm">{project.category}</span>
                  <span className="bg-blue-700/50 px-3 py-1 rounded-full text-sm">Cliente: {project.client}</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Project Images */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <FadeIn direction="up">
                  <h2 className="text-2xl font-bold mb-4 text-blue-900">O Desafio</h2>
                  <p className="text-lg text-gray-700">{project.challenge}</p>
                </FadeIn>
              </div>

              <div className="mb-12">
                <FadeIn direction="up" delay={0.2}>
                  <h2 className="text-2xl font-bold mb-4 text-blue-900">Nossa Solução</h2>
                  <p className="text-lg text-gray-700">{project.solution}</p>
                </FadeIn>
              </div>

              <div className="mb-12">
                <FadeIn direction="up" delay={0.3}>
                  <h2 className="text-2xl font-bold mb-4 text-blue-900">Resultados Alcançados</h2>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                          <div className="bg-blue-600 w-3 h-3 rounded-full"></div>
                        </div>
                        <span className="text-lg text-gray-700">
                          {result.text.replace(/\d+%/, "").replace(/\d+/, "")}
                          <AnimatedCounter
                            from={0}
                            to={result.value}
                            delay={0.5 + index * 0.1}
                            formatter={(value) => {
                              if (result.text.includes("%")) {
                                return `${Math.round(value)}%`
                              } else if (result.value >= 1000) {
                                return `${Math.round(value).toLocaleString()}`
                              } else {
                                return `${Math.round(value)}`
                              }
                            }}
                            className="font-bold text-blue-700"
                          />
                        </span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>

              {/* Testimonial */}
              <ScaleIn delay={0.4} className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-12">
                <Quote className="h-10 w-10 text-blue-200 mb-4" />
                <p className="text-xl italic text-gray-700 mb-6">{project.testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-700 font-bold text-xl">{project.testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{project.testimonial.author}</p>
                    <p className="text-gray-600">{project.testimonial.position}</p>
                  </div>
                </div>
              </ScaleIn>

              {/* CTA */}
              <FadeIn direction="up" delay={0.5} className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">Gostou do que viu?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Podemos criar resultados semelhantes para o seu negócio. Entre em contato conosco hoje mesmo!
                </p>
                <Link href="/contact">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                    Comece seu Projeto Conosco
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
