import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import { Plugin } from "vite";

// Raw file loader plugin
const rawLoader: Plugin = {
  name: "raw-file-loader",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url?.endsWith("?raw")) {
        const filePath = path.join(
          process.cwd(),
          req.url.replace("?raw", "").replace(/^\//, "")
        );

        try {
          const fileContent = fs.readFileSync(filePath, "utf-8");
          res.setHeader("Content-Type", "text/plain");
          res.end(fileContent);
        } catch (error) {
          console.error(`Error reading file ${filePath}:`, error);
          res.statusCode = 404;
          res.end(`File not found: ${filePath}`);
        }
      } else {
        next();
      }
    });
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), rawLoader],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
