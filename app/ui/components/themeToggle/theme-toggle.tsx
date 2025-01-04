"use client"
 
import { useState, useEffect} from "react"
import { useTheme } from "next-themes";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="flex items-center px-[8rem] rounded-[3.75rem] hover:bg-surface-hover hover:cursor-pointer"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FaRegSun className="w-[15rem]"/> : <FaRegMoon className="w-[15rem]"/>}
    </div>
  )
}