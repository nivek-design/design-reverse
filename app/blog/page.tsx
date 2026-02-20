import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { FadeIn } from "@/components/animations/fade-in";
import { HoverCard } from "@/components/animations/hover-card";
import {
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Eye,
  MessageCircle,
  Clock,
  Tag,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Marketing Digital - Dicas e Estratégias | Design Reverse",
  description: "Aprenda as melhores estratégias de marketing digital, SEO, Google Ads e redes sociais com nossos especialistas. Conteúdo atualizado semanalmente.",
  keywords: [
    "blog marketing digital",
    "dicas seo",
    "estratégias google ads",
    "redes sociais",
    "marketing de conteúdo",
    "conversão digital",
    "tendências marketing"
  ],
  openGraph: {
    title: "Blog Design Reverse - Estratégias de Marketing Digital",
    description: "Conteúdo exclusivo sobre marketing digital, cases de sucesso e tendências do mercado.",
    url: "https://designreverse.com.br/blog",
  },
  alternates: {
    canonical: "https://designreverse.com.br/blog",
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Como Aumentar Conversões em 300% com Landing Pages Otimizadas",
      excerpt: "Descubra as técnicas avançadas que usamos para transformar visitantes em clientes pagantes através de landing pages de alta conversão.",
      author: "Equipe Design Reverse",
      date: "2024-01-15",
      readTime: "8 min",
      category: "Conversão",
      image: "/blog/landing-pages-otimizadas.jpg",
      views: 2847,
      comments: 23,
    },
    {
      id: 2,
      title: "Google Ads 2024: Estratégias que Multiplicam ROI",
      excerpt: "As últimas atualizações do Google Ads e como adaptar suas campanhas para maximizar resultados com menor investimento.",
      author: "Especialista em Ads",
      date: "2024-01-12",
      readTime: "12 min",
      category: "Google Ads",
      image: "/blog/google-ads-2024.jpg",
      views: 1923,
      comments: 18,
    },
    {
      id: 3,
      title: "Drone Marketing: O Futuro do Conteúdo Visual",
      excerpt: "Por que empresas que usam filmagem aérea têm 5x mais engajamento e como implementar essa estratégia no seu negócio.",
      author: "Equipe Criativa",
      date: "2024-01-10",
      readTime: "6 min",
      category: "Drone Marketing",
      image: "/blog/drone-marketing-futuro.jpg",
      views: 3456,
      comments: 31,
    },
    {
      id: 4,
      title: "IA no Marketing: Automação que Vende 24/7",
      excerpt: "Como chatbots inteligentes estão revolucionando o atendimento ao cliente e gerando vendas automáticas.",
      author: "Especialista em IA",
      date: "2024-01-08",
      readTime: "10 min",
      category: "Automação IA",
      image: "/blog/ia-marketing-automacao.jpg",
      views: 2134,
      comments: 27,
    },
  ];

  const categories = ["Todos", "Conversão", "Google Ads", "SEO", "Redes Sociais", "Drone Marketing", "Automação IA"];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a29] via-[#1a1a4a] to-[#2a1a5a] text-white">
        <Navbar variant="dark" />

        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Blog de{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Marketing Digital
                  </span>
                </h1>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
                  Estratégias comprovadas, cases reais e insights exclusivos para transformar seu negócio digital
                </p>
              </FadeIn>
            </div>

            {/* Categories Filter */}
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className={`rounded-full px-6 py-2 ${
                      index === 0
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "border-blue-400 text-blue-400 hover:bg-blue-600/10"
                    }`}
                  >
                    <Tag className="mr-2 h-4 w-4" />
                    {category}
                  </Button>
                ))}
              </div>
            </FadeIn>

            {/* Featured Post */}
            <FadeIn direction="up" delay={0.3}>
              <div className="mb-16">
                <HoverCard className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-800/50 hover:border-blue-500/80 transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Destaque
                        </span>
                        <span className="text-blue-300 text-sm">{blogPosts[0].category}</span>
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                      <p className="text-blue-200 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center gap-6 mb-6 text-sm text-blue-300">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {blogPosts[0].author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(blogPosts[0].date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {blogPosts[0].readTime}
                        </div>
                      </div>
                      <Link href={`/blog/${blogPosts[0].id}`}>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Ler Artigo Completo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl"></div>
                    </div>
                  </div>
                </HoverCard>
              </div>
            </FadeIn>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <FadeIn key={post.id} direction="up" delay={0.4 + index * 0.1}>
                  <HoverCard className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all h-full">
                    <div className="aspect-video bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-t-xl"></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {post.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            {post.comments}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 leading-tight">{post.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="h-3 w-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString('pt-BR')}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-600/10">
                          Ler Mais
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </HoverCard>
                </FadeIn>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <FadeIn direction="up" delay={0.8}>
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm p-8 rounded-2xl border border-blue-800/50 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">
                    Receba Estratégias Exclusivas
                  </h3>
                  <p className="text-blue-200 mb-6">
                    Cadastre-se na nossa newsletter e receba semanalmente as melhores dicas de marketing digital
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    />
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
                      Quero Receber
                    </Button>
                  </div>
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
