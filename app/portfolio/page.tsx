import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { ProjetosSection } from "@/components/sections/projetos-section"

export default function PortfolioPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#050518] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 pb-20">
          <Navbar variant="dark" />

          {/* Projetos Section com todos os projetos */}
          <ProjetosSection showAll={true} />
        </div>

        <Footer />
      </div>
    </PageTransition>
  )
}
