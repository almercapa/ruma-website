import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // This tells Vite that your project root is the current folder
  root: './', 
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        // This maps your URLs to the files in your pages folder
        main: resolve(__dirname, 'pages/index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        schedule: resolve(__dirname, 'pages/schedule.html'),
        join: resolve(__dirname, 'pages/join.html'),
        dues: resolve(__dirname, 'pages/dues.html'),
      },
    },
  },
});