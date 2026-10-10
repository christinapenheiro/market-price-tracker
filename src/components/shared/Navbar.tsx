import React from "react";
import Link from "next/link";
import { FormattedDate } from "./FormateDate";
import Image from "next/image";
import ICategory from "@/types/category";
import NavLink from "./NavLink";
import { getCategories } from "@/lib/productsApi";
import UserInfo from "./UserInfo";
import { Suspense } from "react";

const Navbar = async () => {
  const data: ICategory[] = await getCategories();

  return (
    <header className="bg-base-100 border-b border-base-300">
      <div className="container mx-auto px-4">
        {/* Main Navbar */}
        <div className="navbar min-h-16 px-0">
          {/* Logo + Brand */}
          <div className="navbar-start">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image
                  src="/logo-icon.png"
                  alt="বাজার দর logo"
                  width={36}
                  height={36}
                  className="rounded md:rounded-xl bg-green-700 p-2"
                />
              </Link>

              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold sm:text-xl">বাজার দর</span>

                <FormattedDate />
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          <Suspense fallback={null}>
            <UserInfo />
          </Suspense>
        </div>

        {/* Categories */}
        <nav className="border-base-300">
          <div
            className="grid grid-cols-4 md:grid-cols-none md:flex gap-0 md:gap-2 overflow-x-auto py-2 
              scrollbar-none
              md:justify-start
            "
          >
            <Suspense fallback={null}>
              {data?.map((category: ICategory) => (
                <NavLink key={category.id} category={category} />
              ))}
            </Suspense>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
