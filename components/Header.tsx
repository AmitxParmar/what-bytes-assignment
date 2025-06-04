"use client";
import React, { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { cn } from "./../lib/utils";
import { Input } from "./ui/input";
import { useCart } from "@/hooks/useCart";
import { useProducts } from "@/hooks/useProducts";

const Header = () => {
  const { totalItems } = useCart();
  const { setSearch, filters } = useProducts();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const searchValue = formData.get("search") as string;
    setSearch(searchValue);
  };

  return (
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>
        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute text-white left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
            <Input
              type="text"
              name="search"
              placeholder={"Search for products..."}
              className="pl-10 text-black"
              value={filters.search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>

        <div className="flex items-center space-x-4">
          <Link
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "icon",
              }),
              "relative w-full cursor-pointer text-white hover:bg-blue-700 bg-black/50"
            )}
            href={"/cart"}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
            Cart
          </Link>

          <Button variant="ghost" className="text-white hover:bg-blue-700">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
