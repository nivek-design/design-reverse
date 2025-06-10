"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Target, Users, Zap, Shield, Check, Award, TrendingUp, BarChart2 } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

interface DiferencialCardProps {
  icon: React.ReactNode
  title: string
  description: string
  stats?: string
  statsLabel?: string
  accentColor: string
  index: number
}

function DiferencialCard({ icon, title, description, stats, statsLabel, accentColor, index }: DiferencialCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 border border-white/10 group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ translateY: -8 }}
    >
      {/* Background gradient accent */}
      <div
        className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
        style={{ background: accentColor }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}
          style={{ background: `${accentColor}30` }}
        >
          <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ background: accentColor }}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-white">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        {/* Stats if available */}
        {stats && (
          <div className="flex items-baseline mt-4">
            <span className="text-2xl font-bold mr-2 transition-colors duration-300" style={{ color: accentColor }}>
              {stats}
            </span>
            {statsLabel && <span className="text-sm text-gray-400">{statsLabel}</span>}
          </div>
        )}

        {/* Feature list */}
        <ul className="mt-4 space-y-2">
          {[1, 2, 3].map((item, idx) => (
            <motion.li
              key={idx}
              className="flex items-center text-sm text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 + 0.3 }}
            >
              <Check
                className="h-4 w-4 mr-2 flex-shrink-0 transition-colors duration-300"
                style={{ color: accentColor }}
              />
              {idx === 0 && title === "Foco em Resultados" && "Estratégias orientadas por dados"}
              {idx === 1 && title === "Foco em Resultados" && "ROI mensurável e transparente"}
              {idx === 2 && title === "Foco em Resultados" && "Otimização contínua de campanhas"}

              {idx === 0 && title === "Atendimento Personalizado" && "Gerente de conta dedicado"}
              {idx === 1 && title === "Atendimento Personalizado" && "Reuniões semanais de alinhamento"}
              {idx === 2 && title === "Atendimento Personalizado" && "Suporte prioritário"}

              {idx === 0 && title === "Tecnologia de Ponta" && "Ferramentas de análise avançadas"}
              {idx === 1 && title === "Tecnologia de Ponta" && "Automação de marketing"}
              {idx === 2 && title === "Tecnologia de Ponta" && "Inteligência artificial aplicada"}

              {idx === 0 && title === "Transparência Total" && "Dashboards em tempo real"}
              {idx === 1 && title === "Transparência Total" && "Relatórios detalhados semanais"}
              {idx === 2 && title === "Transparência Total" && "Acesso direto às métricas"}

              {idx === 0 && title === "Estratégia Integrada" && "Marketing omnichannel"}
              {idx === 1 && title === "Estratégia Integrada" && "Comunicação consistente"}
              {idx === 2 && title === "Estratégia Integrada" && "Jornada do cliente otimizada"}

              {idx === 0 && title === "Equipe Especializada" && "Profissionais certificados"}
              {idx === 1 && title === "Equipe Especializada" && "Treinamento constante"}
              {idx === 2 && title === "Equipe Especializada" && "Especialistas por canal"}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function DiferenciaisSection() {
  const diferenciais = [
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Foco em Resultados",
      description:
        "Trabalhamos com metas claras e mensuráveis, garantindo que cada ação gere retorno para seu negócio.",
      stats: "+38%",
      statsLabel: "ROI médio para clientes",
      accentColor: "#3b82f6",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Atendimento Personalizado",
      description:
        "Cada cliente é único. Desenvolvemos estratégias sob medida para atender às necessidades específicas do seu negócio.",
      stats: "94%",
      statsLabel: "taxa de satisfação",
      accentColor: "#10b981",
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Tecnologia de Ponta",
      description:
        "Utilizamos as ferramentas e tecnologias mais avançadas do mercado para garantir os melhores resultados.",
      stats: "8+",
      statsLabel: "ferramentas premium",
      accentColor: "#f59e0b",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Transparência Total",
      description:
        "Relatórios detalhados e comunicação clara para que você acompanhe cada etapa do processo e os resultados obtidos.",
      stats: "24/7",
      statsLabel: "acesso a dashboards",
      accentColor: "#8b5cf6",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Estratégia Integrada",
      description:
        "Abordagem holística que integra diferentes canais e táticas para maximizar o impacto das suas campanhas.",
      stats: "360°",
      statsLabel: "visão de marketing",
      accentColor: "#ec4899",
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Equipe Especializada",
      description:
        "Profissionais altamente qualificados e certificados nas principais plataformas de marketing digital.",
      stats: "3+",
      statsLabel: "especialistas certificados",
      accentColor: "#06b6d4",
    },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a29] via-[#0a0a29] to-[#0a0a29]/80 -z-10" />

      {/* Animated background particles */}
      <div className="absolute inset-0 -z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/20 blur-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              scale: [1, Math.random() * 0.3 + 0.8],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative z-10">
          <FadeIn direction="up">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full text-sm font-medium">
                Por que nos escolher
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Nossos Diferenciais
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              O que nos torna a escolha certa para impulsionar seu negócio no ambiente digital e superar a concorrência.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {diferenciais.map((diferencial, index) => (
            <DiferencialCard
              key={index}
              icon={diferencial.icon}
              title={diferencial.title}
              description={diferencial.description}
              stats={diferencial.stats}
              statsLabel={diferencial.statsLabel}
              accentColor={diferencial.accentColor}
              index={index}
            />
          ))}
        </div>

        {/* Estatísticas gerais */}
        <div className="mt-20 relative z-10">
          <FadeIn direction="up">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Resultados que Entregamos</h3>
                <p className="text-blue-200">Números que comprovam nossa eficiência</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatsCounter value={12} suffix="+" label="Clientes Atendidos" color="#3b82f6" delay={0.1} />
                <StatsCounter value={92} suffix="%" label="Taxa de Retenção" color="#10b981" delay={0.2} />
                <StatsCounter value={8} suffix="+" label="Campanhas Gerenciadas" color="#f59e0b" delay={0.3} />
                <StatsCounter
                  value={25}
                  suffix="Mil"
                  label="Investimento Gerenciado"
                  color="#8b5cf6"
                  delay={0.4}
                  prefix="R$"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

interface StatsCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  color: string
  delay: number
}

function StatsCounter({ value, label, suffix = "", prefix = "", color, delay }: StatsCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    let currentValue = 0
    const step = value / 40

    if (isInView) {
      interval = setInterval(() => {
        currentValue += step
        if (currentValue >= value) {
          currentValue = value
          clearInterval(interval)
        }
        setDisplayValue(Math.floor(currentValue))
      }, 30)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center justify-center mb-2">
        <BarChart2 className="h-5 w-5 mr-2" style={{ color }} />
        <div className="h-[3px] w-10" style={{ background: color }} />
      </div>
      <h4 className="text-3xl md:text-4xl font-bold mb-1" style={{ color }}>
        {prefix}
        {displayValue}
        {suffix}
      </h4>
      <p className="text-sm text-gray-300">{label}</p>
    </motion.div>
  )
}
