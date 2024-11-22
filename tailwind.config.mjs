/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        warning: "#FFA500",
        info: "#17a2b8",
        error: "#dc3545",
        success: "#28a745",
      },
    },
  },
  plugins: [],
};
