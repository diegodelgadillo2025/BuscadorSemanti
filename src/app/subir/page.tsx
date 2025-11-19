"use client";

import UploadAdvanced from "@/components/upload/UploadAdvanced";

export default function SubirOWLPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0F1729] via-[#1a2847] to-[#0F1729]">

      {/* Fondo decorativo (con los mismos estilos que tu versión original) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-purple-500/5 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-24 lg:py-32 space-y-16">

        {/* Etiqueta de sección */}
        <div className="mb-6">
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-300 uppercase bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
            Búsqueda Semántica
          </span>
        </div>

        {/* Header */}
        <header className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">
            Descubre la Inteligencia
            <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Semántica
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Carga tu ontología OWL o RDF y desbloquea el poder del conocimiento semántico.
            Transforma tus datos en inteligencia accionable.
          </p>
        </header>

        {/* Tarjeta de subida */}
        <section className="backdrop-blur-xl bg-white/5 border border-purple-500/20 rounded-2xl p-12 shadow-2xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-purple-500/10">
          <UploadAdvanced />
        </section>

      </div>

      {/* Footer compatible con estilo oscuro */}
      <footer className="py-10 bg-black/20 border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400 text-sm space-y-2">
          <p className="font-semibold text-white">
            WebSemantica - Subida de Ontología OWL
          </p>
          <p>© 2025. Herramienta de carga y procesamiento ontológico.</p>
        </div>
      </footer>

    </main>
  );
}
