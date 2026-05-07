// import { useEffect, useState } from "react";

// export function useTheme() {
//   const [theme, setTheme] = useState(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved) return saved;

//     return window.matchMedia("(prefers-color-scheme: light)").matches
//       ? "light"
//       : "dark";
//   });

//   useEffect(() => {
//     const root = document.documentElement;

//     if (theme === "light") {
//       root.classList.add("light");
//     } else if (theme === "dark") {
//       root.classList.remove("light");
//     } else if (theme === "system") {
//       const isDark = window.matchMedia("(prefers-color-scheme: light)").matches;
//       root.classList.toggle("light", isLight);
//     }

//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   // sync with system (only when using system mode)
//   useEffect(() => {
//     const media = window.matchMedia("(prefers-color-scheme: light)");

//     const handler = () => {
//       if (theme === "system") {
//         document.documentElement.classList.toggle("light", media.matches);
//       }
//     };

//     media.addEventListener("change", handler);
//     return () => media.removeEventListener("change", handler);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) =>
//       prev === "light" ? "dark" : "light"
//     );
//   };

//   const toggleLightTheme = () => setTheme("light");
//   const toggleDarkTheme = () => setTheme("dark");
//   const resetToSystem = () => setTheme("system");

//   return {
//     theme,
//     toggleTheme,
//     toggleLightTheme,
//     toggleDarkTheme,
//     resetToSystem,
//   };
// }