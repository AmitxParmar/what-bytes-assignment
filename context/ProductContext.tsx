"use client";
import React, { createContext, useContext } from "react";
import { useProducts } from "@/hooks/useProducts";

const ProductsContext = createContext<ReturnType<typeof useProducts> | null>(
  null
);

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const productsHook = useProducts();
  return (
    <ProductsContext.Provider value={productsHook}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("useProductsContext must be used inside ProductsProvider");
  return context;
};
