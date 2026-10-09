import ProductList from "@/components/category/ProductList";
import SortingButton from "@/components/category/SortinfButton";
import ProductCard from "@/components/home/ProductCard";
import IProducts from "@/types/products";


const Category = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const categories = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${encodeURIComponent(slug)}`,{
      next: { revalidate: 60 }
    }
  );
  const data:IProducts[] = await categories.json();
//   const category = data.filter(
//     (product: IProducts) => product.category === String(slug),
//   );

  return (

    <div className="space-y-5 container mx-auto mt-10">
    
    <ProductList prop={data}></ProductList>
    </div>
  );
};

export default Category;
