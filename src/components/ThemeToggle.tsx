"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-xl focus:outline-none"
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
    </button>
  );
}