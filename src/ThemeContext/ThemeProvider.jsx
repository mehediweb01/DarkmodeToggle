import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState(localStorage.getItem("theme") === "dark");
  useEffect(() => {
    if (Theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [Theme]);
  return (
    <ThemeContext.Provider value={{ Theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
