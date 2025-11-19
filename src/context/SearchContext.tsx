"use client";

import { createContext, useContext } from "react";
import { useSearch as useSearchHook } from "@/hooks/useSearch";

const SearchContext = createContext<any>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const search = useSearchHook();
  return <SearchContext.Provider value={search}>{children}</SearchContext.Provider>;
}

export function useSearch() {
  return useContext(SearchContext);
}
