import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TransitionProvider } from "@/components/transition-provider"
import { ReverseProvider } from "@/contexts/reverse-context"
import { ReverseEffects } from "@/components/reverse-effects"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Design Reverse Marketing Agency",
  description: "Professional digital marketing services for your business",
  generator: "Next.js",
  applicationName: "Design Reverse",
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ReverseProvider>
            <Suspense fallback={<LoadingFallback />}>
              <TransitionProvider>{children}</TransitionProvider>
            </Suspense>
            <Suspense fallback={null}>
              <ReverseEffects />
            </Suspense>
          </ReverseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
