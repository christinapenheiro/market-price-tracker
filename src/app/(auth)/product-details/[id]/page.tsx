import ProductDetails from "@/components/product-details/ProductDetails";
import IProducts from "@/types/products";
import { notFound } from "next/navigation";


const ProductsInfo = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
   const products = await fetch(
     `https://openapi.programming-hero.com/api/bazardor/products/${encodeURIComponent(id)}`,
     {
       next: { revalidate: 60 },
     },
   );
    if (!products.ok) {
      notFound()
    }
    const data:IProducts = await products.json();

    // if (data.length === 0) {
    //   notFound();
    // }

  return (
    <div>
        {
            <ProductDetails prop={data} key={data.id}></ProductDetails>
        }
    </div>
  )
}

export default ProductsInfo;

