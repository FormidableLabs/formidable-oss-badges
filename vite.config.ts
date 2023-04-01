import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import tsconfigPaths from "vite-tsconfig-paths"
import postcss from "rollup-plugin-postcss"
import svgr from "vite-plugin-svgr"
import * as packageJson from "./package.json"

export default defineConfig({
  plugins: [
    react(),
    svgr({ exportAsDefault: true, svgrOptions: { svgo: false } }),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "formidable-oss-badges",
      formats: ["es", "cjs"],
      fileName: format => `formidable-oss-badges.${format}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.peerDependencies),
        "react/jsx-runtime",
      ],
      plugins: [
        postcss({
          modules: true,
        }),
      ],
    },
  },
})
