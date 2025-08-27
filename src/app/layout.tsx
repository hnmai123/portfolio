import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavLink from "@/components/NavLink";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import Providers from "./providers";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

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
        <Providers>
          <header className="bg-gray-50 dark:bg-gray-900">
            <nav className="w-2/3 mx-auto p-4  flex items-center justify-between">
              {/* Left: Logo + Portfolio */}
              <div className="flex items-center space-x-3">
                <NavLink
                  href="/"
                  className="flex items-center text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <Image
                    src="/logo.ico"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="mr-2"
                  />
                  <span className="text-3xl font-extrabold tracking-tight">
                    Huy Mai
                  </span>
                </NavLink>
              </div>

              {/* Center: Nav Links */}
              <ul className="flex space-x-10 font-bold text-xl">
                <li>
                  <NavLink
                    href="/about"
                    className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/skills"
                    className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/experience"
                    className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/projects"
                    className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </NavLink>
                </li>
              </ul>

              {/* Right: Github Profile Button */}
              <NavLink
                href="https://github.com/hnmai123"
                className="font-bold text-xl text-black dark:text-white border-2 border-black dark:border-white rounded-full px-6 py-2 transition-colors hover:text-blue-600 hover:border-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400"
              >
                Github Profile
              </NavLink>
            </nav>
          </header>

          <main className="flex-1 transition-colors duration-300">
            {children}
          </main>

          <footer className="p-8 text-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
            <div className="flex justify-center space-x-10 mb-4">
              <a
                href="mailto:nhathuylk0123@email.com"
                aria-label="Mail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-4xl font-bold text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://github.com/hnmai123"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-4xl font-bold text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/nhat-huy-mai/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-4xl font-bold text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                />
              </a>
            </div>
            <div className="text-lg">© 2025 Huy Mai. All rights reserved.</div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
