import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-9 h-9 flex items-center justify-center rounded-full border transition-colors"
      style={{ borderColor: "var(--line)", color: "var(--text)" }}
    >
      {theme === "dark" ? <HiSun /> : <HiMoon />}
    </button>
  );
}
