"use client";

import { useSearch } from "@/hooks/useSearch";   // <-- CORRECTO
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  const { query, setQuery, search, loading } = useSearch();

  return (
    <div className="flex justify-center gap-3">
      <Input
        placeholder="Buscar serie, actor, género..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-xl"
      />
      <Button onClick={() => search()} disabled={loading}>
        {loading ? "Buscando..." : "Buscar"}
      </Button>
    </div>
  );
}
