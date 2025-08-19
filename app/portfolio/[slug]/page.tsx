
"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  ArrowLeft, 
  Quote, 
  ExternalLink, 
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  Globe,
  Calendar,
  Award,
  BarChart2,
  Zap,
  Star,
  ArrowRight
} from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { ScaleIn } from "@/components/animations/scale-in"
import { AnimatedCounter } from "@/components/animations/animated-counter"
import { PageTransition } from "@/components/page-transition"

// Enhanced project data with updated content
const projects = {
  "laura-rossini-adv": {
    title: "Advocacia Laura Rossini",
    subtitle: "Transformação Digital Jurídica",
    client: "Laura Rossini Advocacia",
    category: "Website + Google Ads",
    website: "www.laurarossini.adv.br",
    duration: "3 meses",
    challenge: `A Advocacia Laura Rossini, especializada em Direito Previdenciário, enfrentava o desafio de aumentar sua visibilidade digital e atrair novos clientes em um mercado jurídico altamente competitivo. O escritório precisava de uma presença online profissional que transmitisse confiança e autoridade, além de campanhas de marketing digital estratégicas para alcançar pessoas que necessitam de seus serviços especializados.`,
    solution: `Desenvolvemos uma solução completa que incluiu:
    
    • **Website Profissional**: Criação de um site institucional moderno e responsivo que reflete a seriedade e profissionalismo do escritório
    • **Otimização para Conversão**: Implementação de formulários estratégicos e call-to-actions para facilitar o contato de potenciais clientes
    • **Campanhas Google Ads**: Desenvolvimento de campanhas segmentadas focadas em palavras-chave relevantes para Direito Previdenciário
    • **SEO Jurídico**: Otimização do site para mecanismos de busca com foco em termos jurídicos específicos
    • **Landing Pages**: Criação de páginas específicas para diferentes serviços oferecidos pelo escritório`,
    results: [
      { text: "Aumento no faturamento mensal", value: 180, suffix: "%" },
      { text: "Crescimento em novos clientes", value: 250, suffix: "%" },
      { text: "Aumento no tráfego qualificado", value: 320, suffix: "%" },
      { text: "Taxa de conversão de leads", value: 15, suffix: "%" },
      { text: "ROI em campanhas Google Ads", value: 420, suffix: "%" },
      { text: "Posicionamento no Google (top 3)", value: 95, suffix: "%" }
    ],
    testimonial: {
      quote: "A parceria com a Design Reverse transformou completamente meu escritório. Em apenas 3 meses, nosso faturamento aumentou 180% e estamos atendendo mais clientes do que conseguíamos antes. O site ficou incrível e as campanhas de Google Ads trouxeram resultados que superaram todas as minhas expectativas. Recomendo fortemente!",
      author: "Laura Rossini",
      position: "Advogada Especialista em Direito Previdenciário"
    },
    images: [
      {
        src: "/laura-rossini-site.png",
        alt: "Website da Advocacia Laura Rossini - Homepage",
        caption: "Website profissional com design moderno e foco em conversão"
      },
      {
        src: "/laura-rossini-ads.png",
        alt: "Campanhas Google Ads Laura Rossini",
        caption: "Campanhas estratégicas no Google Ads com alta taxa de conversão"
      },
      {
        src: "/laura-rossini-adv-logo.JPG",
        alt: "Identidade visual Laura Rossini Advocacia",
        caption: "Identidade visual profissional que transmite confiança"
      }
    ],
    technologies: ["Next.js", "Google Ads", "Google Analytics", "SEO", "WordPress"],
    services: ["Website Institucional", "Google Ads", "SEO", "Landing Pages", "Identidade Visual"]
  },
  
  "odontologia-zorzzela": {
    title: "Odontologia Zorzzela",
    subtitle: "Revolução Digital na Odontologia",
    client: "Odontologia Zorzzela",
    category: "Website + Marketing Digital",
    website: "www.odontologiazorzzela.com.br",
    duration: "2 meses",
    challenge: `A Odontologia Zorzzela, clínica odontológica de referência, precisava modernizar sua presença digital para atrair novos pacientes e facilitar o agendamento de consultas. O desafio era criar uma experiência online que transmitisse a qualidade dos serviços prestados, destacando os tratamentos especializados e a expertise da equipe, além de implementar um sistema eficiente de agendamentos online.`,
    solution: `Criamos uma solução digital completa:
    
    • **Website Responsivo**: Desenvolvimento de um site moderno e otimizado para dispositivos móveis
    • **Sistema de Agendamentos**: Implementação de ferramenta online para agendamento de consultas
    • **Showcase de Tratamentos**: Apresentação detalhada dos serviços oferecidos com antes e depois
    • **SEO Local**: Otimização para buscas locais e Google Meu Negócio
    • **Marketing de Conteúdo**: Criação de conteúdo educativo sobre saúde bucal
    • **Integração Social**: Conectividade com redes sociais para ampliar o alcance`,
    results: [
      { text: "Aumento em agendamentos online", value: 280, suffix: "%" },
      { text: "Crescimento em novos pacientes", value: 150, suffix: "%" },
      { text: "Melhoria na taxa de conversão", value: 85, suffix: "%" },
      { text: "Aumento no tráfego do site", value: 200, suffix: "%" },
      { text: "Engajamento nas redes sociais", value: 180, suffix: "%" },
      { text: "Satisfação dos pacientes", value: 95, suffix: "%" }
    ],
    testimonial: {
      quote: "O resultado superou todas as nossas expectativas! O novo site da clínica é simplesmente incrível e os agendamentos online facilitaram muito nossa rotina. Em apenas 15 dias já estávamos com a agenda mais cheia do que conseguíamos atender. A equipe da Design Reverse entendeu perfeitamente nossas necessidades e entregou um trabalho excepcional.",
      author: "Dr. Gustavo Zorzzela",
      position: "Cirurgião-Dentista e Proprietário da Clínica"
    },
    images: [
      {
        src: "/odontologia-zorzzela-home.png",
        alt: "Website Odontologia Zorzzela - Homepage",
        caption: "Website moderno com foco na experiência do paciente"
      },
      {
        src: "/odontologia-zorzzela-logo.png",
        alt: "Logo Odontologia Zorzzela",
        caption: "Identidade visual profissional e moderna"
      },
      {
        src: "/portfolio-gaming-2.png",
        alt: "Página de serviços odontológicos",
        caption: "Apresentação clara dos tratamentos oferecidos"
      }
    ],
    technologies: ["WordPress", "PHP", "MySQL", "SEO", "Google Analytics"],
    services: ["Website Responsivo", "Sistema de Agendamentos", "SEO Local", "Marketing Digital", "Gestão de Redes Sociais"]
  },

  "londrina-epis": {
    title: "Londrina EPIs",
    subtitle: "E-commerce que Revolucionou as Vendas",
    client: "Londrina EPIs",
    category: "E-commerce + Marketing Digital",
    website: "www.londrinaepis.com.br",
    duration: "4 meses",
    challenge: `A Londrina EPIs, empresa especializada em Equipamentos de Proteção Individual, precisava expandir suas vendas para o ambiente digital. O desafio era criar um e-commerce robusto que facilitasse a compra de EPIs por empresas e profissionais, com um catálogo organizado por categorias, certificações de qualidade visíveis e integração com diversos meios de pagamento e entrega.`,
    solution: `Desenvolvemos uma plataforma e-commerce completa:
    
    • **E-commerce Profissional**: Plataforma robusta com mais de 1000 produtos catalogados
    • **Organização por Categorias**: Sistema intuitivo de navegação por tipo de EPI
    • **Certificações Visíveis**: Exibição clara de certificados de aprovação dos produtos
    • **Múltiplos Pagamentos**: Integração com PIX, cartões, boleto e parcelamento
    • **Gestão de Frete**: Integração com Melhor Envio e opção de retirada local
    • **SEO E-commerce**: Otimização para vendas online e busca de produtos
    • **B2B Features**: Funcionalidades específicas para vendas corporativas`,
    results: [
      { text: "Crescimento nas vendas online", value: 450, suffix: "%" },
      { text: "Aumento no faturamento total", value: 280, suffix: "%" },
      { text: "Novos clientes corporativos", value: 180, suffix: "%" },
      { text: "Melhoria na conversão", value: 95, suffix: "%" },
      { text: "Produtos catalogados", value: 1000, suffix: "+" },
      { text: "Satisfação dos clientes", value: 98, suffix: "%" }
    ],
    testimonial: {
      quote: "O e-commerce criado pela Design Reverse revolucionou nosso negócio! Em apenas 2 meses, as vendas online superaram nossas vendas físicas. A plataforma é intuitiva, profissional e atende perfeitamente nossas necessidades B2B. Nossos clientes adoraram a facilidade de compra e a organização do catálogo. Investimento que se pagou rapidamente!",
      author: "Ademir Santos",
      position: "CEO da Londrina EPIs"
    },
    images: [
      {
        src: "/ecommerce-londrinaepis.png",
        alt: "E-commerce Londrina EPIs - Homepage",
        caption: "E-commerce profissional com design focado em conversão"
      },
      {
        src: "/londrina-epis-product.png",
        alt: "Página de produto Londrina EPIs",
        caption: "Páginas de produtos detalhadas com certificações"
      },
      {
        src: "/londrina-epis-category.png",
        alt: "Categorias de produtos Londrina EPIs",
        caption: "Organização intuitiva por categorias de EPIs"
      },
      {
        src: "/londrina-epis-google.png",
        alt: "Posicionamento Google Londrina EPIs",
        caption: "Excelente posicionamento nos resultados de busca"
      }
    ],
    technologies: ["WooCommerce", "WordPress", "PHP", "MySQL", "SEO", "Melhor Envio API"],
    services: ["E-commerce", "Catálogo de Produtos", "Integração de Pagamentos", "SEO", "Marketing Digital"]
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return <div>Projeto não encontrado</div>
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0f0f2a] text-white">
        <Navbar variant="dark" />
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <FadeIn direction="left">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-8 transition-colors group"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  Voltar para o Portfólio
                </Link>
              </FadeIn>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <FadeIn direction="up" delay={0.1}>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="bg-blue-600/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="bg-green-600/20 border border-green-400/30 px-4 py-2 rounded-full text-green-300 text-sm font-medium">
                        {project.duration}
                      </span>
                    </div>
                  </FadeIn>
                  
                  <FadeIn direction="up" delay={0.2}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                      {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-200 mb-6">
                      {project.subtitle}
                    </p>
                  </FadeIn>
                  
                  <FadeIn direction="up" delay={0.3}>
                    <div className="flex items-center gap-4 mb-8">
                      <Globe className="h-5 w-5 text-blue-400" />
                      <a 
                        href={`https://${project.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-100 transition-colors underline"
                      >
                        {project.website}
                      </a>
                      <ExternalLink className="h-4 w-4 text-blue-400" />
                    </div>
                  </FadeIn>
                  
                  <FadeIn direction="up" delay={0.4}>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span 
                          key={index}
                          className="bg-purple-600/20 px-3 py-1 rounded-full text-purple-300 text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </FadeIn>
                </div>
                
                <FadeIn direction="right" delay={0.3}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      width={600}
                      height={400}
                      className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/10"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Results Overview */}
        <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="container mx-auto px-4">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Resultados <span className="text-green-400">Extraordinários</span>
              </h2>
            </FadeIn>
            
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {project.results.map((result, index) => (
                <ScaleIn key={index} delay={index * 0.1} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">
                    <AnimatedCounter
                      end={result.value}
                      suffix={result.suffix}
                      delay={0.5 + index * 0.1}
                    />
                  </div>
                  <div className="text-blue-200 text-sm">{result.text}</div>
                </ScaleIn>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <FadeIn direction="left">
                  <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-800/30">
                    <div className="flex items-center gap-3 mb-6">
                      <Target className="h-8 w-8 text-red-400" />
                      <h2 className="text-2xl font-bold text-red-300">O Desafio</h2>
                    </div>
                    <p className="text-blue-200 leading-relaxed text-lg">
                      {project.challenge}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn direction="right" delay={0.2}>
                  <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-800/30">
                    <div className="flex items-center gap-3 mb-6">
                      <Zap className="h-8 w-8 text-green-400" />
                      <h2 className="text-2xl font-bold text-green-300">Nossa Solução</h2>
                    </div>
                    <div className="text-blue-200 leading-relaxed text-lg whitespace-pre-line">
                      {project.solution}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Galeria do <span className="text-purple-400">Projeto</span>
              </h2>
            </FadeIn>
            
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <p className="text-white font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn direction="up">
                <h2 className="text-3xl font-bold mb-8">
                  Tecnologias <span className="text-cyan-400">Utilizadas</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-cyan-600/20 border border-cyan-400/30 px-6 py-3 rounded-full text-cyan-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScaleIn delay={0.2} className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 text-center">
                <Quote className="h-12 w-12 text-blue-400 mx-auto mb-6" />
                <p className="text-xl md:text-2xl italic text-blue-100 mb-8 leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {project.testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white text-lg">{project.testimonial.author}</p>
                    <p className="text-blue-300">{project.testimonial.position}</p>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-green-800 to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para Transformar seu Negócio?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Podemos criar resultados semelhantes ou ainda melhores para sua empresa. 
                Vamos conversar sobre como revolucionar sua presença digital?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] font-bold">
                    Quero Resultados Como Estes
                    <Rocket className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full font-semibold"
                  >
                    Ver Mais Projetos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  )
}
