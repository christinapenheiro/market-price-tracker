import ICategory from "@/types/category"
import Link from "next/link"

export interface NavLinkProps {
    category: ICategory
}

export default function NavLink({ category }: NavLinkProps) {
    
    return (
         <Link
      href={`/category/${category.id}`}
      className="
        btn btn-ghost btn-sm
        shrink-0
        gap-1
        whitespace-nowrap
        px-3
        text-sm
        font-medium
        hover:bg-base-200
        sm:px-4
      "
    >
      <span className="text-base">
        {category.icon}
      </span>

      <span>
        {category.nameBn}
      </span>
    </Link>
  );
}