"use client"
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { IoMdArrowDropdown } from "react-icons/io";
import { toast } from 'react-toastify';
import Image from 'next/image';
import { usePathname } from "next/navigation";

const UserInfo = () => {
    const {data : session} = authClient.useSession()
    const user = session?.user
   
    const pathname = usePathname();


    const handleSignout = async() => {
        toast.error("Successfully Logged out.")
        await authClient.signOut();
    }


    return (
      <div className="navbar-end gap-2">
        {user ? (
          <div className='sm:flex'>
            <div className="hidden sm:flex avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-8 rounded-full text-sm">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={50}
                    height={50}
                  ></Image>
                ) : (
                  "user"
                )}
              </div>
            </div>
            <div className="dropdown dropdown-center">
              <div tabIndex={0} role="button" className="btn m-1 font-bold">
                {user.name}
                <IoMdArrowDropdown />
              </div>
              <ul
                tabIndex={-1}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <span className="font-bold">{user.name}</span>
                <span>{user.email}</span>
                <li>
                  <Link href="/my-profile">👤 আমার প্রোফাইল</Link>
                </li>
                <li onClick={handleSignout}>
                  <Link href="/">↩ সাইন আউট</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="">
            <Link
              href="/sign-in"
              className={`btn btn-sm sm:btn-md ${
                pathname === "/sign-in"
                  ? "btn-active bg-green-700 text-white"
                  : "btn-ghost"
              }`}
            >
              সাইন ইন
            </Link>
            <Link
              href="/sign-up"
              className={`btn btn-sm sm:btn-md ${
                pathname === "/sign-up"
                  ? "btn-active bg-green-700 text-white"
                  : "btn-ghost"
              }`}
            >
              সাইন আপ
            </Link>
          </div>
        )}
      </div>
    );
};

export default UserInfo;