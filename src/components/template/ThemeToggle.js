"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      style={{
        backgroundColor: "transparent",
        outline: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.3rem",
        display: "flex",
        alignItems: "center",
        // marginTop:"12px"
      }}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <FiSun color="var(--menue-color)" size={25} /> : <FiMoon className="theme" color="var(--menue-color)" size={25} />}
    </button>
  );
}
