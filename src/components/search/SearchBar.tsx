"use client";

import { useSearch } from "@/hooks/useSearch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  const { query, setQuery, search, loading } = useSearch();

  return (
    <div className="flex w-full max-w-3xl mx-auto gap-3 items-center p-4 bg-card/40 border border-border rounded-xl backdrop-blur-md shadow-lg">
      
      <Input
        placeholder="Buscar serie, actor, género..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-full
          bg-background/40
          border border-border
          text-foreground
          placeholder:text-muted-foreground
          rounded-xl
          focus-visible:ring-primary
          transition-all
        "
      />

      <Button
        onClick={() => search()}
        disabled={loading}
        className="
          px-6 py-2 
          rounded-xl 
          bg-primary
          text-white
          font-semibold
          shadow-md
          hover:shadow-primary/40
          transition-all
        "
      >
        {loading ? "Buscando..." : "Buscar"}
      </Button>

    </div>
  );
}
