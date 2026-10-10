"use client"
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#f3f6f4] p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-3xl space-y-6">
        
        {/* হেডার সেকশন */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h3>
          <span className="text-gray-500 text-sm">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</span>
        </div>

        {/* প্রোফাইল কার্ড সেকশন */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
              <Image
                src="/profile.png" // আপনার ইমেজের পাথ দিন
                alt="Rezwan Ahmed"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800">Rezwan Ahmed</h4>
              <span className="text-gray-500 text-sm">rezwanahmed@gmail.com</span>
            </div>
          </div>

          <Link
            href="/logout"
            className="btn btn-outline border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 hover:text-red-600 rounded-xl px-5 normal-case font-medium"
          >
            ↩ সাইন আউট
          </Link>
        </div>

        {/* তথ্য আপডেট ফর্ম সেকশন */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-5">
          <h4 className="text-lg font-bold text-gray-800">তথ্য</h4>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text text-sm font-semibold text-gray-600">নাম</span>
              </label>
              <input
                type="text"
                defaultValue="Rezwan Ahmed"
                className="input input-bordered w-full bg-gray-50/50 focus:bg-white text-gray-800 rounded-xl border-gray-200 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full rounded-xl border-none text-base normal-case font-medium shadow-sm"
            >
              আপডেট
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
