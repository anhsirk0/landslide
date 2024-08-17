import { useEffect } from "react";

const KEY = "landslide-theme";
function useTheme(apply: boolean = false) {
  function applyTheme(theme: string = "cupcake", setTheme: boolean = true) {
    if (setTheme) localStorage.setItem(KEY, theme);
    const html = document.querySelector("html");
    if (html) html.setAttribute("data-theme", theme);
  }

  useEffect(() => {
    if (apply) {
      const currentTheme = localStorage.getItem(KEY) || "cupcake";
      applyTheme(currentTheme, false);
    }
  }, [apply]);

  return { applyTheme };
}

export default useTheme;
