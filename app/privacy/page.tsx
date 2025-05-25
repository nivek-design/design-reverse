import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import { TextReveal } from "@/components/animations/text-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Lock, Users, FileText, Mail, Calendar, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  const lastUpdated = "15 de Janeiro de 2024"

  const sections = [
    {
      id: "coleta-dados",
      title: "Coleta de Dados",
      icon: Eye,
      content: [
        "Coletamos informações quando você visita nosso site, preenche formulários de contato, se inscreve em nossa newsletter ou utiliza nossos serviços.",
        "Dados pessoais coletados incluem: nome, e-mail, telefone, empresa, cargo e informações sobre seu projeto.",
        "Dados técnicos incluem: endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e origem do tráfego.",
      ],
    },
    {
      id: "uso-dados",
      title: "Uso dos Dados",
      icon: Users,
      content: [
        "Utilizamos seus dados para responder às suas solicitações e fornecer nossos serviços de marketing digital.",
        "Enviamos comunicações relevantes sobre nossos serviços, novidades e conteúdos educativos (com seu consentimento).",
        "Analisamos o comportamento no site para melhorar a experiência do usuário e otimizar nossos serviços.",
        "Cumprimos obrigações legais e regulamentares aplicáveis ao nosso negócio.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies e Tecnologias",
      icon: FileText,
      content: [
        "Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como você interage com nosso conteúdo.",
        "Cookies de marketing nos ajudam a personalizar anúncios e medir a eficácia de nossas campanhas.",
        "Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.",
        "Utilizamos Google Analytics, Facebook Pixel e outras ferramentas de análise respeitando sua privacidade.",
      ],
    },
    {
      id: "compartilhamento",
      title: "Compartilhamento de Dados",
      icon: Shield,
      content: [
        "Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais.",
        "Podemos compartilhar dados com prestadores de serviços confiáveis que nos ajudam a operar nosso negócio (hospedagem, e-mail marketing, análise).",
        "Todos os parceiros são obrigados a manter a confidencialidade e segurança dos seus dados.",
        "Podemos divulgar informações quando exigido por lei ou para proteger nossos direitos legais.",
      ],
    },
    {
      id: "direitos",
      title: "Seus Direitos",
      icon: Lock,
      content: [
        "Acesso: Você pode solicitar uma cópia dos dados pessoais que mantemos sobre você.",
        "Retificação: Você pode solicitar a correção de dados incorretos ou incompletos.",
        "Exclusão: Você pode solicitar a exclusão dos seus dados pessoais, sujeito a certas limitações legais.",
        "Portabilidade: Você pode solicitar a transferência dos seus dados para outro prestador de serviços.",
        "Oposição: Você pode se opor ao processamento dos seus dados para fins de marketing direto.",
      ],
    },
    {
      id: "seguranca",
      title: "Segurança dos Dados",
      icon: AlertCircle,
      content: [
        "Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.",
        "Utilizamos criptografia SSL/TLS para proteger a transmissão de dados entre seu navegador e nossos servidores.",
        "Nossos sistemas são regularmente atualizados e monitorados para garantir a segurança contínua.",
        "Limitamos o acesso aos dados pessoais apenas aos funcionários que precisam dessas informações para desempenhar suas funções.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar variant="dark" />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <div className="flex items-center justify-center mb-6">
                <Shield className="h-12 w-12 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  <TextReveal text="Política de Privacidade" />
                </h1>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Sua privacidade é fundamental para nós. Esta política explica como coletamos, usamos e protegemos suas
                informações pessoais.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="flex items-center justify-center text-gray-400 mb-8">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Última atualização: {lastUpdated}</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-2xl font-bold mb-8 text-center">Índice</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {sections.map((section, index) => (
                  <Link key={section.id} href={`#${section.id}`} className="block">
                    <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-colors duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <section.icon className="h-6 w-6 text-blue-400 mr-3" />
                          <span className="text-white font-medium">{section.title}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <FadeIn key={section.id} direction="up" delay={index * 0.1}>
                <div id={section.id} className="scroll-mt-24">
                  <Card className="bg-gray-900/50 border-gray-700">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <section.icon className="h-8 w-8 text-blue-400 mr-4" />
                        <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                      </div>

                      <div className="space-y-4">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-300 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30">
                <CardContent className="p-8 text-center">
                  <Mail className="h-12 w-12 text-blue-400 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Dúvidas sobre Privacidade?</h2>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Se você tiver alguma dúvida sobre esta política de privacidade ou sobre como tratamos seus dados
                    pessoais, entre em contato conosco.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center text-gray-300">
                      <Mail className="h-5 w-5 mr-2 text-blue-400" />
                      <span>privacidade@cuttital.com</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-300">
                      <Shield className="h-5 w-5 mr-2 text-blue-400" />
                      <span>Encarregado de Proteção de Dados (DPO)</span>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Entre em Contato</Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* LGPD Compliance */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <AlertCircle className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">Conformidade com a LGPD</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Esta política de privacidade está em conformidade com a Lei Geral de Proteção de Dados (LGPD -
                        Lei 13.709/2018) e outras regulamentações aplicáveis. Nos reservamos o direito de atualizar esta
                        política periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
