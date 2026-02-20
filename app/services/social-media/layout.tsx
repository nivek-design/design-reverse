import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerenciamento de Mídias Sociais Londrina | Instagram, Facebook, LinkedIn - Design Reverse",
  description: "Gerenciamento profissional de redes sociais em Londrina. Instagram, Facebook, LinkedIn. +150% engajamento, estratégias que convertem. +50 clientes ativos!",
  keywords: [
    "gerenciamento redes sociais londrina",
    "mídias sociais londrina", 
    "instagram marketing londrina",
    "facebook ads londrina",
    "linkedin marketing londrina",
    "social media londrina",
    "gestão instagram londrina",
    "marketing redes sociais paraná",
    "conteúdo redes sociais londrina",
    "estratégia digital londrina"
  ],
  openGraph: {
    title: "Gerenciamento de Mídias Sociais Londrina | +150% Engajamento",
    description: "Gestão profissional de Instagram, Facebook e LinkedIn em Londrina. Estratégias que convertem seguidores em clientes.",
    url: "https://designreverse.com.br/services/social-media",
    images: [
      {
        url: "/resultados-reais.png",
        width: 1200,
        height: 630,
        alt: "Gerenciamento Mídias Sociais Londrina",
      },
    ],
  },
  alternates: {
    canonical: "https://designreverse.com.br/services/social-media",
  },
};

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
