import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Cloudflare Pages想定: ビルド出力は dist/
export default defineConfig({
  plugins: [react()],
  server: {
    // 同じWi-Fi内の別端末（スマホ等）からアクセスできるようにする
    host: true,
  },
  build: {
    outDir: "dist",
  },
});
