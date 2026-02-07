import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <main className="flex max-w-2xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m <span className="text-blue-500">Your Name</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          React Native Developer. Building for the web.
        </p>
        <nav className="flex gap-4">
          <Link
            href="/about"
            className="rounded-lg border border-gray-200 px-4 py-2 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-900"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-gray-200 px-4 py-2 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-900"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="rounded-lg border border-gray-200 px-4 py-2 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-900"
          >
            Projects
          </Link>
        </nav>
      </main>
    </div>
  );
}
