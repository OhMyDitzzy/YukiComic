import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    coverage: {
      provider: "v8",
      reporter: ["html", "json", "text"]
    },
    pool: "threads",
    include: ['**/*.{test,spec}.ts'],
    exclude: ["node_modules", "lib"]
  }
});
