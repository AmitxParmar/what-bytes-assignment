import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ClientProductPage from "@/components/ClientProductPage";

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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
