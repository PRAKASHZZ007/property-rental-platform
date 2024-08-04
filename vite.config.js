import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/property-rental-platform/', // Replace with your repository name
  build: {
    sourcemap: true,
  },
});
