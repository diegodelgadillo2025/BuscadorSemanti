"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white py-32 relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Contenido textual */}
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <p className="text-indigo-300 text-sm font-semibold tracking-widest uppercase">
              Búsqueda Semántica
            </p>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-balance">
              Descubre Series con Inteligencia Semántica
            </h1>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
            Utiliza ontologías OWL y RDF para explorar relaciones complejas entre actores, géneros, temas y metadatos. Conecta con DBpedia para resultados enriquecidos y relevantes.
          </p>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="/buscador" 
              className="px-8 py-3.5 rounded-lg bg-white text-indigo-950 font-semibold hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
            >
              Probar Búsqueda
            </a>
            <a 
              href="/subir" 
              className="px-8 py-3.5 rounded-lg border-2 border-indigo-400 text-white font-semibold hover:bg-indigo-900/50 transition-all duration-200 text-center"
            >
              Subir Ontología OWL
            </a>
          </div>

          {/* Stats o features rápidos */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
            <div>
              <p className="text-2xl font-bold text-indigo-300">10K+</p>
              <p className="text-sm text-slate-400">Series en BD</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-300">5M+</p>
              <p className="text-sm text-slate-400">Relaciones</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-300">0.2s</p>
              <p className="text-sm text-slate-400">Búsqueda media</p>
            </div>
          </div>
        </div>

        {/* Imagen/Preview */}
        <div className="lg:w-1/2">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
            
            {/* Card */}
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-800 shadow-2xl">
              <Image
                src="/img.jpg"
                alt="Vista previa del buscador semántico de series"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto"
              />
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                DBpedia Connected
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}