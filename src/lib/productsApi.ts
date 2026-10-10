import { notFound } from "next/navigation";

export async function getCategories() {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    {
      next: { revalidate: 60 },
    },
  );
  if (!res.ok) {
    notFound();
  }
  return res.json();
};



export async function getProducts() {
    const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      next: { revalidate: 60 },
    },
  );
  if (!res.ok) {
    notFound()
  }
  return res.json();
};