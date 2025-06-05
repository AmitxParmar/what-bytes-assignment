import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { Product } from "@/lib/products";
import useDebounce from "./useDebounce";

interface ProductResponse {
  products: Product[];
  total: number;
}

interface Filters {
  search: string;
  category: string;
  maxPrice: string;
  minPrice: string;
}

// Single hook for all product filtering
export function useProducts() {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: "",
    maxPrice: "",
    minPrice: "0",
  });

  // Debounce the search filter to prevent too many API calls
  const debouncedSearch = useDebounce(filters.search, 500);

  // Fetch products with current filters
  const { data, isLoading, error, refetch } = useQuery<ProductResponse>({
    queryKey: ["products", { ...filters, search: debouncedSearch }],
    queryFn: async () => {
      const params = new URLSearchParams();

      if (debouncedSearch) params.append("search", debouncedSearch);
      if (filters.category) params.append("category", filters.category);
      if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
      if (filters.minPrice) params.append("minPrice", filters.minPrice);

      const response = await fetch(`/api/products?${params}`);
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: true,
  });

  // Update individual filters
  const updateFilters = (newFilters: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      search: "",
      category: "",
      maxPrice: "",
      minPrice: "0",
    });
  };

  return {
    // Data
    products: data?.products || [],
    total: data?.total || 0,

    // States
    isLoading,
    error,

    // Current filters
    filters,

    // Actions
    updateFilters,
    resetFilters,
    refetch,

    // Convenience methods for specific updates
    setSearch: (search: string) => updateFilters({ search }),
    setCategory: (category: string) => updateFilters({ category }),
    setMaxPrice: (maxPrice: string) => updateFilters({ maxPrice }),
    setMinPrice: (minPrice: string) => updateFilters({ minPrice }),
  };
}
