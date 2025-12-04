import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Shims process.env.API_KEY for the GenAI SDK to work in the browser build
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});