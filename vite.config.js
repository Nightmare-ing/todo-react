import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  root: path.resolve(__dirname, 'client'), // Set the root directory for Vite
  server: {
    port: 5173,
  },
});