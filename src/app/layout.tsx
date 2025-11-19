import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "SemanticSeries",
  description: "Búsqueda semántica para series OWL",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#0F1729] overflow-x-hidden">

        {/* HEADER FIJO EN TODA LA APP */}
        <Header />

        {/* CONTENIDO DINÁMICO */}
        <main className="pt-6">
          {children}
        </main>
      </body>
    </html>
  );
}
