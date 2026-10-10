import ProductList from "@/components/category/ProductList";
import IProducts from "@/types/products";
import { notFound } from "next/navigation";




const Category = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const categories = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(slug)}`,
    {
      next: { revalidate: 60 },
    },
  );
  if (!categories.ok){
    notFound()
  }

  // const dataSet = categories.find(
  //   (data: IProducts) => String(data.category) === String(slug),
  // );

  // if (!dataSet) {
  //   notFound();
  // }
 

  const data:IProducts[] = await categories.json();
//   const category = data.filter(
//     (product: IProducts) => product.category === String(slug),
//   );
if(data.length === 0){
  notFound()
}




  return (
    <div className="space-y-5 px-4 max-w-7xl mx-auto mt-10">
      <ProductList prop={data}></ProductList>
    </div>
  );
};

export default Category;
