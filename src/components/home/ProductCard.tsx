import IProducts from "@/types/products"
import { IoTriangle } from "react-icons/io5";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import Link from "next/link";

export interface ProductCardProps {
    prop: IProducts
}

export default function ProductCard({ prop }: ProductCardProps) {
    
    return (
      //   <div>
      //     <div className="flex">
      //       <span>{prop.image}</span>
      //       <div>
      //         <h4>{prop.nameBn}</h4>
      //         <span>{prop.unit}</span>
      //       </div>
      //     </div>
      //     <div className="flex">
      //       <h4>আজকের দাম</h4>
      //       <div className="flex">
      //         <span className="font-bold text-2xl">{prop.today}</span>
      //         <span className="">টাকা</span>
      //       </div>
      //       <div>
      //         <button className="bg-gray-400 text-red-600">
      //           <IoTriangle className="text-red-600" />
      //           {prop.change.pct}
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      <div className="flex flex-col justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm">
        <Link href={`/product-details/${prop.id}`} prefetch={false}>
          {/* Product info */}
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gray-100">
              {prop.image}
            </div>

            <div className="min-w-0">
              <h4 className="truncate text-sm font-semibold text-gray-800">
                {prop.nameBn}
              </h4>
              <span className="text-xs text-gray-500">{`প্রতি ${prop.unit}`}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-xs text-gray-500">আজকের দাম</p>
              <div className="flex items-baseline justify-end gap-1">
                <span className="text-xl font-bold text-gray-900">
                  {prop.today.toLocaleString("bn-BD")}
                </span>
                <span className="text-xs text-gray-500">টাকা</span>
              </div>
            </div>

            {/* Price change */}
            <div>
              <button
                className={`flex items-center gap-1 rounded-md bg-red-50 px-2 py-1 text-xs font-medium ${
                  prop.change?.dir == "up"
                    ? "text-red-600"
                    : prop.change?.dir == "down"
                      ? "text-green-600"
                      : ""
                }`}
              >
                {" "}
                {prop.change?.dir == "up" ? (
                  <IoTriangle className="text-red-600" />
                ) : prop.change?.dir == "down" ? (
                  <TbTriangleInvertedFilled className="text-green-600" />
                ) : (
                  ""
                )}
                {`${prop.change.pct.toLocaleString("bn-BD").replaceAll("-", "")}%`}
              </button>
            </div>
          </div>
        </Link>
      </div>
    );
}