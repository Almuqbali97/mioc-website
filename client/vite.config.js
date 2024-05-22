import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this is set correctly
  },
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:3000'
  //   }
  // }
});
