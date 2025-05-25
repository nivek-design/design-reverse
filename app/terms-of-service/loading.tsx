import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsLoading() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
        {/* Hero Section Skeleton */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="h-12 bg-slate-800/50 rounded-lg w-3/4 mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 bg-slate-800/50 rounded-lg w-2/3 mx-auto mb-3 animate-pulse"></div>
            <div className="h-6 bg-slate-800/50 rounded-lg w-1/2 mx-auto mb-8 animate-pulse"></div>
            <div className="h-4 bg-slate-800/50 rounded-lg w-1/4 mx-auto animate-pulse"></div>
          </div>
        </section>

        {/* Índice Skeleton */}
        <section className="py-12 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="bg-slate-800/50 border border-blue-900/30 rounded-xl p-6 max-w-4xl mx-auto">
              <div className="h-8 bg-slate-700/50 rounded-lg w-1/4 mb-6 animate-pulse"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-5 w-5 bg-slate-700/50 rounded-md animate-pulse"></div>
                    <div className="h-5 bg-slate-700/50 rounded-md w-3/4 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Skeleton */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 p-3 rounded-lg">
                    <div className="h-6 w-6 bg-slate-700/50 rounded-md animate-pulse"></div>
                  </div>
                  <div className="h-8 bg-slate-700/50 rounded-lg w-1/3 animate-pulse"></div>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mt-4">
                  <div className="h-4 bg-slate-700/50 rounded-md w-full mb-4 animate-pulse"></div>
                  <div className="h-4 bg-slate-700/50 rounded-md w-5/6 mb-4 animate-pulse"></div>
                  <div className="h-4 bg-slate-700/50 rounded-md w-full mb-4 animate-pulse"></div>
                  <div className="h-4 bg-slate-700/50 rounded-md w-4/5 mb-4 animate-pulse"></div>
                  <div className="h-4 bg-slate-700/50 rounded-md w-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
