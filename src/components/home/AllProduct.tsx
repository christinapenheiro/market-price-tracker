import React from "react";
import { getProducts } from "@/lib/productsApi";
import IProducts from "@/types/products";
import ProductCard from "./ProductCard";

const AllProducts = async () => {
  const allProducts: IProducts[] = await getProducts()

  return (
    <div className="container mx-auto mt-7">
      <h3 className="flex text-xl font-bold mb-4 gap-2">সব পণ্য</h3>
      <p className="mb-4">
        মোট {allProducts.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
      </p>
      <div className="grid grid-cols-3 gap-3">
        {allProducts.map((product) => (
          <ProductCard prop={product} key={product.id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;