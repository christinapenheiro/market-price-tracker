import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold text-green-600">404</h1>

      <h2 className="mt-4 text-2xl font-bold text-black">Page Not Found</h2>

      <p className="mt-2 text-black">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-black"
      >
        Back to Home
      </Link>
    </div>
  );
}
