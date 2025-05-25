import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ReverseProvider } from "@/contexts/reverse-context"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cuttital Marketing Agency",
  description: "Professional digital marketing services for your business",
  generator: "v0.dev",
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  )
}

// Client-side effects component
function ClientEffects() {
  return (
    <Suspense fallback={null}>
      <div id="reverse-effects-container" />
    </Suspense>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ReverseProvider>
            <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
            <ClientEffects />
          </ReverseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
