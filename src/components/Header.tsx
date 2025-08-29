"use client";

import { useState } from "react";
import Image from "next/image";
import NavLink from "@/components/NavLink";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-50 dark:bg-gray-900 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <NavLink
            href="/"
            className="flex items-center text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <Image
              src="/logo.ico"
              alt="Logo"
              width={40}
              height={40}
              className="mx-auto rounded-full shadow-lg mr-2"
              priority
            />
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Huy Mai
            </span>
          </NavLink>
        </div>

        {/* Middle: Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 font-bold text-base lg:text-lg">
          <li>
            <NavLink
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#experience"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </NavLink>
          </li>
        </ul>

        {/* Right: GitHub (desktop only) + Hamburger (mobile) */}
        <div className="flex items-center gap-2">
          <NavLink
            href="/games"
            className="hidden md:inline-block font-bold border-2 rounded-full px-4 py-1.5 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            Mini Games
          </NavLink>

          {/* Hamburger (mobile only) */}
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
          <ul className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-3 text-lg font-semibold">
            <li>
              <NavLink href="#about" onClick={() => setOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink href="#skills" onClick={() => setOpen(false)}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink href="#experience" onClick={() => setOpen(false)}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink href="#projects" onClick={() => setOpen(false)}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink href="/games" onClick={() => setOpen(false)}>
                Mini Games
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
