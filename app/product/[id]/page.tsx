"use client";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ClientProductPage from "@/components/ClientProductPage";

type Params = Promise<{ id: string }>;

interface ProductPageProps {
  params: Params;
  rating: number;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <ClientProductPage product={product} />
    </div>
  );
}
