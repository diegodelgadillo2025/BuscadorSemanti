"use client";

import UploadAdvanced from "@/components/upload/UploadAdvanced";

export default function SubirOWLPage() {
  return (
    <main className="relative min-h-screen bg-background py-20 px-6">
      
      {/* Decoración del fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-5xl mx-auto space-y-14">
        
        {/* Título */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Subir Ontología OWL
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Carga tu archivo <code className="bg-secondary px-2 py-1 rounded-md text-sm font-mono">.owl</code> 
            o <code className="bg-secondary px-2 py-1 rounded-md text-sm font-mono">.rdf</code> para poblar la base de conocimiento semántica.
          </p>
        </header>

        {/* Card de subida */}
        <section className="backdrop-blur-sm bg-card/60 border border-border rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <UploadAdvanced />
        </section>

        {/* Info box */}
        <div className="inline-flex gap-4 p-4 bg-secondary/50 border border-border rounded-xl backdrop-blur-sm mx-auto">
          <span className="text-2xl">📄</span>
          <div className="text-left">
            <p className="text-sm font-semibold text-foreground">Requisitos</p>
            <p className="text-xs text-muted-foreground">
              Máximo 50MB | Formatos permitidos: <strong>.owl, .rdf</strong><br />
              Asegúrate de que la ontología siga buenas prácticas de modelado.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
