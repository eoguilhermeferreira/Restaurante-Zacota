import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zacota Restaurante e Pizzaria",
  description:
    "Viva essa experiência de sabor, aconchego e tradição. Restaurante durante o dia, pizzaria à noite. Rodízio de pizza às quartas e domingos.",
  keywords: ["restaurante", "pizzaria", "Zacota", "rodízio", "pizza", "almoço"],
  openGraph: {
    title: "Zacota Restaurante e Pizzaria",
    description: "Viva essa experiência de sabor, aconchego e tradição.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#250006] text-[#F8F3EF] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
