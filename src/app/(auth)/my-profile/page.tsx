"use client";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { SyntheticEvent } from "react";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignout = async () => {
    toast.error("Successfully Logged out.");
    await authClient.signOut();
  };

  const handleUpdateProfile = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userNew = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    await authClient.updateUser({
      ...userNew,
    });
    toast.success("Name is updated.")
  };

  return (
    <div className="min-h-screen bg-[#f3f6f4] p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-3xl space-y-6">
        {/* হেডার সেকশন */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h3>
          <span className="text-gray-500 text-sm">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </span>
        </div>

        {/* প্রোফাইল কার্ড সেকশন */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink">
              {/* <Image
                src={user?.image}
                alt="Rezwan Ahmed"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              /> */}
              {user?.image ? (
                <Image
                  src={user?.image}
                  alt={user.name}
                  width={50}
                  height={50}
                ></Image>
              ) : (
                "user"
              )}
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800">{user?.name}</h4>
              <span className="text-gray-500 text-sm">{user?.email}</span>
            </div>
          </div>

          <Link
            href="/"
            className="btn btn-outline border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 hover:text-red-600 rounded-xl px-5 normal-case font-medium"
            onClick={handleSignout}
          >
            ↩ সাইন আউট
          </Link>
        </div>

        {/* তথ্য আপডেট ফর্ম সেকশন */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-5">
          <h4 className="text-lg font-bold text-gray-800">তথ্য</h4>

          <form className="space-y-4" onSubmit={handleUpdateProfile}>
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text text-sm font-semibold text-gray-600">
                  নাম
                </span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.name ?? ""}
                className="input input-bordered w-full bg-gray-50/50 focus:bg-white text-gray-800 rounded-xl border-gray-200 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="btn bg-green-600 hover:bg-emerald-700 text-white w-full rounded-xl border-none text-base normal-case font-medium shadow-sm"
            >
              আপডেট
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
