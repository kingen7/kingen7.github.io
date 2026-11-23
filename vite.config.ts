import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { fetchGitHubActivity } from "./api/github";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "portfolio-github-api",
      configureServer(server) {
        const { GITHUB_TOKEN } = loadEnv(mode, server.config.envDir, "GITHUB_TOKEN");

        server.middlewares.use("/api/github", async (req, res) => {
          res.setHeader("Content-Type", "application/json; charset=utf-8");

          if (req.method !== "GET") {
            res.statusCode = 405;
            res.end(JSON.stringify({ error: "Method not allowed" }));
            return;
          }

          const username = new URL(req.url ?? "/", "http://localhost").searchParams
            .get("username")?.trim();
          if (!username) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Missing username" }));
            return;
          }

          try {
            res.end(JSON.stringify(await fetchGitHubActivity(username, GITHUB_TOKEN)));
          } catch {
            res.statusCode = 502;
            res.end(JSON.stringify({ error: "GitHub activity unavailable" }));
          }
        });
      },
    },
  ],
  server: {
    allowedHosts: [
      'copulatively-refractive-leticia.ngrok-free.dev' 
    ],
    port: 5173,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
