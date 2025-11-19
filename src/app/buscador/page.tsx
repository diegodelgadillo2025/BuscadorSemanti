"use client";

import { SearchProvider } from "@/context/SearchContext";
import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";

export default function BuscadorPage() {
  return (
    <SearchProvider>
      <main className="relative min-h-screen flex flex-col bg-gradient-to-br from-[#0F1729] via-[#1a2847] to-[#0F1729] py-20 px-6 overflow-hidden">

        {/* Fondos suaves */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-28 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-80 bg-primary/5 rounded-full blur-2xl opacity-40" />
        </div>

        {/* CONTENEDOR PRINCIPAL CORREGIDO */}
        <div className="max-w-5xl mx-auto space-y-16 flex-grow">

          {/* Badge */}
          <div className="text-left">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
              Búsqueda Semántica
            </span>
          </div>

          {/* Header */}
          <header className="space-y-6 text-left">
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">
              Descubre Series
              <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                con Inteligencia
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Realiza búsquedas avanzadas sobre series, actores y relaciones utilizando ontologías
              OWL y RDF con procesamiento semántico inteligente.
            </p>
          </header>

          {/* Card del buscador */}
          <section className="backdrop-blur-xl bg-card border border-border rounded-2xl p-10 shadow-xl transition-all duration-300 hover:shadow-lg">
            <SearchBar />
          </section>

          {/* Resultados */}
          <section className="mt-12">
            <SearchResults />
          </section>
        </div>

        {/* Footer */}
        <footer className="py-10 bg-black/20 border-t border-white/10 mt-auto">
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-400 text-sm space-y-2">
            <p className="font-semibold text-white">
              WebSemantica – Buscador Semántico
            </p>
            <p>© 2025. Tecnología basada en ontologías y búsqueda avanzada.</p>
          </div>
        </footer>

      </main>
    </SearchProvider>
  );
}
