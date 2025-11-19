"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detectar si NO estamos en la página principal
  const isHome = pathname === "/";

  return (
    <header className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950   sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">◊</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <h1 className="text-xl font-black bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                SeriesTelevisivas
              </h1>
              <p className="text-xs font-semibold text-indigo-300/70 tracking-widest uppercase">
                Búscador Semántica OWL
              </p>
            </div>
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">

          {/* 🔥 BOTÓN DINÁMICO: Tecnologías ↔ Inicio */}
          <Link
            href={isHome ? "/#features" : "/"}
            className="text-sm font-medium text-slate-300 hover:text-indigo-300 transition-colors duration-200 relative group"
          >
            {isHome ? "Tecnologías" : "Inicio"}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Subir OWL */}
          <Link
            href="/subir"
            className="text-sm font-medium text-slate-300 hover:text-indigo-300 transition-colors duration-200 relative group"
          >
            Subir
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Buscador */}
          <Link
            href="/buscador"
            className="text-sm font-medium text-slate-300 hover:text-indigo-300 transition-colors duration-200 relative group"
          >
            Buscador
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Documentación 
          <Link href="/documentacion">
            <button className="ml-4 px-6 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-lg hover:shadow-indigo-500/50">
              Documentación
            </button>
          </Link>
          */}
          
        </nav>

        {/* BOTÓN MENU MÓVIL */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2.5 hover:bg-slate-800 rounded-lg transition-colors duration-200"
        >
          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-indigo-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">

            <Link 
              href={isHome ? "/#features" : "/"}
              className="text-sm font-medium text-slate-300 hover:text-indigo-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {isHome ? "Tecnologías" : "Inicio"}
            </Link>

            <Link 
              href="/subir"
              className="text-sm font-medium text-slate-300 hover:text-indigo-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Subir
            </Link>

            <Link 
              href="/buscador"
              className="text-sm font-medium text-slate-300 hover:text-indigo-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Buscador
            </Link>

            <Link href="/documentacion" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full px-6 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-200">
                Documentación
              </button>
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
