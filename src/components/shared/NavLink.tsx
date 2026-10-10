"use client";

import ICategory from "@/types/category";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps {
  category: ICategory;
}

export default function NavLink({ category }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === `/category/${category.id}`;

  return (
    <Link
      href={`/category/${category.id}`}
      className={`
        btn btn-sm shrink-0 gap-1 whitespace-nowrap px-3
        text-sm font-medium sm:px-4
        ${
          isActive
            ? "bg-green-600 text-white hover:bg-green-700"
            : "btn-ghost hover:bg-base-200"
        }
      `}
    >
      <span className="text-base">{category.icon}</span>
      <span>{category.nameBn}</span>
    </Link>
  );
}
