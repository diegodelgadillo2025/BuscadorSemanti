"use client";

import { useState } from "react";

/**
 * Hook de búsqueda.
 * - Si no hay backend (NEXT_PUBLIC_API_URL) devuelve resultados simulados.
 * - Si hay backend, intenta llamar a /search?query=...
 */

export function useSearch() {
  const [query, setQuery] = useState("");
  const [lastQuery, setLastQuery] = useState<string | null>(null);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const api = process.env.NEXT_PUBLIC_API_URL || "";

  async function search() {
    if (!query.trim()) return;
    setLoading(true);
    setLastQuery(query);
    setResults([]);

    try {
      if (!api) {
        // fallback: resultados simulados
        await new Promise((r) => setTimeout(r, 700));
        setResults([
          { label: `${query} — Serie (Simulada)`, description: "Resumen simulado de la serie", type: "Series" },
          { label: `${query} — Actor (Simulado)`, description: "Actor relacionado (simulado)", type: "Actor" },
        ]);
      } else {
        const url = `${api}/search?query=${encodeURIComponent(query)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("error en fetch");
        const data = await res.json();
        setResults(Array.isArray(data) ? data : [data]);
      }
    } catch (err) {
      console.error("search error", err);
      // si falla, no mostrar nada o mostrar mensaje; aquí dejamos vacío
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return { query, setQuery, results, loading, search, lastQuery };
}
