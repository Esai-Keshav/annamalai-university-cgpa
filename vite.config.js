import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Annamalai University CGPA Calculator",
        short_name: "CGPA Calc",

        display: "standalone",
        background_color: "#e0e5ec",
        theme_color: "#e0e5ec", // Tailwind green-400
        icons: [
          {
            src: "react.png", // file in /public
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp}"],
      },
    }),
  ],

  base: "/annamalai-university-cgpa",

  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
