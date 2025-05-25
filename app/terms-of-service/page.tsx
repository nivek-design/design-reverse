import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import { TextReveal } from "@/components/animations/text-reveal"
import { FileText, Shield, AlertCircle, FileCheck, Gavel, RefreshCw, Globe, BookOpen } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  const lastUpdated = "15 de maio de 2024"

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/10 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">Termos e Condições de Uso</h1>
              <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto mb-8">
                Este documento estabelece as regras para utilização do nosso site e serviços. Por favor, leia com
                atenção.
              </p>
              <p className="text-sm text-blue-300 text-center">Última atualização: {lastUpdated}</p>
            </FadeIn>
          </div>
        </section>

        {/* Índice */}
        <section className="py-12 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="bg-slate-800/50 border border-blue-900/30 rounded-xl p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-6">Índice</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="#aceitacao"
                    className="flex items-center gap-3 text-blue-300 hover:text-blue-100 transition-colors p-2 rounded-md hover:bg-blue-900/20"
                  >
                    <FileCheck className="h-5 w-5" />
                    <span>1. Aceitação dos Termos</span>
                  </Link>
                  <Link
                    href="#uso"
                    className="flex items-center gap-3 text-blue-300 hover:text-blue-100 transition-colors p-2 rounded-md hover:bg-blue-900/20"
                  >
                    <BookOpen className="h-5 w-5" />
                    <span>2. Uso do Site</span>
                  </Link>
                  <Link
                    href="#propriedade"
                    className="flex items-center gap-3 text-blue-300 hover:text-blue-100 transition-colors p-2 rounded-md hover:bg-blue-900/20"
                  >
                    <Shield className="h-5 w-5" />
                    <span>3. Propriedade Intelectual</span>
                  </Link>
                  <Link
                    href="#conteudo"
                    className="flex items-center gap-3 text-blue-300 hover:text-blue-100 transition-colors p-2 rounded-md hover:bg-blue-900/20"
                  >
                    <FileText className="h-5 w-5" />
                    <span>4. Conteúdo do Usuário</span>
                  </Link>
                  <Link
                    href="#limitacao"
                    className="flex items-center gap-3 text-blue-300 hover:text-blue-100 transition-colors p-2 rounded-md hover:bg-blue-900/20"
                  >
                    <AlertCircle className="h-5 w-5" />
                    <span>5. Limitação de Responsabilidade</span>
                  </Link>
                  <Link
                    href="#modificacoes"
                    className="flex items-center gap-3 text-blue-300 hover:text-blue-100 transition-colors p-2 rounded-md hover:bg-blue-900/20"
                  >
                    <RefreshCw className="h-5 w-5" />
                    <span>6. Modificações dos Termos</span>
                  </Link>
                  <Link
                    href="#lei"
                    className="flex items-center gap-3 text-blue-300 hover:text-blue-100 transition-colors p-2 rounded-md hover:bg-blue-900/20"
                  >
                    <Gavel className="h-5 w-5" />
                    <span>7. Lei Aplicável</span>
                  </Link>
                  <Link
                    href="#disposicoes"
                    className="flex items-center gap-3 text-blue-300 hover:text-blue-100 transition-colors p-2 rounded-md hover:bg-blue-900/20"
                  >
                    <Globe className="h-5 w-5" />
                    <span>8. Disposições Gerais</span>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* 1. Aceitação dos Termos */}
            <div id="aceitacao" className="mb-16 scroll-mt-24">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <FileCheck className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <TextReveal text="1. Aceitação dos Termos" />
                  </h2>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mt-4">
                  <p className="text-slate-300 mb-4">
                    Ao acessar ou utilizar o site da Design Reverse Marketing Agency, você concorda em cumprir estes
                    Termos e Condições de Uso, todas as leis e regulamentos aplicáveis, e concorda que é responsável
                    pelo cumprimento de todas as leis locais aplicáveis.
                  </p>
                  <p className="text-slate-300 mb-4">
                    Se você não concordar com algum destes termos, está proibido de usar ou acessar este site. Os
                    materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais
                    aplicáveis.
                  </p>
                  <p className="text-slate-300">
                    Estes Termos de Serviço aplicam-se a todos os usuários do site, incluindo, sem limitação, usuários
                    que são navegadores, fornecedores, clientes, comerciantes e/ou contribuidores de conteúdo.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* 2. Uso do Site */}
            <div id="uso" className="mb-16 scroll-mt-24">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <TextReveal text="2. Uso do Site" />
                  </h2>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mt-4">
                  <p className="text-slate-300 mb-4">
                    A permissão é concedida para uso temporário do site da Design Reverse Marketing Agency apenas para
                    fins pessoais e não comerciais. Esta é a concessão de uma licença, não uma transferência de título,
                    e sob esta licença você não pode:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-slate-300 space-y-2">
                    <li>Modificar ou copiar os materiais;</li>
                    <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
                    <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
                    <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
                    <li>
                      Transferir os materiais para outra pessoa ou "espelhar" os materiais em qualquer outro servidor.
                    </li>
                  </ul>
                  <p className="text-slate-300">
                    Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser
                    rescindida por Design Reverse Marketing Agency a qualquer momento. Ao encerrar a visualização desses
                    materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua
                    posse, seja em formato eletrônico ou impresso.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* 3. Propriedade Intelectual */}
            <div id="propriedade" className="mb-16 scroll-mt-24">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <TextReveal text="3. Propriedade Intelectual" />
                  </h2>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mt-4">
                  <p className="text-slate-300 mb-4">
                    Todo o conteúdo incluído no site, como textos, gráficos, logotipos, imagens, bem como a compilação
                    destes (ou seja, a coleta, arranjo e montagem), e todo o software usado no site, é propriedade da
                    Design Reverse Marketing Agency ou de seus fornecedores e protegido por leis de direitos autorais e
                    marcas comerciais.
                  </p>
                  <p className="text-slate-300 mb-4">
                    A reprodução, distribuição, exibição ou transmissão de qualquer conteúdo do site é estritamente
                    proibida, a menos que especificamente autorizada pela Design Reverse Marketing Agency.
                  </p>
                  <p className="text-slate-300">
                    Os nomes, marcas, logotipos e designs relacionados utilizados e exibidos neste site são marcas
                    registradas e não registradas da Design Reverse Marketing Agency. Nada contido neste site deve ser
                    interpretado como concessão, por implicação, preclusão ou de outra forma, de qualquer licença ou
                    direito de usar qualquer marca exibida no site sem a permissão por escrito da Design Reverse
                    Marketing Agency.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* 4. Conteúdo do Usuário */}
            <div id="conteudo" className="mb-16 scroll-mt-24">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <TextReveal text="4. Conteúdo do Usuário" />
                  </h2>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mt-4">
                  <p className="text-slate-300 mb-4">
                    Algumas áreas do site podem permitir que os usuários postem conteúdo, como comentários, avaliações
                    ou outras informações. Ao fornecer qualquer conteúdo ao nosso site, você concorda que:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-slate-300 space-y-2">
                    <li>Você é o proprietário ou tem o direito de usar e distribuir tal conteúdo;</li>
                    <li>O conteúdo não é difamatório, ofensivo, obsceno ou ilegal;</li>
                    <li>O conteúdo não infringe os direitos de propriedade intelectual de terceiros;</li>
                    <li>O conteúdo não contém vírus, malware ou outros códigos maliciosos;</li>
                    <li>
                      Você concede à Design Reverse Marketing Agency uma licença mundial, não exclusiva, livre de
                      royalties para usar, reproduzir, modificar, adaptar, publicar, traduzir, distribuir e exibir tal
                      conteúdo.
                    </li>
                  </ul>
                  <p className="text-slate-300">
                    A Design Reverse Marketing Agency reserva-se o direito de remover qualquer conteúdo que viole estes
                    termos ou que seja considerado inadequado a seu exclusivo critério.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* 5. Limitação de Responsabilidade */}
            <div id="limitacao" className="mb-16 scroll-mt-24">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <TextReveal text="5. Limitação de Responsabilidade" />
                  </h2>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mt-4">
                  <p className="text-slate-300 mb-4">
                    Os materiais no site da Design Reverse Marketing Agency são fornecidos "como estão" e sem garantias
                    de qualquer tipo, expressas ou implícitas. A Design Reverse Marketing Agency não garante que os
                    materiais em seu site sejam precisos, completos ou atuais.
                  </p>
                  <p className="text-slate-300 mb-4">
                    A Design Reverse Marketing Agency não será responsável por quaisquer danos decorrentes do uso ou da
                    incapacidade de usar os materiais em seu site, mesmo que a Design Reverse Marketing Agency ou um
                    representante autorizado tenha sido notificado oralmente ou por escrito da possibilidade de tais
                    danos.
                  </p>
                  <p className="text-slate-300">
                    Em nenhuma circunstância a Design Reverse Marketing Agency ou seus fornecedores serão responsáveis
                    por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro, ou devido a
                    interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em seu site.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* 6. Modificações dos Termos */}
            <div id="modificacoes" className="mb-16 scroll-mt-24">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <RefreshCw className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <TextReveal text="6. Modificações dos Termos" />
                  </h2>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mt-4">
                  <p className="text-slate-300 mb-4">
                    A Design Reverse Marketing Agency pode revisar estes Termos de Serviço do site a qualquer momento,
                    sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual destes Termos e
                    Condições de Uso.
                  </p>
                  <p className="text-slate-300 mb-4">
                    É sua responsabilidade revisar periodicamente estes Termos para verificar se há alterações. O uso
                    contínuo do site após a publicação de alterações constitui aceitação dessas alterações.
                  </p>
                  <p className="text-slate-300">
                    Recomendamos que você verifique esta página regularmente para estar ciente de quaisquer alterações,
                    pois elas são vinculativas para você.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* 7. Lei Aplicável */}
            <div id="lei" className="mb-16 scroll-mt-24">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <Gavel className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <TextReveal text="7. Lei Aplicável" />
                  </h2>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mt-4">
                  <p className="text-slate-300 mb-4">
                    Quaisquer reclamações relacionadas ao site da Design Reverse Marketing Agency serão regidas pelas
                    leis do Brasil, sem consideração de suas disposições de conflito de leis.
                  </p>
                  <p className="text-slate-300 mb-4">
                    Ao utilizar este site, você concorda que a jurisdição exclusiva para qualquer ação decorrente ou
                    relacionada a estes termos será o foro da comarca de Londrina, Estado do Paraná.
                  </p>
                  <p className="text-slate-300">
                    Se qualquer disposição destes Termos for considerada ilegal, nula ou inexequível, tal disposição
                    será considerada separável destes Termos e não afetará a validade e exequibilidade das disposições
                    restantes.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* 8. Disposições Gerais */}
            <div id="disposicoes" className="mb-16 scroll-mt-24">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <TextReveal text="8. Disposições Gerais" />
                  </h2>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mt-4">
                  <p className="text-slate-300 mb-4">
                    Estes Termos e Condições de Uso constituem o acordo integral entre você e a Design Reverse Marketing
                    Agency em relação ao uso do site, e substituem todos os acordos e entendimentos anteriores ou
                    contemporâneos, sejam escritos ou orais, relativos ao assunto aqui tratado.
                  </p>
                  <p className="text-slate-300 mb-4">
                    A falha da Design Reverse Marketing Agency em exercer ou fazer cumprir qualquer direito ou
                    disposição destes Termos não constituirá uma renúncia a tal direito ou disposição.
                  </p>
                  <p className="text-slate-300 mb-4">
                    Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco através do e-mail
                    contato@designreverse.com.
                  </p>
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mt-6">
                    <p className="text-blue-200 text-sm">
                      Ao continuar a usar nosso site, você confirma que leu, compreendeu e concorda com estes Termos e
                      Condições de Uso.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
