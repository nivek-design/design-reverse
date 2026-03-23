"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Check,
  Share2,
  Copy,
  Globe,
  Palette,
  FileText,
  Mail,
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  Phone,
  CheckCircle2,
  MessageCircle,
  BarChart3,
  Tag,
  Printer,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "5543988125184"

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

export default function OrcamentoDrGiovanneFelipe() {
  const [selectedOption, setSelectedOption] = useState<"A" | "B" | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<"vista" | "parcelado" | null>(null)
  const [copied, setCopied] = useState(false)
  const [approved, setApproved] = useState(false)

  function getDiscountedValue(value: number) {
    return value * 0.9
  }

  function getInstallmentValue(value: number, installments: number) {
    return value / installments
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Proposta Comercial - Dr. Giovanne Felipe | Design Reverse",
          text: "Confira a proposta comercial da Design Reverse para Dr. Giovanne Felipe.",
          url: window.location.href,
        })
      } catch {
        handleCopyLink()
      }
    } else {
      handleCopyLink()
    }
  }

  const handleApprove = () => {
    if (!selectedOption || !paymentMethod) return
    setApproved(true)

    const baseValue = selectedOption === "A" ? optionA.value : optionB.value
    const optionLabel = selectedOption === "A" ? "Opcao A - Essencial" : "Opcao B - Completa"

    let paymentInfo = ""
    if (paymentMethod === "vista") {
      const discounted = getDiscountedValue(baseValue)
      paymentInfo = `Pagamento: A vista com 10% de desconto\nValor original: ${formatCurrency(baseValue)}\nValor com desconto: ${formatCurrency(discounted)}`
    } else {
      const installment = getInstallmentValue(baseValue, 10)
      paymentInfo = `Pagamento: Parcelado em 10x sem juros no cartao de credito\nValor total: ${formatCurrency(baseValue)}\nParcela: 10x de ${formatCurrency(installment)}`
    }

    const message = encodeURIComponent(
      `*APROVACAO DE ORCAMENTO*\n\n` +
      `Cliente: Dr. Giovanne Felipe\n` +
      `Segmento: Odontologia\n` +
      `Data: ${new Date().toLocaleDateString("pt-BR")}\n\n` +
      `Opcao escolhida: ${optionLabel}\n` +
      `${paymentInfo}\n\n` +
      `Prazo estimado de entrega: 15 a 25 dias uteis\n\n` +
      `Confirmo a aprovacao desta proposta comercial conforme apresentado no link:\n` +
      `${typeof window !== "undefined" ? window.location.href : ""}\n\n` +
      `Aguardo proximo passo para iniciar o projeto.`
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
  }

  const phases = [
    {
      number: 1,
      title: "Criacao do Site Completo",
      icon: <Globe className="h-6 w-6" />,
      color: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-500/30",
      bgColor: "bg-cyan-900/20",
      value: 3500,
      items: [
        "Planejamento estrategico e arquitetura de informacao",
        "Design personalizado e responsivo (desktop, tablet e mobile)",
        "Desenvolvimento completo com ate 8 paginas (Home, Sobre, Servicos, Especialidades, Depoimentos, Blog, Contato, Localizacao)",
        "Formulario de agendamento integrado com WhatsApp",
        "Galeria de casos e procedimentos (antes/depois)",
        "Otimizacao SEO on-page para buscas locais",
        "Certificado SSL e hospedagem inclusa por 1 ano",
      ],
    },
    {
      number: 2,
      title: "Google Analytics e Tags",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-green-600 to-emerald-600",
      borderColor: "border-green-500/30",
      bgColor: "bg-green-900/20",
      value: 800,
      items: [
        "Configuracao completa do Google Analytics 4",
        "Instalacao do Google Tag Manager",
        "Configuracao de eventos de conversao (cliques em WhatsApp, formularios, telefone)",
        "Rastreamento de comportamento do usuario",
        "Dashboard personalizado com metricas importantes",
        "Configuracao de metas e funis de conversao",
      ],
    },
    {
      number: 3,
      title: "Criacao da Marca e Logotipo",
      icon: <Sparkles className="h-6 w-6" />,
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-500/30",
      bgColor: "bg-purple-900/20",
      value: 1500,
      items: [
        "Briefing e pesquisa de mercado odontologico",
        "Desenvolvimento de 3 propostas de logotipo",
        "Refinamento e ajustes da opcao escolhida",
        "Versoes do logotipo (horizontal, vertical, simplificado)",
        "Arquivos em alta resolucao (PNG, JPG, PDF, SVG)",
        "Manual de uso basico da marca",
      ],
    },
    {
      number: 4,
      title: "Identidade Visual Completa",
      icon: <Palette className="h-6 w-6" />,
      color: "from-orange-600 to-amber-600",
      borderColor: "border-orange-500/30",
      bgColor: "bg-orange-900/20",
      value: 1200,
      items: [
        "Definicao de paleta de cores institucional",
        "Selecao de tipografias primaria e secundaria",
        "Criacao de elementos graficos e patterns",
        "Guia de aplicacao da marca",
        "Templates para redes sociais (posts e stories)",
        "Assinatura de e-mail profissional",
      ],
    },
    {
      number: 5,
      title: "Papelaria Corporativa",
      icon: <Printer className="h-6 w-6" />,
      color: "from-rose-600 to-red-600",
      borderColor: "border-rose-500/30",
      bgColor: "bg-rose-900/20",
      value: 900,
      items: [
        "Cartao de visita (frente e verso)",
        "Papel timbrado A4",
        "Envelope carta e oficio",
        "Pasta institucional",
        "Receituario medico personalizado",
        "Arquivos prontos para impressao (CMYK)",
      ],
    },
    {
      number: 6,
      title: "Configuracao de E-mail Profissional",
      icon: <Mail className="h-6 w-6" />,
      color: "from-blue-600 to-indigo-600",
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-900/20",
      value: 400,
      items: [
        "Configuracao de e-mail com dominio proprio (ex: contato@drgiovanne.com.br)",
        "Ate 3 contas de e-mail",
        "Configuracao em dispositivos (celular e computador)",
        "Assinatura de e-mail profissional com logo",
        "Orientacao de uso e boas praticas",
      ],
    },
  ]

  const optionA = {
    label: "Opcao A - Essencial",
    subtitle: "Site + Analytics + Marca + Identidade",
    value: 7000,
    description: "Pacote ideal para estabelecer presenca digital profissional com marca propria e site completo.",
    phases: [1, 2, 3, 4],
    highlight: false,
  }

  const optionB = {
    label: "Opcao B - Completa",
    subtitle: "Tudo da Opcao A + Papelaria + E-mail",
    value: 8300,
    description: "Solucao completa com todos os materiais necessarios para uma presenca profissional integrada online e offline.",
    phases: [1, 2, 3, 4, 5, 6],
    highlight: true,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d2137] to-[#0a1628] text-white">
      {/* Header minimalista */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/design-reverse-logotipo-sem-fundo.png"
            alt="Design Reverse Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <div>
            <div className="font-bold text-lg leading-tight">DESIGN REVERSE</div>
            <div className="text-xs text-cyan-300 leading-tight">MARKETING AGENCY</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={handleShare}
            variant="outline"
            className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-600/10 rounded-lg text-sm gap-2"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Compartilhar</span>
          </Button>
          <Button
            onClick={handleCopyLink}
            variant="outline"
            className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-600/10 rounded-lg text-sm gap-2"
          >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
            <span className="hidden sm:inline">{copied ? "Copiado!" : "Copiar Link"}</span>
          </Button>
        </div>
      </header>

      {/* Hero da proposta */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-600/20 border border-cyan-400/30 px-4 py-2 rounded-full text-cyan-300 text-sm font-medium mb-8">
            <FileText className="h-4 w-4" />
            Proposta Comercial
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Presenca Digital{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Completa
            </span>
          </h1>

          <p className="text-xl text-cyan-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Proposta personalizada para criar uma presenca digital profissional e marcante para o consultorio do Dr. Giovanne Felipe, com site moderno, identidade visual completa e materiais de comunicacao.
          </p>

          {/* Info do cliente */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Building2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
              <span className="text-cyan-200 text-sm">Dr. Giovanne Felipe - Odontologia</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Calendar className="h-5 w-5 text-cyan-400 flex-shrink-0" />
              <span className="text-cyan-200 text-sm">23 de Marco de 2026</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Tag className="h-5 w-5 text-cyan-400 flex-shrink-0" />
              <span className="text-cyan-200 text-sm">Validade: 15 dias</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Objetivo do Projeto */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-cyan-900/30 to-teal-900/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-cyan-500/20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">O Projeto</h2>
          <p className="text-cyan-200 text-lg leading-relaxed">
            O objetivo deste projeto e criar uma identidade visual profissional e um site moderno para o consultorio odontologico do Dr. Giovanne Felipe. Vamos desenvolver uma{" "}
            <span className="text-white font-semibold">marca marcante</span>,{" "}
            <span className="text-white font-semibold">site responsivo</span> com integracao para agendamentos, e todos os materiais necessarios para uma comunicacao visual consistente e profissional.
          </p>
        </motion.div>
      </section>

      {/* Fases do Projeto */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Escopo dos{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Servicos
            </span>
          </h2>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`${phase.bgColor} backdrop-blur-sm p-6 md:p-8 rounded-2xl border ${phase.borderColor} relative overflow-hidden`}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className={`bg-gradient-to-r ${phase.color} p-3 md:p-4 rounded-xl flex-shrink-0`}>
                    {phase.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <h3 className="text-xl md:text-2xl font-bold">
                        Fase {phase.number}: {phase.title}
                      </h3>
                      <span className="text-2xl font-bold text-white whitespace-nowrap">
                        {formatCurrency(phase.value)}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-cyan-200 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Opcoes de Investimento */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Opcoes de{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Investimento
            </span>
          </h2>
          <p className="text-cyan-200 text-center mb-12 max-w-2xl mx-auto">
            Selecione a opcao que melhor atende as suas necessidades
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Opcao A */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedOption("A")}
              className={`cursor-pointer relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                selectedOption === "A"
                  ? "border-cyan-400 bg-cyan-900/30 shadow-lg shadow-cyan-500/20"
                  : "border-white/10 bg-white/5 hover:border-cyan-400/50"
              }`}
            >
              {selectedOption === "A" && (
                <div className="absolute top-4 right-4">
                  <div className="bg-cyan-500 rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{optionA.label}</h3>
              <p className="text-cyan-300 text-sm mb-4">{optionA.subtitle}</p>
              <div className="text-4xl font-bold text-cyan-400 mb-1">
                {formatCurrency(optionA.value)}
              </div>
              <div className="flex flex-col gap-1 mb-6">
                <p className="text-emerald-400 text-sm font-medium">
                  A vista: {formatCurrency(getDiscountedValue(optionA.value))} (10% off)
                </p>
                <p className="text-cyan-300 text-sm">
                  ou 10x de {formatCurrency(getInstallmentValue(optionA.value, 10))} sem juros
                </p>
              </div>
              <p className="text-cyan-200 mb-6 leading-relaxed">{optionA.description}</p>
              <div className="space-y-2">
                {phases.filter(p => optionA.phases.includes(p.number)).map(p => (
                  <div key={p.number} className="flex items-center gap-2 text-sm text-cyan-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    Fase {p.number}: {p.title}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Opcao B */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedOption("B")}
              className={`cursor-pointer relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                selectedOption === "B"
                  ? "border-emerald-400 bg-emerald-900/30 shadow-lg shadow-emerald-500/20"
                  : "border-white/10 bg-white/5 hover:border-emerald-400/50"
              }`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  RECOMENDADA
                </span>
              </div>
              {selectedOption === "B" && (
                <div className="absolute top-4 right-4">
                  <div className="bg-emerald-500 rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{optionB.label}</h3>
              <p className="text-emerald-300 text-sm mb-4">{optionB.subtitle}</p>
              <div className="text-4xl font-bold text-emerald-400 mb-1">
                {formatCurrency(optionB.value)}
              </div>
              <div className="flex flex-col gap-1 mb-6">
                <p className="text-emerald-400 text-sm font-medium">
                  A vista: {formatCurrency(getDiscountedValue(optionB.value))} (10% off)
                </p>
                <p className="text-emerald-300 text-sm">
                  ou 10x de {formatCurrency(getInstallmentValue(optionB.value, 10))} sem juros
                </p>
              </div>
              <p className="text-cyan-200 mb-6 leading-relaxed">{optionB.description}</p>
              <div className="space-y-2">
                {phases.filter(p => optionB.phases.includes(p.number)).map(p => (
                  <div key={p.number} className="flex items-center gap-2 text-sm text-cyan-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    Fase {p.number}: {p.title}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Forma de Pagamento */}
      {selectedOption && (
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Forma de{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Pagamento
              </span>
            </h2>
            <p className="text-cyan-200 text-center mb-10 max-w-2xl mx-auto">
              Escolha a forma de pagamento que melhor se encaixa para voce
            </p>

            {(() => {
              const baseValue = selectedOption === "A" ? optionA.value : optionB.value
              const discountedValue = getDiscountedValue(baseValue)
              const savings = baseValue - discountedValue
              const installmentValue = getInstallmentValue(baseValue, 10)

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* A Vista */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setPaymentMethod("vista")}
                    className={`cursor-pointer relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                      paymentMethod === "vista"
                        ? "border-emerald-400 bg-emerald-900/30 shadow-lg shadow-emerald-500/20"
                        : "border-white/10 bg-white/5 hover:border-emerald-400/50"
                    }`}
                  >
                    {paymentMethod === "vista" && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-emerald-500 rounded-full p-1">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    )}
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 rounded-full text-emerald-300 text-xs font-medium mb-4">
                      10% de desconto
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Pagamento a Vista</h3>
                    <div className="mb-2">
                      <span className="text-cyan-400 line-through text-lg">
                        {formatCurrency(baseValue)}
                      </span>
                    </div>
                    <div className="text-4xl font-bold text-emerald-400 mb-2">
                      {formatCurrency(discountedValue)}
                    </div>
                    <p className="text-emerald-300 text-sm">
                      Economia de {formatCurrency(savings)}
                    </p>
                  </motion.div>

                  {/* Parcelado */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setPaymentMethod("parcelado")}
                    className={`cursor-pointer relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                      paymentMethod === "parcelado"
                        ? "border-cyan-400 bg-cyan-900/30 shadow-lg shadow-cyan-500/20"
                        : "border-white/10 bg-white/5 hover:border-cyan-400/50"
                    }`}
                  >
                    {paymentMethod === "parcelado" && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-cyan-500 rounded-full p-1">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    )}
                    <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/40 px-3 py-1 rounded-full text-cyan-300 text-xs font-medium mb-4">
                      Sem juros
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Parcelado no Cartao</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      10x de {formatCurrency(installmentValue)}
                    </div>
                    <p className="text-cyan-300 text-sm">
                      Valor total: {formatCurrency(baseValue)}
                    </p>
                  </motion.div>
                </div>
              )
            })()}
          </motion.div>
        </section>
      )}

      {/* Prazo de Entrega */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-teal-900/30 to-cyan-900/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-teal-500/20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Prazo de Entrega</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-600/30 p-3 rounded-xl">
                <Calendar className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Prazo Estimado</h3>
                <p className="text-cyan-200">15 a 25 dias uteis</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-teal-600/30 p-3 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Entregas Parciais</h3>
                <p className="text-cyan-200">Aprovacao em cada etapa do projeto</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Botao de Aprovacao */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {approved ? (
            <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-2xl p-8">
              <CheckCircle2 className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Proposta Enviada!</h3>
              <p className="text-cyan-200">
                Sua aprovacao foi enviada via WhatsApp. Entraremos em contato em breve para dar inicio ao projeto.
              </p>
            </div>
          ) : (
            <>
              <Button
                onClick={handleApprove}
                disabled={!selectedOption || !paymentMethod}
                className={`w-full md:w-auto px-12 py-6 text-lg font-bold rounded-xl transition-all duration-300 ${
                  selectedOption && paymentMethod
                    ? "bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 shadow-lg shadow-emerald-500/25"
                    : "bg-gray-600 cursor-not-allowed opacity-50"
                }`}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Aprovar Proposta via WhatsApp
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              {(!selectedOption || !paymentMethod) && (
                <p className="text-cyan-300/60 text-sm mt-4">
                  Selecione uma opcao de pacote e forma de pagamento para continuar
                </p>
              )}
            </>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071320] border-t border-cyan-900/50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/design-reverse-logotipo-sem-fundo.png"
                  alt="Design Reverse Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <div className="font-bold text-sm leading-tight">DESIGN REVERSE</div>
                  <div className="text-xs text-cyan-400 leading-tight">MARKETING AGENCY</div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-cyan-300">
                <a href="https://wa.me/5543988125184" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                  (43) 98812-5184
                </a>
                <a href="mailto:contato@designreverse.com.br" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  contato@designreverse.com.br
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-cyan-900/30 text-center">
              <p className="text-sm text-cyan-300/60">
                Esta proposta e confidencial e destinada exclusivamente ao Dr. Giovanne Felipe.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
