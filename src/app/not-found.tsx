import WorldClocks from "@/components/WorldClocks";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-4 py-12 flex flex-col items-center">
      {/* Logo on top center */}
      <div className="mb-8">
        <Image
          src="/logo.ico"
          alt="Logo"
          width={96}
          height={96}
          className="mx-auto rounded-full shadow-lg"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto w-full text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-600">
          404
        </h1>
        <p className="mt-2 text-xl font-semibold">
          This page could not be found.
        </p>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          While you are here, check the current time around the world:
        </p>

        <div className="mt-8">
          <WorldClocks />
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="inline-block rounded-full border-2 border-blue-600 bg-blue-600 text-white px-8 py-3 font-semibold shadow-lg hover:bg-white hover:text-blue-600 hover:border-blue-700 dark:bg-blue-500 dark:border-blue-400 dark:hover:bg-gray-900 dark:hover:text-blue-400 dark:hover:border-blue-300 transition-colors duration-200"
          >
            <span className="mr-2">←</span> Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
