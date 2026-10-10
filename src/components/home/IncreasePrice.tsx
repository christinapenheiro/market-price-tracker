import React from "react";
import { getProducts } from "@/lib/productsApi";
import { IoTriangle } from "react-icons/io5";
import IProducts from "@/types/products";
import ProductCard from "./ProductCard";

const IncreasePrice = async () => {
  const data = await getProducts();
  const increaseProducts: IProducts[] = data
    .filter((product: IProducts) => product.change.dir === "up")
    .sort((a: IProducts, b: IProducts) => b.change.pct - a.change.pct);

  return (
    <div className="max-w-7xl px-4 mx-auto ">
      <h3 className="flex text-xl font-bold mb-4 gap-2">
        <IoTriangle className="text-red-600" />
        আজ দাম বেড়েছে
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {increaseProducts.slice(0, 6).map((product) => (
          <ProductCard prop={product} key={product.id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default IncreasePrice;
