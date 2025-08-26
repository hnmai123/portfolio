import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavLink from "@/components/NavLink";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huy Mai",
  description: "Welcome to my portfolio",
  icons: { icon: "/logo.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen
                    bg-white text-gray-900
                    dark:bg-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header>
            <nav className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-white dark:bg-gray-800">
              {/* Left: Logo + nav links */}
              <div className="flex items-center space-x-8">
                <NavLink href="/" className="font-bold flex items-center">
                  <Image
                    src="/logo.ico"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="mr-2"
                  />
                  Huy Mai
                </NavLink>
              </div>
              
              <div>
                <ul className="flex space-x-4">
                  <li>
                    <NavLink href="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink href="/skills">Skills</NavLink>
                  </li>
                  <li>
                    <NavLink href="/experiences">Experiences</NavLink>
                  </li>
                  <li>
                    <NavLink href="/projects">Projects</NavLink>
                  </li>
                </ul>
              </div>

              {/* Right: GitHub + Theme toggle */}
              <div className="flex items-center space-x-4">
                <NavLink
                  href="https://github.com/hnmai123"
                  className="font-bold"
                >
                  GitHub Profile
                </NavLink>
                <ThemeToggle />
              </div>
            </nav>
          </header>

          <main className="flex-1 transition-colors duration-300">
            {children}
          </main>

          <footer className="p-4 text-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
            © 2025 Huy Mai
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
