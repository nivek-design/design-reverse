"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { AnimatedBackground } from "@/components/animations/animated-background"
import { PageTransition } from "@/components/page-transition"
import { ScaleIn } from "@/components/animations/scale-in"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Headphones,
  Globe,
  Building,
} from "lucide-react"

import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
    urgency: "normal",
    howDidYouFindUs: "",
    bestTimeToContact: "",
  })

  const [projectFormData, setProjectFormData] = useState({
    projectName: "",
    projectEmail: "",
    projectPhone: "",
    projectCompany: "",
    projectType: "",
    projectBudget: "",
    projectDeadline: "",
    projectDescription: "",
    projectTerms: false,
    websiteUrl: "",
    competitors: "",
    specificObjectives: "",
    hasBrandMaterial: false,
    needsHosting: false,
  })

  const [supportFormData, setSupportFormData] = useState({
    supportName: "",
    supportEmail: "",
    supportId: "",
    supportType: "",
    supportPriority: "",
    supportMessage: "",
    supportAttachment: null,
    orderNumber: "",
    problemDate: "",
    browserDevice: "",
    pageUrl: "",
  })

  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleProjectFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setProjectFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSupportFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setSupportFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, newsletter: checked }))
  }

  const handleProjectCheckboxChange = (name: string, checked: boolean) => {
    setProjectFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, urgency: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulação de envio do formulário
    setTimeout(() => {
      // Simulando 90% de chance de sucesso
      if (Math.random() > 0.1) {
        setFormState("success")
        toast({
          title: "Sucesso!",
          description: "Mensagem enviada com sucesso!",
        })
      } else {
        setFormState("error")
        toast({
          title: "Erro!",
          description: "Ocorreu um erro ao enviar a mensagem.",
          variant: "destructive",
        })
      }
    }, 1500)
  }

  const handleProjectFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica para enviar o formulário de orçamento
    toast({
      title: "Em breve!",
      description: "Funcionalidade de envio do formulário de orçamento em breve.",
    })
  }

  const handleSupportFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica para enviar o formulário de suporte
    toast({
      title: "Em breve!",
      description: "Funcionalidade de envio do formulário de suporte em breve.",
    })
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0a0a29] text-white relative overflow-hidden">
        {/* Background network visualization */}
        <AnimatedBackground />

        <div className="container mx-auto px-4 py-8 relative z-10">
          <Navbar variant="dark" />

          <div className="mt-16 mb-12">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
              <p className="text-xl text-blue-300 max-w-2xl">
                Estamos prontos para ajudar seu negócio a alcançar novos patamares no ambiente digital. Preencha o
                formulário abaixo ou escolha uma das opções alternativas de contato.
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-20">
            {/* Left contact info */}
            <FadeIn direction="right" delay={0.2} className="lg:w-1/3">
              <div className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 backdrop-blur-sm p-8 rounded-lg border border-blue-800/50 h-full">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-blue-400" />
                  Informações de Contato
                </h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-3 group">
                    <div className="bg-blue-800/50 p-2 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <Mail className="text-blue-400 h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-300">Email</div>
                      <a
                        href="mailto:contato@designreverse.com"
                        className="group-hover:text-blue-300 transition-colors duration-300"
                      >
                        contato@designreverse.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="bg-blue-800/50 p-2 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <Phone className="text-blue-400 h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-300">Telefone</div>
                      <a
                        href="tel:+5543988125184"
                        className="group-hover:text-blue-300 transition-colors duration-300"
                      >
                        +55 (43) 988125184
                      </a>
                    </div>
                  </div>
                  {/* <div className="flex items-center gap-3 group">
                    <div className="bg-blue-800/50 p-2 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <MapPin className="text-blue-400 h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-300">Endereço</div>
                      <address className="not-italic group-hover:text-blue-300 transition-colors duration-300">
                        Av. Ayrton Senna da Silva
                        <br />
                        Londrina, PR - Brasil
                      </address>
                    </div>
                  </div> */}
                  <div className="flex items-center gap-3 group">
                    <div className="bg-blue-800/50 p-2 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <Clock className="text-blue-400 h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-300">Horário de Atendimento</div>
                      <p className="group-hover:text-blue-300 transition-colors duration-300">
                        Segunda a Sexta: 9h às 18h
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Headphones className="mr-2 h-5 w-5 text-blue-400" />
                  Atendimento Rápido
                </h3>
                <div className="space-y-4 mb-8">
                  <a
                    href="https://wa.me/5543988125184"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Direto
                  </a>
                  <a
                    href="https://t.me/reversedesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Telegram
                  </a>
                </div>

                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-400" />
                  Agende uma Reunião
                </h3>
                <Button
                  onClick={() => window.open("https://calendly.com/designreverse/30min", "_blank")}
                  className="bg-transparent border border-white/30 hover:bg-white/10 w-full transition-all duration-300 hover:border-white/60 text-white"
                >
                  AGENDAR UMA REUNIÃO
                </Button>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-blue-400" />
                    Redes Sociais
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com/designreverse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-800/30 p-2 rounded-full hover:bg-blue-700/50 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/designreverse.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-800/30 p-2 rounded-full hover:bg-blue-700/50 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/company/designreverse-br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-800/30 p-2 rounded-full hover:bg-blue-700/50 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    
                  </div>
                </div>
              </div>

              {/* Map */}
              <ScaleIn delay={0.4} className="mt-8">
                <div className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 backdrop-blur-sm p-4 rounded-lg border border-blue-800/50">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-blue-400" />
                    Nossa Localização
                  </h3>
                  <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                    <Image src="/sao-paulo-map.png" alt="Mapa da localização" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        onClick={() =>
                          window.open(
                            "https://maps.google.com/?q=Av.+Ayrton+Senna+da+Silva+-+Londrina,+PR,+86050-460/",
                            "_blank",
                          )
                        }
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Ver no Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </FadeIn>

            {/* Right contact form */}
            <FadeIn direction="left" delay={0.3} className="lg:w-2/3">
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="contact" className="text-sm">
                    Formulário de Contato
                  </TabsTrigger>
                  <TabsTrigger value="project" className="text-sm">
                    Solicitar Orçamento
                  </TabsTrigger>
                  <TabsTrigger value="support" className="text-sm">
                    Suporte ao Cliente
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="contact">
                  <div className="bg-gradient-to-br from-blue-900/60 to-purple-800/40 backdrop-blur-sm p-8 rounded-lg border border-blue-800/50">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5 text-blue-400" />
                      Envie sua Mensagem
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <StaggerChildren staggerDelay={0.05}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="w-full">
                            <Label htmlFor="name" className="block text-sm mb-1">
                              Nome Completo*
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Seu nome completo"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              disabled={formState === "submitting"}
                            />
                          </div>

                          <div>
                            <Label htmlFor="email" className="block text-sm mb-1">
                              Email*
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="seu.email@exemplo.com"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              disabled={formState === "submitting"}
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="block text-sm mb-1">
                              Telefone/WhatsApp*
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="(00) 00000-0000"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              disabled={formState === "submitting"}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                          <div>
                            <Label htmlFor="company" className="block text-sm mb-1">
                              Nome da Empresa (opcional)
                            </Label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              placeholder="Nome da sua empresa"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              value={formData.company}
                              onChange={handleChange}
                              disabled={formState === "submitting"}
                            />
                          </div>
                          <div>
                            <Label htmlFor="service" className="block text-sm mb-1">
                              Serviço de Interesse*
                            </Label>
                            <select
                              id="service"
                              name="service"
                              className="w-full h-10 px-3 py-2 bg-white text-gray-900 rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              required
                              value={formData.service}
                              onChange={handleChange}
                              disabled={formState === "submitting"}
                            >
                              <option value="">Selecione um serviço</option>
                              <option value="website">Criação de Site</option>
                              <option value="google-ads">Google Ads</option>
                              <option value="seo">SEO</option>
                              <option value="social-media">Redes Sociais</option>
                              <option value="other">Outro</option>
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="howDidYouFindUs" className="block text-sm mb-1">
                              Como nos conheceu?*
                            </Label>
                            <select
                              id="howDidYouFindUs"
                              name="howDidYouFindUs"
                              className="w-full h-10 px-3 py-2 bg-white text-gray-900 rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              required
                              value={formData.howDidYouFindUs}
                              onChange={handleChange}
                              disabled={formState === "submitting"}
                            >
                              <option value="">Selecione uma opção</option>
                              <option value="google">Google</option>
                              <option value="social-media">Redes Sociais</option>
                              <option value="referral">Indicação</option>
                              <option value="other">Outro</option>
                            </select>
                          </div>
                        </div>

                        <div className="">
                          <Label htmlFor="message" className="block text-sm mb-1">
                            Mensagem*
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Descreva seu projeto ou necessidade..."
                            className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500 resize-none"
                            rows={5}
                            cols={80}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            disabled={formState === "submitting"}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="newsletter"
                              checked={formData.newsletter}
                              onCheckedChange={handleCheckboxChange}
                              disabled={formState === "submitting"}
                            />
                            <label
                              htmlFor="newsletter"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Desejo receber a newsletter com dicas e novidades sobre marketing digital
                            </label>
                          </div>

                          <div>
                            <Label className="block text-sm mb-2">Urgência do contato</Label>
                            <RadioGroup
                              value={formData.urgency}
                              onValueChange={handleRadioChange}
                              disabled={formState === "submitting"}
                              className="flex space-x-4"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="low" id="low" />
                                <Label htmlFor="low">Baixa</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="normal" id="normal" />
                                <Label htmlFor="normal">Normal</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="high" id="high" />
                                <Label htmlFor="high">Alta</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className={`w-full transition-all duration-300 ${formState === "submitting"
                            ? "bg-blue-700 cursor-wait"
                            : formState === "success"
                              ? "bg-green-600 hover:bg-green-700"
                              : formState === "error"
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-blue-600 hover:bg-blue-700"
                            }`}
                          disabled={formState === "submitting"}
                        >
                          {formState === "submitting" ? (
                            <div className="flex items-center">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Enviando...
                            </div>
                          ) : formState === "success" ? (
                            <div className="flex items-center">
                              <CheckCircle2 className="mr-2 h-5 w-5" />
                              Mensagem Enviada!
                            </div>
                          ) : formState === "error" ? (
                            <div className="flex items-center">
                              <AlertCircle className="mr-2 h-5 w-5" />
                              Erro ao Enviar. Tente Novamente.
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <Send className="mr-2 h-5 w-5" />
                              Enviar Mensagem
                            </div>
                          )}
                        </Button>

                        {formState === "success" && (
                          <div className="bg-green-600/20 border border-green-600/30 rounded-md p-4 text-green-100">
                            <p className="flex items-center">
                              <CheckCircle2 className="mr-2 h-5 w-5" />
                              Sua mensagem foi enviada com sucesso! Nossa equipe entrará em contato em breve.
                            </p>
                          </div>
                        )}

                        {formState === "error" && (
                          <div className="bg-red-600/20 border border-red-600/30 rounded-md p-4 text-red-100">
                            <p className="flex items-center">
                              <AlertCircle className="mr-2 h-5 w-5" />
                              Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato por
                              um dos canais alternativos.
                            </p>
                          </div>
                        )}
                      </StaggerChildren>
                    </form>
                  </div>
                </TabsContent>

                <TabsContent value="project">
                  <div className="bg-gradient-to-br from-blue-900/60 to-purple-800/40 backdrop-blur-sm p-8 rounded-lg border border-blue-800/50">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <Building className="mr-2 h-5 w-5 text-blue-400" />
                      Solicitar Orçamento de Projeto
                    </h2>

                    <form onSubmit={handleProjectFormSubmit} className="space-y-4">
                      <StaggerChildren staggerDelay={0.05}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="project-name" className="block text-sm mb-1">
                              Nome Completo*
                            </Label>
                            <Input
                              id="project-name"
                              name="projectName"
                              type="text"
                              placeholder="Seu nome completo"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              required
                              value={projectFormData.projectName}
                              onChange={handleProjectFormChange}
                            />
                          </div>

                          <div>
                            <Label htmlFor="project-email" className="block text-sm mb-1">
                              Email*
                            </Label>
                            <Input
                              id="project-email"
                              name="projectEmail"
                              type="email"
                              placeholder="seu.email@exemplo.com"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              required
                              value={projectFormData.projectEmail}
                              onChange={handleProjectFormChange}
                            />
                          </div>
                          <div>
                            <Label htmlFor="project-phone" className="block text-sm mb-1">
                              Telefone/WhatsApp*
                            </Label>
                            <Input
                              id="project-phone"
                              name="projectPhone"
                              type="tel"
                              placeholder="(00) 00000-0000"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              required
                              value={projectFormData.projectPhone}
                              onChange={handleProjectFormChange}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                          <div>
                            <Label htmlFor="project-company" className="block text-sm mb-1">
                              Nome da Empresa*
                            </Label>
                            <Input
                              id="project-company"
                              name="projectCompany"
                              type="text"
                              placeholder="Nome da sua empresa"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              required
                              value={projectFormData.projectCompany}
                              onChange={handleProjectFormChange}
                            />
                          </div>
                          <div>
                            <Label htmlFor="websiteUrl" className="block text-sm mb-1">
                              Website atual (opcional)
                            </Label>
                            <Input
                              id="websiteUrl"
                              name="websiteUrl"
                              type="url"
                              placeholder="https://www.seusite.com.br"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              value={projectFormData.websiteUrl}
                              onChange={handleProjectFormChange}
                            />
                          </div>
                          <div>
                            <Label htmlFor="competitors" className="block text-sm mb-1">
                              Principais concorrentes
                            </Label>
                            <Input
                              id="competitors"
                              name="competitors"
                              type="text"
                              placeholder="Concorrente 1, Concorrente 2"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              value={projectFormData.competitors}
                              onChange={handleProjectFormChange}
                            />
                          </div>
                        </div>



                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="project-type" className="block text-sm mb-1">
                              Tipo de Projeto*
                            </Label>
                            <select
                              id="project-type"
                              name="projectType"
                              className="w-full h-10 px-3 py-2 bg-white text-gray-900 rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              required
                              value={projectFormData.projectType}
                              onChange={handleProjectFormChange}
                            >
                              <option value="">Selecione o tipo de projeto</option>
                              <option value="website">Criação de Website</option>
                              <option value="ecommerce">E-commerce</option>
                              <option value="landing-page">Landing Page</option>
                              <option value="institutional">Site Institucional</option>
                              <option value="blog">Blog</option>
                              <option value="portal">Portal</option>
                              <option value="google-ads">Campanha Google Ads</option>
                              <option value="seo">Otimização SEO</option>
                              <option value="social-media">Gestão de Redes Sociais</option>
                              <option value="email-marketing">Email Marketing</option>
                              <option value="branding">Branding</option>
                              <option value="other">Outro</option>
                            </select>
                          </div>

                          <div>
                            <Label htmlFor="project-budget" className="block text-sm mb-1">
                              Orçamento Estimado*
                            </Label>
                            <select
                              id="project-budget"
                              name="projectBudget"
                              className="w-full h-10 px-3 py-2 bg-white text-gray-900 rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              required
                              value={projectFormData.projectBudget}
                              onChange={handleProjectFormChange}
                            >
                              <option value="">Selecione uma faixa de orçamento</option>
                              <option value="ate-2k">Até R$ 2.000</option>
                              <option value="2k-5k">R$ 2.000 a R$ 5.000</option>
                              <option value="5k-10k">R$ 5.000 a R$ 10.000</option>
                              <option value="10k-20k">R$ 10.000 a R$ 20.000</option>
                              <option value="20k-30k">R$ 20.000 a R$ 30.000</option>
                              <option value="30k-50k">R$ 30.000 a R$ 50.000</option>
                              <option value="50k-100k">R$ 50.000 a R$ 100.000</option>
                              <option value="acima-100k">Acima de R$ 100.000</option>
                            </select>
                          </div>
                        </div>



                        <div>
                          <Label htmlFor="specificObjectives" className="block text-sm mb-1">
                            Objetivos específicos
                          </Label>
                          <Textarea
                            id="specificObjectives"
                            name="specificObjectives"
                            placeholder="Quais são os objetivos específicos que você deseja alcançar com este projeto?"
                            className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                            rows={3}
                            cols={80}
                            value={projectFormData.specificObjectives}
                            onChange={handleProjectFormChange}
                          />
                        </div>

                        <div>
                          <Label htmlFor="project-description" className="block text-sm mb-1">
                            Descrição do Projeto*
                          </Label>
                          <Textarea
                            id="project-description"
                            name="projectDescription"
                            placeholder="Descreva detalhadamente seu projeto, objetivos, referências e expectativas..."
                            className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                            rows={5}
                            cols={80}
                            required
                            value={projectFormData.projectDescription}
                            onChange={handleProjectFormChange}
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="hasBrandMaterial"
                            name="hasBrandMaterial"
                            checked={projectFormData.hasBrandMaterial}
                            onCheckedChange={(checked) => handleProjectCheckboxChange("hasBrandMaterial", checked)}
                          />
                          <label
                            htmlFor="hasBrandMaterial"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Tem material de marca (logotipo, manual, etc.)?
                          </label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="needsHosting"
                            name="needsHosting"
                            checked={projectFormData.needsHosting}
                            onCheckedChange={(checked) => handleProjectCheckboxChange("needsHosting", checked)}
                          />
                          <label
                            htmlFor="needsHosting"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Precisa de hospedagem?
                          </label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="project-terms"
                            name="projectTerms"
                            checked={projectFormData.projectTerms}
                            onCheckedChange={(checked) => handleProjectCheckboxChange("projectTerms", checked)}
                          />
                          <label
                            htmlFor="project-terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Concordo com os{" "}
                            <Link href="/terms" className="text-blue-400 hover:text-blue-300 underline">
                              termos de serviço
                            </Link>{" "}
                            e{" "}
                            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                              política de privacidade
                            </Link>
                          </label>
                        </div>

                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                          <Building className="mr-2 h-5 w-5" />
                          Solicitar Orçamento
                        </Button>
                      </StaggerChildren>
                    </form>
                  </div>
                </TabsContent>

                <TabsContent value="support">
                  <div className="bg-gradient-to-br from-blue-900/60 to-purple-800/40 backdrop-blur-sm p-8 rounded-lg border border-blue-800/50">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <Headphones className="mr-2 h-5 w-5 text-blue-400" />
                      Suporte ao Cliente
                    </h2>

                    <form onSubmit={handleSupportFormSubmit} className="space-y-4">
                      <StaggerChildren staggerDelay={0.05}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="support-name" className="block text-sm mb-1">
                              Nome Completo*
                            </Label>
                            <Input
                              id="support-name"
                              name="supportName"
                              type="text"
                              placeholder="Seu nome completo"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              required
                              value={supportFormData.supportName}
                              onChange={handleSupportFormChange}
                            />
                          </div>

                          <div>
                            <Label htmlFor="support-email" className="block text-sm mb-1">
                              Email*
                            </Label>
                            <Input
                              id="support-email"
                              name="supportEmail"
                              type="email"
                              placeholder="seu.email@exemplo.com"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              required
                              value={supportFormData.supportEmail}
                              onChange={handleSupportFormChange}
                            />
                          </div>
                          <div>
                            <Label htmlFor="orderNumber" className="block text-sm mb-1">
                              Número do pedido/contrato
                            </Label>
                            <Input
                              id="orderNumber"
                              name="orderNumber"
                              type="text"
                              placeholder="Número do pedido ou contrato"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              value={supportFormData.orderNumber}
                              onChange={handleSupportFormChange}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                          <div>
                            <Label htmlFor="problemDate" className="block text-sm mb-1">
                              Data do problema
                            </Label>
                            <Input
                              id="problemDate"
                              name="problemDate"
                              type="date"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              value={supportFormData.problemDate}
                              onChange={handleSupportFormChange}
                            />
                          </div>
                          <div>
                            <Label htmlFor="support-id" className="block text-sm mb-1">
                              ID do Cliente ou Projeto*
                            </Label>
                            <Input
                              id="support-id"
                              name="supportId"
                              type="text"
                              placeholder="Ex: CL-12345 ou PR-6789"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              required
                              value={supportFormData.supportId}
                              onChange={handleSupportFormChange}
                            />
                          </div>

                          <div>
                            <Label htmlFor="support-type" className="block text-sm mb-1">
                              Tipo de Suporte*
                            </Label>
                            <select
                              id="support-type"
                              name="supportType"
                              className="w-full h-10 px-3 py-2 bg-white text-gray-900 rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                              required
                              value={supportFormData.supportType}
                              onChange={handleSupportFormChange}
                            >
                              <option value="">Selecione o tipo de suporte</option>
                              <option value="technical">Problema Técnico</option>
                              <option value="billing">Dúvida sobre Faturamento</option>
                              <option value="account">Problemas com Conta/Acesso</option>
                              <option value="general">Dúvidas Gerais</option>
                              <option value="feedback">Feedback/Sugestões</option>
                              <option value="complaint">Reclamação</option>
                            </select>
                          </div>
                        </div>

                        {supportFormData.supportType === "technical" && (
                          <>

                            <div>
                              <Label htmlFor="browserDevice" className="block text-sm mb-1">
                                Navegador/Dispositivo
                              </Label>
                              <Input
                                id="browserDevice"
                                name="browserDevice"
                                type="text"
                                placeholder="Ex: Chrome 90 no Windows 10"
                                className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                                value={supportFormData.browserDevice}
                                onChange={handleSupportFormChange}
                              />
                            </div>

                            <div>
                              <Label htmlFor="pageUrl" className="block text-sm mb-1">
                                URL da página com problema
                              </Label>
                              <Input
                                id="pageUrl"
                                name="pageUrl"
                                type="url"
                                placeholder="https://www.seusite.com.br/pagina-com-problema"
                                className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                                value={supportFormData.pageUrl}
                                onChange={handleSupportFormChange}
                              />
                            </div>
                          </>
                        )}

                        

                        <div>
                          <Label htmlFor="support-message" className="block text-sm mb-1">
                            Descrição do Problema*
                          </Label>
                          <Textarea
                            id="support-message"
                            name="supportMessage"
                            placeholder="Descreva detalhadamente o problema, incluindo quando começou, passos para reproduzir e qualquer mensagem de erro..."
                            className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                            rows={5}
                            cols={80}
                            required
                            value={supportFormData.supportMessage}
                            onChange={handleSupportFormChange}
                          />
                        </div>
                        
                        <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="">
                          <Label htmlFor="support-priority" className="block text-sm mb-1">
                            Prioridade*
                          </Label>
                          <select
                            id="support-priority"
                            name="supportPriority"
                            className="w-full h-10 px-3 py-2 bg-white text-gray-900 rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                            value={supportFormData.supportPriority}
                            onChange={handleSupportFormChange}
                          >
                            <option value="">Selecione a prioridade</option>
                            <option value="low">Baixa - Dúvida geral</option>
                            <option value="medium">Média - Problema que afeta parcialmente</option>
                            <option value="high">Alta - Problema que impede o uso</option>
                            <option value="critical">Crítica - Sistema fora do ar</option>
                          </select>
                        </div>

                          <div>
                            <Label htmlFor="support-attachment" className="block text-sm mb-1">
                              Anexar Arquivo (opcional)
                            </Label>
                            <Input
                              id="support-attachment"
                              name="supportAttachment"
                              type="file"
                              className="bg-white text-gray-900 border-0 transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  setSupportFormData((prev) => ({ ...prev, supportAttachment: e.target.files[0] }))
                                }
                              }}
                            />
                            {supportFormData.supportAttachment && (
                              <p className="text-xs text-blue-300 mt-1">
                                Arquivo anexado: {supportFormData.supportAttachment.name}
                              </p>
                            )}
                            <p className="text-xs text-blue-300 mt-1">
                              Formatos aceitos: JPG, PNG, PDF, DOC, DOCX. Tamanho máximo: 5MB
                            </p>
                          </div>
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                            <Headphones className="mr-2 h-5 w-5" />
                            Enviar Solicitação de Suporte
                          </Button>
                      </StaggerChildren>
                    </form>
                  </div>
                </TabsContent>
              </Tabs>

              {/* FAQ Section */}
              <div className="mt-8 bg-gradient-to-br from-blue-900/60 to-purple-800/40 backdrop-blur-sm p-8 rounded-lg border border-blue-800/50">
                <h3 className="text-xl font-bold mb-6">Perguntas Frequentes</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      Qual o prazo de resposta para mensagens enviadas pelo formulário?
                    </AccordionTrigger>
                    <AccordionContent>
                      Respondemos a todas as mensagens em até 24 horas úteis. Para assuntos urgentes, recomendamos
                      entrar em contato diretamente pelo WhatsApp ou telefone para um atendimento mais rápido.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Como funciona o processo de orçamento para novos projetos?
                    </AccordionTrigger>
                    <AccordionContent>
                      Após o recebimento da solicitação de orçamento, nossa equipe analisa as necessidades do projeto e
                      entra em contato em até 48 horas com uma proposta personalizada. Para projetos mais complexos,
                      podemos agendar uma reunião para entender melhor suas necessidades antes de enviar o orçamento
                      final.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      Vocês atendem clientes de outras cidades ou estados?
                    </AccordionTrigger>
                    <AccordionContent>
                      Sim, atendemos clientes de todo o Brasil e também internacionais. Todo o processo pode ser
                      realizado remotamente, com reuniões por videoconferência e acompanhamento online do projeto.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      É possível agendar uma reunião antes de contratar os serviços?
                    </AccordionTrigger>
                    <AccordionContent>
                      Absolutamente! Oferecemos uma consulta inicial gratuita para entender suas necessidades e explicar
                      como podemos ajudar. Você pode agendar diretamente pelo botão "Agendar uma Reunião" ou entrar em
                      contato por qualquer um dos nossos canais.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </FadeIn>
          </div>

          {/* CTA Section */}
          <section className="mb-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio digital?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Entre em contato hoje mesmo e descubra como podemos ajudar sua empresa a alcançar novos patamares no
                ambiente digital.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Fale pelo WhatsApp
                </a>
                
                <a
                  href="tel:+551199999999"
                  className="inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                </a>
              </div>
            </FadeIn>
          </section>
        </div>

        <Footer />
      </div>
    </PageTransition>
  )
}
