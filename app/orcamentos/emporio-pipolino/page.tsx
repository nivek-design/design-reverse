"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Check,
  Share2,
  Copy,
  ShoppingCart,
  Camera,
  Link2,
  Megaphone,
  ArrowRight,
  FileText,
  MapPin,
  Calendar,
  Building2,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "5543988125184"

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

export default function OrcamentoEmporioPipolino() {
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
          title: "Proposta Comercial - Emporio Pipolino | Design Reverse",
          text: "Confira a proposta comercial da Design Reverse para o Emporio Pipolino.",
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
      `Empresa: Emporio Pipolino\n` +
      `Data: ${new Date().toLocaleDateString("pt-BR")}\n\n` +
      `Opcao escolhida: ${optionLabel}\n` +
      `${paymentInfo}\n\n` +
      `Prazo estimado de entrega: 10 a 20 dias uteis\n\n` +
      `Confirmo a aprovacao desta proposta comercial conforme apresentado no link:\n` +
      `${typeof window !== "undefined" ? window.location.href : ""}\n\n` +
      `Aguardo proximo passo para iniciar o projeto.`
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
  }

  const phases = [
    {
      number: 1,
      title: "Implementacao do E-commerce (Plataforma Tray)",
      icon: <ShoppingCart className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-600",
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-900/20",
      value: 3000,
      items: [
        "Configuracoes tecnicas, apontamento de dominio e certificado de seguranca (SSL)",
        "Integracao de meios de pagamento transparentes (PIX, Cartao de Credito e Boleto)",
        "Configuracao de logistica e tabelas de frete",
        "Aplicacao da identidade visual da marca no layout da plataforma",
      ],
    },
    {
      number: 2,
      title: "Producao Fotografica e Cadastro",
      icon: <Camera className="h-6 w-6" />,
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-500/30",
      bgColor: "bg-purple-900/20",
      value: 1600,
      items: [
        "Ensaio fotografico profissional de 40 produtos (R$ 40,00/foto)",
        "Tratamento de imagem e otimizacao para web",
        "Cadastro completo na plataforma Tray",
        "Configuracao de variacoes (pesos, sabores, tamanhos)",
        "SEO de produto (descricoes otimizadas para o Google)",
      ],
    },
    {
      number: 3,
      title: "Integracao com Marketplaces",
      icon: <Link2 className="h-6 w-6" />,
      color: "from-green-600 to-emerald-600",
      borderColor: "border-green-500/30",
      bgColor: "bg-green-900/20",
      value: 1000,
      items: [
        "Sincronizacao nativa da Tray com Mercado Livre (R$ 500,00) e Shopee (R$ 500,00)",
        "Mapeamento de categorias e regras de precificacao por canal",
        "Sincronizacao de estoque centralizado",
      ],
    },
    {
      number: 4,
      title: "Aceleracao de Vendas - Trafego Pago (1o Mes)",
      icon: <Megaphone className="h-6 w-6" />,
      color: "from-orange-600 to-red-600",
      borderColor: "border-orange-500/30",
      bgColor: "bg-orange-900/20",
      value: 1200,
      optional: true,
      items: [
        "Criacao e gestao de ate 5 campanhas de anuncios (Meta/Google Ads)",
        "Configuracao de rastreamento (Pixel/Tags)",
        "Valor de R$ 1.200,00 ja inclui honorarios (R$ 600,00) e verba de midia investida nas plataformas (R$ 600,00 = R$ 20,00/dia)",
      ],
    },
  ]

  const optionA = {
    label: "Opcao A - Essencial",
    subtitle: "Fases 1 + 2 + 3",
    value: 5600,
    description: "Setup completo do e-commerce + fotos profissionais + presenca nos maiores marketplaces.",
    phases: [1, 2, 3],
    highlight: false,
  }

  const optionB = {
    label: "Opcao B - Completa",
    subtitle: "Fases 1 + 2 + 3 + 4",
    value: 6800,
    description: "Tudo da Opcao A + o impulso inicial com trafego pago para gerar as primeiras vendas rapidamente.",
    phases: [1, 2, 3, 4],
    highlight: true,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a4a] via-[#0a0a29] to-[#1a0040] text-white">
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
            <div className="text-xs text-blue-300 leading-tight">MARKETING AGENCY</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={handleShare}
            variant="outline"
            className="border-blue-400/50 text-blue-300 hover:bg-blue-600/10 rounded-lg text-sm gap-2"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Compartilhar</span>
          </Button>
          <Button
            onClick={handleCopyLink}
            variant="outline"
            className="border-blue-400/50 text-blue-300 hover:bg-blue-600/10 rounded-lg text-sm gap-2"
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
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium mb-8">
            <FileText className="h-4 w-4" />
            Proposta Comercial
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            E-Commerce &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Expansao Digital
            </span>
          </h1>

          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Proposta personalizada para digitalizar a tradicao do Emporio Pipolino,
            criando um canal de vendas online proprio, robusto e integrado aos maiores marketplaces do Brasil.
          </p>

          {/* Info do cliente */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Building2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <span className="text-blue-200 text-sm">Emporio Pipolino</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <span className="text-blue-200 text-sm">R. Mato Grosso, 35 - Centro, Londrina - PR</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Calendar className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <span className="text-blue-200 text-sm">20 de Fevereiro de 2026</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Globe className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <span className="text-blue-200 text-sm">designreverse.com.br</span>
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
          className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-blue-500/20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">O Projeto</h2>
          <p className="text-blue-200 text-lg leading-relaxed">
            O objetivo deste projeto e digitalizar a tradicao do Emporio Pipolino,
            criando um canal de vendas online proprio, robusto e integrado aos maiores
            marketplaces do Brasil. Nossa meta e construir uma verdadeira{" "}
            <span className="text-white font-semibold">{'"maquina de vendas"'}</span>{" "}
            que funcione 24 horas por dia.
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
                {phase.optional && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-medium px-3 py-1 rounded-full">
                      Opcional
                    </span>
                  </div>
                )}

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
                          <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-blue-200 leading-relaxed">{item}</span>
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
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Investimento
            </span>
          </h2>
          <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
            Selecione a opcao que melhor atende as necessidades estrategicas da sua marca
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Opcao A */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedOption("A")}
              className={`cursor-pointer relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                selectedOption === "A"
                  ? "border-blue-400 bg-blue-900/30 shadow-lg shadow-blue-500/20"
                  : "border-white/10 bg-white/5 hover:border-blue-400/50"
              }`}
            >
              {selectedOption === "A" && (
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-500 rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{optionA.label}</h3>
              <p className="text-blue-300 text-sm mb-4">{optionA.subtitle}</p>
              <div className="text-4xl font-bold text-blue-400 mb-1">
                {formatCurrency(optionA.value)}
              </div>
              <div className="flex flex-col gap-1 mb-6">
                <p className="text-green-400 text-sm font-medium">
                  A vista: {formatCurrency(getDiscountedValue(optionA.value))} (10% off)
                </p>
                <p className="text-blue-300 text-sm">
                  ou 10x de {formatCurrency(getInstallmentValue(optionA.value, 10))} sem juros
                </p>
              </div>
              <p className="text-blue-200 mb-6 leading-relaxed">{optionA.description}</p>
              <div className="space-y-2">
                {phases.filter(p => optionA.phases.includes(p.number)).map(p => (
                  <div key={p.number} className="flex items-center gap-2 text-sm text-blue-200">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
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
                  ? "border-green-400 bg-green-900/30 shadow-lg shadow-green-500/20"
                  : "border-white/10 bg-white/5 hover:border-green-400/50"
              }`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  RECOMENDADA
                </span>
              </div>
              {selectedOption === "B" && (
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{optionB.label}</h3>
              <p className="text-green-300 text-sm mb-4">{optionB.subtitle}</p>
              <div className="text-4xl font-bold text-green-400 mb-1">
                {formatCurrency(optionB.value)}
              </div>
              <div className="flex flex-col gap-1 mb-6">
                <p className="text-green-400 text-sm font-medium">
                  A vista: {formatCurrency(getDiscountedValue(optionB.value))} (10% off)
                </p>
                <p className="text-green-300 text-sm">
                  ou 10x de {formatCurrency(getInstallmentValue(optionB.value, 10))} sem juros
                </p>
              </div>
              <p className="text-blue-200 mb-6 leading-relaxed">{optionB.description}</p>
              <div className="space-y-2">
                {phases.filter(p => optionB.phases.includes(p.number)).map(p => (
                  <div key={p.number} className="flex items-center gap-2 text-sm text-blue-200">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
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
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Pagamento
              </span>
            </h2>
            <p className="text-blue-200 text-center mb-10 max-w-2xl mx-auto">
              Escolha a forma de pagamento que melhor se encaixa para voce
            </p>

            {(() => {
              const baseValue = selectedOption === "A" ? optionA.value : optionB.value
              const discountedValue = getDiscountedValue(baseValue)
              const savings = baseValue - discountedValue
              const installmentValue = getInstallmentValue(baseValue, 10)

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* A vista */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setPaymentMethod("vista")}
                    className={`cursor-pointer relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                      paymentMethod === "vista"
                        ? "border-green-400 bg-green-900/30 shadow-lg shadow-green-500/20"
                        : "border-white/10 bg-white/5 hover:border-green-400/50"
                    }`}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                        10% DE DESCONTO
                      </span>
                    </div>
                    {paymentMethod === "vista" && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-green-500 rounded-full p-1">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    )}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-3">A Vista</h3>
                      <p className="text-blue-300 text-sm mb-6">PIX, Transferencia ou Boleto</p>
                      <div className="text-sm text-blue-300 line-through mb-1">
                        {formatCurrency(baseValue)}
                      </div>
                      <div className="text-5xl font-bold text-green-400 mb-2">
                        {formatCurrency(discountedValue)}
                      </div>
                      <p className="text-green-400 text-sm font-medium mb-6">
                        Economia de {formatCurrency(savings)}
                      </p>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-blue-200 text-sm">Pagamento unico com 10% de desconto</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-blue-200 text-sm">Inicio imediato apos confirmacao</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-blue-200 text-sm">Melhor custo-beneficio</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Parcelado */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setPaymentMethod("parcelado")}
                    className={`cursor-pointer relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                      paymentMethod === "parcelado"
                        ? "border-blue-400 bg-blue-900/30 shadow-lg shadow-blue-500/20"
                        : "border-white/10 bg-white/5 hover:border-blue-400/50"
                    }`}
                  >
                    {paymentMethod === "parcelado" && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-blue-500 rounded-full p-1">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    )}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-3 mt-3">Parcelado</h3>
                      <p className="text-blue-300 text-sm mb-6">Cartao de Credito sem juros</p>
                      <div className="text-blue-300 text-sm mb-1">
                        10x sem juros de
                      </div>
                      <div className="text-5xl font-bold text-blue-400 mb-2">
                        {formatCurrency(installmentValue)}
                      </div>
                      <p className="text-blue-300 text-sm mb-6">
                        Total: {formatCurrency(baseValue)}
                      </p>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-blue-200 text-sm">Ate 10x sem juros no cartao de credito</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-blue-200 text-sm">Parcelas fixas e previsiveis</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="text-blue-200 text-sm">Maior flexibilidade no orcamento</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })()}
          </motion.div>
        </section>
      )}

      {/* Condicoes Gerais */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-6">Condicoes Gerais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Prazo de Entrega</h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                Estimativa de 10 a 20 dias uteis apos a aprovacao e confirmacao do pagamento, sujeito a disponibilidade de materiais e informacoes do cliente.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Validade da Proposta</h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                Esta proposta tem validade de 15 dias a partir da data de emissao (20/02/2026).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Suporte</h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                30 dias de suporte tecnico gratuito apos a entrega do projeto para ajustes e duvidas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Garantia</h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                Satisfacao garantida. Realizamos ajustes necessarios ate a aprovacao final do projeto.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Botao de Aprovar */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              comecar?
            </span>
          </h2>
          <p className="text-blue-200 mb-10 text-lg">
            Selecione a opcao desejada, a forma de pagamento e clique no botao abaixo para aprovar.
            Voce sera redirecionado para o WhatsApp com todas as informacoes.
          </p>

          {/* Resumo da escolha */}
          {selectedOption && paymentMethod && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 max-w-lg mx-auto text-left">
              <h4 className="font-semibold text-blue-300 text-sm uppercase tracking-wider mb-4">Resumo da Aprovacao</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-sm">Plano</span>
                  <span className="text-white font-medium">{selectedOption === "A" ? "Opcao A - Essencial" : "Opcao B - Completa"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-sm">Pagamento</span>
                  <span className="text-white font-medium">{paymentMethod === "vista" ? "A vista (10% off)" : "10x sem juros"}</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                  <span className="text-blue-200 text-sm font-semibold">Total</span>
                  <span className="text-2xl font-bold text-green-400">
                    {paymentMethod === "vista"
                      ? formatCurrency(getDiscountedValue(selectedOption === "A" ? optionA.value : optionB.value))
                      : formatCurrency(selectedOption === "A" ? optionA.value : optionB.value)
                    }
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 text-sm">Prazo estimado</span>
                  <span className="text-white font-medium">10 a 20 dias uteis</span>
                </div>
              </div>
            </div>
          )}

          <Button
            onClick={handleApprove}
            disabled={!selectedOption || !paymentMethod}
            className={`text-lg px-10 py-7 rounded-xl font-semibold transition-all duration-300 ${
              selectedOption && paymentMethod
                ? "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 hover:translate-y-[-2px] hover:shadow-2xl shadow-green-500/25 text-white"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            {!selectedOption
              ? "Selecione uma opcao acima"
              : !paymentMethod
                ? "Selecione a forma de pagamento"
                : `Aprovar Orcamento - ${
                    paymentMethod === "vista"
                      ? formatCurrency(getDiscountedValue(selectedOption === "A" ? optionA.value : optionB.value))
                      : formatCurrency(selectedOption === "A" ? optionA.value : optionB.value)
                  }`
            }
          </Button>

          {(!selectedOption || !paymentMethod) && (
            <p className="text-blue-300/60 mt-4 text-sm">
              {!selectedOption
                ? "Selecione a Opcao A ou Opcao B para continuar"
                : "Agora selecione a forma de pagamento para habilitar a aprovacao"
              }
            </p>
          )}
        </motion.div>
      </section>

      {/* Footer simplificado */}
      <footer className="bg-[#0a0a29] border-t border-blue-900/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/design-reverse-logotipo-sem-fundo.png"
                alt="Design Reverse Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm text-blue-300">Design Reverse Marketing Agency</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-blue-300">
              <a href="mailto:contato@designreverse.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                contato@designreverse.com
              </a>
              <a href="tel:+5543988125184" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                (43) 98812-5184
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
