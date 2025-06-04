// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/products";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const minPrice = searchParams.get("minPrice") || "0";
  const maxPrice = searchParams.get("maxPrice");

  let filteredProducts = [...products];

  // Filter by category
  if (category && category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by search term
  if (search) {
    const searchTerm = search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
  }

  // Filter by price range
  filteredProducts = filteredProducts.filter(
    (product) => product.price >= parseFloat(minPrice)
  );

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseFloat(maxPrice)
    );
  }

  return NextResponse.json({
    products: filteredProducts,
    total: filteredProducts.length,
  });
}
