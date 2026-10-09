"use client"
import IProducts from "@/types/products";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export interface SortinfButtonProps {
  prop: IProducts[];
}

// export default function SortingButton({ prop }: SortinfButtonProps) {
//   const [button,setButton] = useState("default")
//   const handleOnClick = (e) => {
//     setButton(e.target.value)
//   }

//   return (
//     <div className="dropdown dropdown-end">
//       <div
//         tabIndex={0}
//         role="button"
//         className="btn btn-outline btn-sm min-w-36 justify-between border-gray-300 bg-white font-medium text-gray-700 hover:bg-gray-50"
//       >
//         ডিফল্ট
//         <RiArrowDropDownLine className="text-xl" />
//       </div>

//       <ul
//         tabIndex={-1}
//         className="dropdown-content menu z-10 mt-2 w-52 rounded-xl border border-gray-100 bg-white p-2 shadow-lg"
//       >
//         <li>
//           <a>দাম: কম থেকে বেশি</a>
//         </li>
//         <li>
//           <a>দাম: বেশি থেকে কম</a>
//         </li>
//       </ul>
//     </div>
//   );
// }


export type SortOrder = "default" | "lowToHigh" | "highToLow";

interface SortingButtonProps {
  sortOrder: SortOrder;
  onSortChange: (value: SortOrder) => void;
}

export default function SortingButton({
  sortOrder,
  onSortChange,
}: SortingButtonProps) {
  const sortLabels: Record<SortOrder, string> = {
    default: "ডিফল্ট",
    lowToHigh: "দাম: কম থেকে বেশি",
    highToLow: "দাম: বেশি থেকে কম",
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-outline btn-sm min-w-36 justify-between border-gray-300 bg-white font-medium text-gray-700 hover:bg-gray-50"
      >
        {sortLabels[sortOrder]}
        <RiArrowDropDownLine className="text-xl" />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu z-10 mt-2 w-56 rounded-xl border border-gray-100 bg-white p-2 text-gray-700 shadow-lg"
      >
        <li>
          <button
            type="button"
            onClick={() => onSortChange("default")}
            className={sortOrder === "default" ? "active" : ""}
          >
            ডিফল্ট
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => onSortChange("lowToHigh")}
            className={sortOrder === "lowToHigh" ? "active" : ""}
          >
            দাম: কম থেকে বেশি
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => onSortChange("highToLow")}
            className={sortOrder === "highToLow" ? "active" : ""}
          >
            দাম: বেশি থেকে কম
          </button>
        </li>
      </ul>
    </div>
  );
}
