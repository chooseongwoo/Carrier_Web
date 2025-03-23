import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
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
      outDir: 'out/preload',
      rollupOptions: {
        input: {
          preload: path.resolve(__dirname, 'electron/preload.ts'),
        },
      },
      lib: {
        entry: path.resolve(__dirname, 'electron/preload.ts'),
        formats: ['cjs'],
        fileName: () => 'preload.cjs',
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    root: '.',
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
