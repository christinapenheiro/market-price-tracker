"use client"
import { useState } from "react";
import IProducts from "@/types/products";
import ProductCard from "../home/ProductCard";
import SortingButton from "./SortinfButton";
import type { SortOrder } from "./SortinfButton";

export interface ProductListProps {
    prop: IProducts[]
}

export default function ProductList({ prop }: ProductListProps) {
    const [sortOrder, setSortOrder] = useState<SortOrder>("default");

     const sortedProducts = [...prop];

     if (sortOrder === "lowToHigh") {
       sortedProducts.sort((a, b) => a.today - b.today);
     } else if (sortOrder === "highToLow") {
       sortedProducts.sort((a, b) => b.today - a.today);
     }


    return (
      <div>
        {/* Category header and sorting */}
        <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl sm:size-14">
              {prop[0]["categoryIcon"]}
            </div>

            <div className="min-w-0">
              <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                {prop[0]["categoryNameBn"]}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {`${prop.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন`}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <span className="text-sm font-medium text-gray-600">সাজান</span>

            {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-outline btn-sm min-w-36 justify-between border-gray-300 bg-white font-medium text-gray-700 hover:bg-gray-50"
            >
              ডিফল্ট
              <RiArrowDropDownLine className="text-xl" />
            </div>

            <ul
              tabIndex={-1}
              className="dropdown-content menu z-10 mt-2 w-52 rounded-xl border border-gray-100 bg-white p-2 shadow-lg"
            >
              <li>
                <a>দাম: কম থেকে বেশি</a>
              </li>
              <li>
                <a>দাম: বেশি থেকে কম</a>
              </li>
            </ul>
          </div> */}
            <SortingButton sortOrder={sortOrder}
  onSortChange={setSortOrder}></SortingButton>
          </div>
        </div>

        {/* Product count */}
        <div className="flex items-center justify-between my-4">
          <p className="text-sm text-gray-600">
            মোট{" "}
            <span className="font-semibold text-gray-900">
              {prop.length.toLocaleString("bn-BD")}
            </span>
            টি পণ্য দেখানো হচ্ছে
          </p>
        </div>

        {/* Responsive product grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product: IProducts) => (
            <ProductCard prop={product} key={product.id} />
          ))}
        </div>
      </div>
    );
}