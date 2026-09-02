import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://geniusfoods.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Genius Foods — Cardápio Digital para Restaurantes pelo WhatsApp",
  description:
    "Cardápio digital completo com pedidos pelo WhatsApp, painel em tempo real, notificações automáticas e assistente de IA. Grátis para começar.",
  keywords: [
    "cardápio digital restaurante",
    "cardápio digital WhatsApp",
    "sistema pedidos online restaurante",
    "cardápio digital açaiteria",
    "pedidos WhatsApp automático",
    "cardápio digital grátis",
  ],
  authors: [{ name: "Companhia Genius" }],
  creator: "Companhia Genius",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Genius Foods",
    title: "Genius Foods — Cardápio Digital para Restaurantes pelo WhatsApp",
    description:
      "Cardápio digital completo com pedidos pelo WhatsApp, painel em tempo real, notificações automáticas e assistente de IA. Grátis para começar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genius Foods — Cardápio Digital para Restaurantes pelo WhatsApp",
    description:
      "Cardápio digital completo com pedidos pelo WhatsApp, painel em tempo real, notificações automáticas e assistente de IA. Grátis para começar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3D1A6E",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Genius Foods",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: siteUrl,
  description:
    "Cardápio digital completo com pedidos pelo WhatsApp, painel em tempo real, notificações automáticas e assistente de IA.",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "BRL",
      description: "Cardápio com até 20 itens, pedidos ilimitados e painel de gestão completo.",
    },
    {
      "@type": "Offer",
      name: "Basic",
      price: "67",
      priceCurrency: "BRL",
      description: "Até 50 itens no cardápio, 3 temas de cores e sem marca Genius Foods.",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "127",
      priceCurrency: "BRL",
      description: "Itens ilimitados, assistente de IA no WhatsApp e relatórios financeiros.",
    },
    {
      "@type": "Offer",
      name: "Premium",
      price: "197",
      priceCurrency: "BRL",
      description: "White label, múltiplas unidades e atendimento VIP.",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Matheus" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Depois que migramos nosso atendimento para a Genius Foods parei de perder cliente.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Carolina" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Agilizou muito minha vida criar o cardápio digital, meus atendimentos são mais rápidos e eu não respondo as mesmas mensagens sempre.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ricardo" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "O impacto em meu negócio depois do cardápio da Genius Foods foi enorme. Meus clientes recebem notificação automática de cada etapa do pedido e o assistente de IA parece um humano de verdade.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-primary">{children}</body>
    </html>
  );
}
