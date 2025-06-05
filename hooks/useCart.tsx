"use client";
import { useState, useEffect } from "react";
import type { Product } from "../lib/products";

type CartItem = Product & { quantity: number };

const CART_KEY = "cart_items";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Initialize cart from localStorage on mount
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem(CART_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove item completely from cart
  const removeFromCart = (productId: Product["id"]) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Decrease quantity by 1
  const decreaseQuantity = (productId: Product["id"]) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Increase quantity by 1
  const increaseQuantity = (productId: Product["id"]) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Update quantity to specific value
  const updateQuantity = (productId: Product["id"], newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculate totals
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    cart,
    addToCart,
    removeFromCart, // Removes item completely
    decreaseQuantity, // Reduces quantity by 1
    increaseQuantity, // Increases quantity by 1
    updateQuantity, // Sets specific quantity
    clearCart,
    totalItems,
    totalPrice,
  };
}
