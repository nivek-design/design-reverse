import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TransitionProvider } from "@/components/transition-provider"
import { ReverseProvider } from "@/contexts/reverse-context"
import { ReverseEffects } from "@/components/reverse-effects"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cuttital Marketing Agency",
  description: "Professional digital marketing services for your business",
    generator: 'v0.dev'
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
            <TransitionProvider>{children}</TransitionProvider>
            <ReverseEffects />
          </ReverseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
