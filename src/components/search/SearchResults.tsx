"use client";

import { useSearch } from "@/hooks/useSearch";   // <-- CORRECTO
import ResultCard from "./ResultCard";

export default function SearchResults() {
  const { results, loading, lastQuery } = useSearch();

  if (!lastQuery) return <p className="mt-6 text-center text-gray-500">Busca una serie o actor arriba.</p>;
  if (loading) return <p className="mt-6 text-center">Buscando...</p>;
  if (results.length === 0) return <p className="mt-6 text-center text-gray-500">No se encontraron resultados.</p>;

  return (
    <div className="grid gap-4 mt-6">
      {results.map((r: any, i: number) => (
        <ResultCard key={i} item={r} />
      ))}
    </div>
  );
}
