"use client"
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
  "ecommerce-londrina-epis": {
    title: "E-commerce",
    client: "Londrina Epi`s",
    category: "Website",
    challenge:
      " Nosso objetivo é desenvolver um e-commerce para a empresa de EPIs de Londrina que reflita fielmente a identidade da marca, incorporando suas cores e elementos visuais.",
    solution:
      "Realizamos um Planejamento e Estratégia para entender as necessidades do cliente e do público-alvo. Em seguida, criamos um Design Visual que incorpora as cores e elementos da marca, construimos o catálogo de produtos",
    results: [
      { text: "Estruturamos o 100 catálogo de produtos por categorias e com Certificados de Aprovação ", value: 100},
      { text: "Integração dos meios de pagamentos: Vindi, PIX, Boleto ", value: 100 },
      { text: "Configurado frete: Integrar com Melhor Envio e/ou Frenet, e ativar a opção de Retirada no Local ", value: 100 },
      { text: "Configurar SEO (títulos e descrições) em páginas e produtos ", value: 100 },
      { text: "Integrar com ferramentas de marketing (E-mail, Instagram Shopping). ", value: 100 },

    ],
    testimonial: {
      quote:
        "O redesign do nosso e-commerce transformou completamente nosso negócio online. A equipe da Reverse entendeu perfeitamente nossas necessidades e entregou um site que não apenas é bonito, mas também converte muito melhor. Nossos clientes adoraram a nova experiência!",
      author: "Ademir",
      position: "CEO, Londrina Epi`s",
    },
    images: [
      {
        src: "/ecommerce-londrinaepis.png",
        alt: "e-commerce londrina epi`s",
      },
      {
        src: "/londrina-epis-product.png",
        alt: "Homepage do e-commerce",
      },
      {
        src: "/londrina-epis-category.png",
        alt: "Página de produto",
      },
      {
        src: "/londrina-epis-google.png",
        alt: "pesquisa londrain epi`s google",
      },
    ],
  },
  "odontologia-zorzzela": {
    title: "Landing Page Odontologia",
    client: "Odontologia Zorzzela",
    category: "Website",
    challenge:
      "A Odontologia Zorzzela precisava de uma landing page que transmitisse confiança e profissionalismo, destacando seus serviços de forma clara e atraente. O objetivo era aumentar o número de agendamentos online e melhorar a presença digital da clínica.",
    solution:
      "Desenvolvemos uma landing page otimizada para conversão, com um design clean e moderno. Utilizamos cores que transmitem confiança e aplicamos técnicas de SEO para melhorar a visibilidade nos motores de busca. A página inclui seções detalhadas sobre os serviços, depoimentos de pacientes e um formulário de agendamento fácil de usar.",
    results: [
      { text: "Crescimento na visibilidade da odontologia na internet 85% ", value: 85 },
      { text: "", value: 60 },
    ],
    testimonial: {
      quote:
        "A landing page criada pela Reverse superou nossas expectativas! O design é incrível e os resultados falam por si só. Tivemos um aumento significativo no número de agendamentos e nossos pacientes elogiam a facilidade de uso do site. Recomendo fortemente!",
      author: "Gustavo Zorzzela",
      position: "CEO, Odontologia Zorzzela",
    },
    images: [
      {
        src: "/odontologia-zorzzela-home.png",
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
  "laura-rossini-adv": {
    title: "Campanha Google Ads",
    client: "Laura Rossini Advocacia",
    category: "Google Ads",
    challenge:
      "A advocacia da laura rossini precisava de uma campanha de Google Ads para promover seus serviços jurídicos especializados em direito previdenciario. O objetivo era aumentar a visibilidade online e atrair novos clientes em um mercado altamente competitivo.",
    solution:
      "Desenvolvemos uma campanha de Google Ads focada em palavras-chave relevantes para o nicho de direito previdenciário. Criamos anúncios atraentes e segmentados, além de otimizar a landing page para maximizar a taxa de conversão. Acompanhamos de perto o desempenho da campanha, ajustando as estratégias conforme necessário para garantir os melhores resultados.",
    results: [
      { text: "ROI de 180% sobre o investimento em publicidade ", value: 180 },
      { text: "Aumento de 70% no tráfego qualificado para o site ", value: 70 },
    ],
    testimonial: {
      quote:
        "A campanha de Google Ads desenvolvida pela Design reverse foi um sucesso absoluto! Conseguimos vender praticamente toda a coleção em tempo recorde e com um retorno sobre investimento que superou todas as nossas expectativas. A equipe é extremamente profissional e atenta aos detalhes.",
      author: "Laura Rossini",
      position: "CEO, Laura Rossini Advocacia",
    },
    images: [
      {
        src: "/laura-rossini-site.png",
        alt: "Anúncios de display da campanha",
      },
      {
        src: "/laura-rossini-adv-logo.JPG",
        alt: "Resultados da campanha no Google Ads",
      },
      {
        src: "/laura-rossini-ads.png",
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
            <StaggerChildren className="  gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={800}
                    height={500}
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
