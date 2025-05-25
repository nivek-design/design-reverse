"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { AnimatedLineChart } from "@/components/charts/animated-line-chart"
import { AnimatedBarChart } from "@/components/charts/animated-bar-chart"
import { AnimatedPieChart } from "@/components/charts/animated-pie-chart"
import { AnimatedAreaChart } from "@/components/charts/animated-area-chart"
import { KPICard } from "@/components/charts/kpi-card"
import { ProgressBar } from "@/components/charts/progress-bar"
import { Calendar, BarChart2, Users, DollarSign, TrendingUp, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Dados de exemplo para os gráficos
const monthlyPerformanceData = [
  { name: "Jan", impressoes: 4000, cliques: 2400, conversoes: 240 },
  { name: "Fev", impressoes: 3000, cliques: 1398, conversoes: 210 },
  { name: "Mar", impressoes: 2000, cliques: 9800, conversoes: 290 },
  { name: "Abr", impressoes: 2780, cliques: 3908, conversoes: 320 },
  { name: "Mai", impressoes: 1890, cliques: 4800, conversoes: 281 },
  { name: "Jun", impressoes: 2390, cliques: 3800, conversoes: 250 },
  { name: "Jul", impressoes: 3490, cliques: 4300, conversoes: 210 },
  { name: "Ago", impressoes: 4000, cliques: 2400, conversoes: 240 },
  { name: "Set", impressoes: 3000, cliques: 1398, conversoes: 210 },
  { name: "Out", impressoes: 2000, cliques: 9800, conversoes: 290 },
  { name: "Nov", impressoes: 2780, cliques: 3908, conversoes: 320 },
  { name: "Dez", impressoes: 1890, cliques: 4800, conversoes: 281 },
]

const channelPerformanceData = [
  { name: "Google Ads", conversoes: 4000, cpa: 25 },
  { name: "Facebook", conversoes: 3000, cpa: 35 },
  { name: "Instagram", conversoes: 2000, cpa: 45 },
  { name: "LinkedIn", conversoes: 2780, cpa: 30 },
  { name: "Email", conversoes: 1890, cpa: 15 },
]

const deviceDistributionData = [
  { name: "Desktop", value: 4000, color: "#3b82f6" },
  { name: "Mobile", value: 3000, color: "#10b981" },
  { name: "Tablet", value: 1000, color: "#f59e0b" },
]

const ageDistributionData = [
  { name: "18-24", value: 2400, color: "#3b82f6" },
  { name: "25-34", value: 4500, color: "#10b981" },
  { name: "35-44", value: 3000, color: "#f59e0b" },
  { name: "45-54", value: 1500, color: "#ef4444" },
  { name: "55+", value: 800, color: "#8b5cf6" },
]

const weeklyTrafficData = [
  { name: "Seg", organico: 4000, pago: 2400, direto: 1800 },
  { name: "Ter", organico: 3000, pago: 1398, direto: 1500 },
  { name: "Qua", organico: 2000, pago: 9800, direto: 1700 },
  { name: "Qui", organico: 2780, pago: 3908, direto: 1600 },
  { name: "Sex", organico: 1890, pago: 4800, direto: 1200 },
  { name: "Sáb", organico: 2390, pago: 3800, direto: 900 },
  { name: "Dom", organico: 3490, pago: 4300, direto: 800 },
]

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState("30d")

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-[#0a0a29] to-[#1a1a4a] text-white">
          <Navbar variant="light" />
          <div className="container mx-auto px-4 py-8">
            <FadeIn direction="up">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard de Campanhas</h1>
              <p className="text-blue-200 mb-6">
                Visualize o desempenho das suas campanhas de marketing digital em tempo real
              </p>
            </FadeIn>

            {/* Filtros */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 rounded-lg p-2">
                <Calendar className="h-5 w-5 text-blue-300 mr-2" />
                <Select defaultValue={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="border-0 bg-transparent text-white w-[140px] focus:ring-0">
                    <SelectValue placeholder="Selecione o período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Últimos 7 dias</SelectItem>
                    <SelectItem value="30d">Últimos 30 dias</SelectItem>
                    <SelectItem value="90d">Últimos 90 dias</SelectItem>
                    <SelectItem value="12m">Últimos 12 meses</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="bg-white/10 border-0 text-white hover:bg-white/20">
                <Filter className="h-4 w-4 mr-2" />
                Mais Filtros
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* KPIs */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <KPICard
              title="Impressões Totais"
              value={1254789}
              change={12.5}
              icon={<BarChart2 className="h-5 w-5 text-blue-700" />}
              iconBgColor="bg-blue-100"
              formatter={(val) => (typeof val === "number" ? `${(val / 1000000).toFixed(2)}M` : val)}
            />
            <KPICard
              title="Cliques"
              value={87432}
              change={8.3}
              icon={<TrendingUp className="h-5 w-5 text-green-700" />}
              iconBgColor="bg-green-100"
              formatter={(val) => (typeof val === "number" ? `${(val / 1000).toFixed(1)}K` : val)}
            />
            <KPICard
              title="Conversões"
              value={5280}
              change={-2.1}
              icon={<Users className="h-5 w-5 text-purple-700" />}
              iconBgColor="bg-purple-100"
            />
            <KPICard
              title="Receita"
              value={158750}
              change={15.8}
              icon={<DollarSign className="h-5 w-5 text-emerald-700" />}
              iconBgColor="bg-emerald-100"
              formatter={(val) => (typeof val === "number" ? `R$ ${(val / 1000).toFixed(1)}K` : val)}
            />
          </StaggerChildren>

          {/* Gráficos principais */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <AnimatedLineChart
              title="Desempenho Mensal"
              subtitle="Impressões, cliques e conversões ao longo do tempo"
              data={monthlyPerformanceData}
              lines={[
                { dataKey: "impressoes", stroke: "#3b82f6", name: "Impressões" },
                { dataKey: "cliques", stroke: "#10b981", name: "Cliques" },
                { dataKey: "conversoes", stroke: "#f59e0b", name: "Conversões" },
              ]}
              height={350}
            />
            <AnimatedBarChart
              title="Desempenho por Canal"
              subtitle="Conversões e custo por aquisição (CPA)"
              data={channelPerformanceData}
              bars={[
                { dataKey: "conversoes", fill: "#3b82f6", name: "Conversões" },
                { dataKey: "cpa", fill: "#f59e0b", name: "CPA (R$)" },
              ]}
              height={350}
            />
          </div>

          {/* Gráficos secundários */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <AnimatedPieChart
              title="Distribuição por Dispositivo"
              subtitle="Tráfego segmentado por tipo de dispositivo"
              data={deviceDistributionData}
              height={300}
            />
            <AnimatedPieChart
              title="Distribuição por Idade"
              subtitle="Usuários segmentados por faixa etária"
              data={ageDistributionData}
              height={300}
              innerRadius={50}
              outerRadius={90}
            />
            <AnimatedAreaChart
              title="Tráfego Semanal"
              subtitle="Fontes de tráfego ao longo da semana"
              data={weeklyTrafficData}
              areas={[
                { dataKey: "organico", fill: "rgba(59, 130, 246, 0.5)", stroke: "#3b82f6", name: "Orgânico" },
                { dataKey: "pago", fill: "rgba(16, 185, 129, 0.5)", stroke: "#10b981", name: "Pago" },
                { dataKey: "direto", fill: "rgba(245, 158, 11, 0.5)", stroke: "#f59e0b", name: "Direto" },
              ]}
              height={300}
              stacked={true}
            />
          </div>

          {/* Barras de progresso */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Metas da Campanha</h3>
            <div className="space-y-4">
              <ProgressBar
                title="Impressões"
                subtitle="Meta: 1.5M impressões"
                value={1254789}
                max={1500000}
                color="bg-blue-500"
                showPercentage={true}
              />
              <ProgressBar
                title="Cliques"
                subtitle="Meta: 100K cliques"
                value={87432}
                max={100000}
                color="bg-green-500"
                showPercentage={true}
              />
              <ProgressBar
                title="Conversões"
                subtitle="Meta: 6K conversões"
                value={5280}
                max={6000}
                color="bg-yellow-500"
                showPercentage={true}
              />
              <ProgressBar
                title="Receita"
                subtitle="Meta: R$ 200K"
                value={158750}
                max={200000}
                color="bg-purple-500"
                showPercentage={true}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  )
}
