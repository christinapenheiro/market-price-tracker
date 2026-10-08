import React from "react";
import Link from "next/link";
import { FormattedDate } from "./FormateDate";
import Image from "next/image";
import ICategory from "@/types/category";
import NavLink from "./NavLink";

const categories = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    {
      next: { revalidate: 60 },
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Navbar = async () => {
  const data: ICategory[] = await categories();

  return (
    // <div className="bg-base-100 shadow-sm">
    //   <div className="container mx-auto">
    //     <div className="navbar ">
    //       <div className="navbar-start">
    //         {/* <div className="dropdown">
    //           <div
    //             tabIndex={0}
    //             role="button"
    //             className="btn btn-ghost lg:hidden"
    //           >
    //             <svg
    //               aria-label="Menu"
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               {" "}
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M4 6h16M4 12h8m-8 6h16"
    //               />{" "}
    //             </svg>
    //           </div>
    //           <ul
    //             tabIndex={-1}
    //             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    //           >
    //             <li>
    //               <a>Item 1</a>
    //             </li>
    //             <li>
    //               <a>Parent</a>
    //               <ul className="p-2">
    //                 <li>
    //                   <a>Submenu 1</a>
    //                 </li>
    //                 <li>
    //                   <a>Submenu 2</a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li>
    //               <a>Item 3</a>
    //             </li>
    //           </ul>
    //         </div> */}
    //         <Image
    //           src="/logo-icon.png"
    //           alt="logo"
    //           width={30}
    //           height={30}
    //           className="bg-green-700 rounded-xl"
    //         ></Image>
    //         <div className="flex flex-col">
    //           <Link href="/" className="text-xl font-bold">
    //             বাজার দর
    //           </Link>
    //           <FormattedDate></FormattedDate>
    //         </div>
    //       </div>
    //       {/* <div className="navbar-center hidden lg:flex">
    //         <ul className="menu menu-horizontal px-1">
    //           <li>
    //             <a>Item 1</a>
    //           </li>
    //           <li>
    //             <details>
    //               <summary>Parent</summary>
    //               <ul className="p-2 bg-base-100 w-40 z-1">
    //                 <li>
    //                   <a>Submenu 1</a>
    //                 </li>
    //                 <li>
    //                   <a>Submenu 2</a>
    //                 </li>
    //               </ul>
    //             </details>
    //           </li>
    //           <li>
    //             <a>Item 3</a>
    //           </li>
    //         </ul>
    //       </div> */}
    //       <div className="navbar-end">
    //         <a className="btn">সাইন ইন</a>
    //         <Link href="/">সাইন আপ</Link>
    //       </div>
    //     </div>
    //     <div className="flex gap-5">
    //       {data?.map((category: ICategory) => (
    //         <NavLink key={category.id} category={category}></NavLink>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <header className="bg-base-100 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main Navbar */}
        <div className="navbar min-h-16 px-0">
          {/* Logo + Brand */}
          <div className="navbar-start">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-icon.png"
                alt="বাজার দর logo"
                width={36}
                height={36}
                className="rounded-xl bg-green-700"
              />

              <div className="flex flex-col leading-tight">
                <Link href="/" className="text-lg font-bold sm:text-xl">
                  বাজার দর
                </Link>

                <FormattedDate />
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="navbar-end gap-2">
            <Link href="/signin" className="btn btn-ghost  btn-sm sm:btn-md">
              সাইন ইন
            </Link>

            <Link
              href="/signup"
              className="btn bg-green-700 btn-sm sm:btn-md"
            >
              সাইন আপ
            </Link>
          </div>
        </div>

        {/* Categories */}
        <nav className="border-base-300">
          <div
            className="
              flex gap-2 overflow-x-auto py-2 flex-wrap
              scrollbar-none
     
              md:justify-start
            "
          >
            {data?.map((category: ICategory) => (
              <NavLink key={category.id} category={category} />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
