import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { getProducts } from "@/lib/productsApi";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { IoTriangle } from "react-icons/io5";

import React from 'react';
import IProducts from "@/types/products";




const Marquee = async() => {
    const producsList = await getProducts()



    return (
      <div className="p-2 shadow-base-200 bg-white shadow-lg">
        <MarqueeText duration={15} direction="right">
          {producsList.map((product: IProducts) => (
            <span key={product.id} className="flex gap-1">
              <span>{product.categoryIcon}</span>
              <span>{product.nameBn}</span>
              <span> </span>
              <span>{product.today.toLocaleString("bn-BD")}</span>
              <span> </span>
              <span>টাকা</span>
              <span>{"/"}</span>
              <span>{product.unit}</span>
              <span> </span>
              <span className="flex gap-1">
                <span className="">
                  {product.change?.dir == "up" ? (
                    <IoTriangle className="text-red-600" />
                  ) : product.change?.dir == "down" ? (
                    <TbTriangleInvertedFilled className="text-green-600" />
                  ) : (
                    ""
                  )}
                </span>
                <span
                  className={
                    product.change?.dir == "up"
                      ? "text-red-600"
                      : product.change?.dir == "down"
                        ? "text-green-600"
                        : ""
                  }
                >
                  {`${product.change?.pct.toLocaleString("bn-BD").replaceAll("-","")}%`}
                </span>
              </span>
              <span className="text-gray-300">{"|"}</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    );
};

export default Marquee;