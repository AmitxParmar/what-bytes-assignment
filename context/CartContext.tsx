// context/CartContext.tsx
"use client";
import { createContext, useContext, ReactNode } from "react";
import { useCart as createCartHook } from "@/hooks/useCart";

const CartContext = createContext<ReturnType<typeof createCartHook> | null>(
  null
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cart = createCartHook();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCartContext must be used inside CartProvider");
  return context;
};
