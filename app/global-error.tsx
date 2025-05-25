"use client"

import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-gray-800 to-black">
          <div className="text-center space-y-8 px-4">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-red-400">Oops!</h1>
              <h2 className="text-2xl font-semibold text-white">Algo deu errado</h2>
              <p className="text-gray-300 max-w-md mx-auto">
                Ocorreu um erro inesperado. Tente recarregar a página ou entre em contato conosco se o problema
                persistir.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={reset} size="lg" className="bg-red-600 hover:bg-red-700 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Tentar Novamente
              </Button>

              <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <a href="/">Voltar ao Início</a>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
