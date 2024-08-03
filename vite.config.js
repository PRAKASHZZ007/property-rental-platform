import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/property-rental-platform/', // Ensure this matches your GitHub repository name
  plugins: [react()],
});
