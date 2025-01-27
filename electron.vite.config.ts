import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { externalizeDepsPlugin, defineConfig } from 'electron-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'electron/main.ts'),
        },
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'electron/preload.ts'),
        },
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    root: '.',
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'index.html'),
        },
      },
    },
    plugins: [
      react(),
      vanillaExtractPlugin({
        identifiers: 'debug',
      }),
      tsconfigPaths({
        ignoreConfigErrors: true,
      }),
    ],
    server: {
      port: 5173,
      open: true,
    },
  },
});
