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
      <body className="min-h-screen bg-gray-50 antialiased">
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
