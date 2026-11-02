import { defineConfig } from 'vitest/config';


export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['frontend/**/*.test.{ts,tsx}'],
    setupFiles: ['./frontend/app/test/setup.ts'],
  },
});