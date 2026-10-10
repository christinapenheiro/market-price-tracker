import React from 'react';
import { getProducts } from '@/lib/productsApi';
import { TbTriangleInvertedFilled } from "react-icons/tb";
import IProducts from '@/types/products';
import ProductCard from './ProductCard';

const DecreasePrice = async() => {
    const data = await getProducts()
    const decreaseProducts:IProducts[] = data.filter((product:IProducts)=>product.change.dir==="down").sort((a:IProducts,b:IProducts)=>a.change.pct-b.change.pct)


    return (
      <div className="max-w-7xl px-4 mx-auto mt-7">
        <h3 className="flex text-xl font-bold mb-4 gap-2">
          <TbTriangleInvertedFilled className="text-green-600" />
          আজ দাম কমেছে
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
          {decreaseProducts.slice(0, 6).map((product) => (
            <ProductCard prop={product} key={product.id}></ProductCard>
          ))}
        </div>
      </div>
    );
};

export default DecreasePrice;