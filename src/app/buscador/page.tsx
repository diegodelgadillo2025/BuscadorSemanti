"use client";

import { SearchProvider } from "@/context/SearchContext";
import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";

export default function BuscadorPage() {
  return (
    <SearchProvider>
      <main className="relative min-h-screen bg-gradient-to-b from-background to-card/30 py-20 px-6">
        
        {/* Fondos decorativos */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-accent/8 to-transparent rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-5xl mx-auto space-y-12">

          {/* Título */}
          <header className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Buscador Semántico
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Realiza búsquedas inteligentes sobre series, actores y relaciones 
              utilizando ontologías OWL y RDF.
            </p>
          </header>

          {/* Barra de búsqueda */}
          <section className="backdrop-blur-sm bg-card/60 border border-border rounded-2xl p-8 shadow-lg">
            <SearchBar />
          </section>

          {/* Resultados */}
          <section>
            <SearchResults />
          </section>
        </div>

      </main>
    </SearchProvider>
  );
}
