"use client";

export default function Features() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-6 relative overflow-hidden" id="features">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-indigo-300 text-sm font-semibold tracking-widest uppercase">
            Tecnologías Semánticas
          </p>
          <h2 className="text-5xl font-black text-white mb-6 text-balance">
            Tecnologías y Flujo
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Una arquitectura integrada que combina OWL, RDF y DBpedia para crear búsquedas semánticas potentes y enriquecidas
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon="🔷"
            title="OWL" 
            description="Define clases (Serie, Actor), propiedades y axiomas para modelar el dominio semántico con precisión."
          />
          <FeatureCard 
            icon="📊"
            title="RDF" 
            description="Estructura triples para representar datos y relaciones entre recursos de forma estándar y interoperable."
          />
          <FeatureCard 
            icon="🌐"
            title="DBpedia" 
            description="Fuente externa de Wikipedia que puebla la ontología con datos reales y contexto enriquecido."
          />
        </div>

        {/* Sección de flujo */}
        <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-indigo-900/30 p-10 lg:p-12">
          <h3 className="text-2xl font-bold text-white mb-6">Cómo encajan los componentes</h3>
          
          {/* Flujo visual */}
          <div className="space-y-6">
            <FlowStep 
              number="1" 
              title="Diseño de Ontología" 
              description="Diseñas la ontología en Protégé con tus clases, propiedades y relaciones específicas para series"
            />
            <FlowStep 
              number="2" 
              title="Exportación OWL" 
              description="Exportas el modelo completo como archivo .owl listos para procesar en el backend"
            />
            <FlowStep 
              number="3" 
              title="Procesamiento Semántico" 
              description="El backend consume la ontología y ejecuta SPARQL queries con razonador OWL"
            />
            <FlowStep 
              number="4" 
              title="Resultados Enriquecidos" 
              description="Frontend muestra resultados semánticamente conectados con contexto de DBpedia"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="group relative">
      {/* Glow effect en hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/50 group-hover:to-purple-600/50 rounded-2xl blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      
      {/* Card */}
      <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/50 group-hover:border-indigo-500/50 transition-all duration-300 h-full flex flex-col">
        <div className="text-5xl mb-4">{icon}</div>
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-slate-300 leading-relaxed flex-grow">{description}</p>
        
        {/* Accent line */}
        <div className="mt-6 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-12 transition-all duration-300"></div>
      </div>
    </div>
  );
}

function FlowStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6 items-start">
      {/* Número step */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {number}
        </div>
      </div>
      
      {/* Contenido */}
      <div className="flex-grow pt-1">
        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
        <p className="text-slate-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}