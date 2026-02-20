import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TransitionProvider } from "@/components/transition-provider"
import { ReverseProvider } from "@/contexts/reverse-context"
import { ReverseEffects } from "@/components/reverse-effects"
import { Suspense } from "react"
import Script from "next/script"

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
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/design-reverse-logo.png" as="image" />
        <link rel="preload" href="/drone-marketing-showcase.png" as="image" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RHDPR14XZ7" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RHDPR14XZ7', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true,
                custom_map: {
                  'custom_parameter_1': 'service_interest',
                  'custom_parameter_2': 'conversion_source'
                }
              });
              
              // Track scroll depth
              let scrollDepth = 0;
              window.addEventListener('scroll', function() {
                const currentScroll = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
                if (currentScroll > scrollDepth && currentScroll % 25 === 0) {
                  scrollDepth = currentScroll;
                  gtag('event', 'scroll_depth', {
                    event_category: 'engagement',
                    event_label: scrollDepth + '%',
                    value: scrollDepth
                  });
                }
              });
              
              // Track CTA clicks
              window.addEventListener('click', function(e) {
                if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                  const buttonText = e.target.textContent || e.target.closest('button').textContent;
                  gtag('event', 'cta_click', {
                    event_category: 'conversion',
                    event_label: buttonText.trim(),
                    page_location: window.location.href
                  });
                }
              });
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5XN7CHQK');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XN7CHQK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

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
