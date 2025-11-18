"use client";

{/*import Header from "@/components/layout/Header";*/}
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import UploadAdvanced from "@/components/upload/UploadAdvanced";
import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";

import { SearchProvider } from "@/context/SearchContext";

export default function Page() {
  return (
    <SearchProvider>
      <main className="min-h-screen bg-background">
        
        <Hero />

        {/* Features Section */}
        <Features />
        
        {/* Upload OWL Ontology Section */}
       
          


        {/* Footer */}
        <footer className="py-8 bg-card border-t border-border">
          <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground text-sm space-y-2">
            <p className="font-semibold text-foreground">WebSemantica - Búsqueda Semántica de Series Televisivas</p>
            <p>© 2025. Powered by semantic search technology and OWL ontologies.</p>
          </div>
        </footer>
      </main>
    </SearchProvider>
  );
}