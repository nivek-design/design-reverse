"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  FileText,
  ExternalLink,
  Copy,
  Check,
  Calendar,
  Building2,
  DollarSign,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const orcamentos = [
  {
    id: "emporio-pipolino",
    empresa: "Emporio Pipolino",
    tipo: "E-Commerce & Expansao Digital",
    data: "20/02/2026",
    valorMin: 5600,
    valorMax: 6800,
    status: "pendente",
    slug: "/orcamentos/emporio-pipolino",
  },
]

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; classes: string }> = {
    pendente: {
      label: "Pendente",
      classes: "bg-yellow-500/20 border-yellow-400/40 text-yellow-300",
    },
    aprovado: {
      label: "Aprovado",
      classes: "bg-green-500/20 border-green-400/40 text-green-300",
    },
    recusado: {
      label: "Recusado",
      classes: "bg-red-500/20 border-red-400/40 text-red-300",
    },
  }
  const c = config[status] || config.pendente
  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${c.classes}`}>
      {c.label}
    </span>
  )
}

export default function OrcamentosPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const handleCopyLink = (slug: string, id: string) => {
    const url = `${typeof window !== "undefined" ? window.location.origin : ""}${slug}`
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const filteredOrcamentos = orcamentos.filter(
    (o) =>
      o.empresa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.tipo.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a4a] via-[#0a0a29] to-[#1a0040] text-white">
      {/* Header */}
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
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium mb-8">
            <FileText className="h-4 w-4" />
            Painel de Orcamentos
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Propostas{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Comerciais
            </span>
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Gerencie e compartilhe os orcamentos dos clientes da Design Reverse.
          </p>
        </motion.div>
      </section>

      {/* Search */}
      <section className="container mx-auto px-4 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400" />
            <input
              type="text"
              placeholder="Buscar por empresa ou tipo de projeto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-blue-300/50 focus:outline-none focus:border-blue-400/50 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Lista de Orcamentos */}
      <section className="container mx-auto px-4 py-8 pb-20">
        <div className="max-w-5xl mx-auto space-y-6">
          {filteredOrcamentos.length === 0 ? (
            <div className="text-center py-20 text-blue-300/60">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Nenhum orcamento encontrado.</p>
            </div>
          ) : (
            filteredOrcamentos.map((orcamento, index) => (
              <motion.div
                key={orcamento.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold">{orcamento.empresa}</h3>
                      <StatusBadge status={orcamento.status} />
                    </div>
                    <p className="text-blue-300 mb-4">{orcamento.tipo}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-400" />
                        {orcamento.data}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-400" />
                        {formatCurrency(orcamento.valorMin)} - {formatCurrency(orcamento.valorMax)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      onClick={() => handleCopyLink(orcamento.slug, orcamento.id)}
                      variant="outline"
                      className="border-blue-400/50 text-blue-300 hover:bg-blue-600/10 rounded-lg gap-2"
                    >
                      {copiedId === orcamento.id ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      {copiedId === orcamento.id ? "Copiado!" : "Copiar Link"}
                    </Button>
                    <a href={orcamento.slug}>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg gap-2 text-white">
                        <ExternalLink className="h-4 w-4" />
                        Abrir Orcamento
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a29] border-t border-blue-900/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-blue-300">
            Design Reverse Marketing Agency - Painel interno de orcamentos
          </p>
        </div>
      </footer>
    </div>
  )
}
