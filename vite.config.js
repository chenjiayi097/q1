import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
const path = require('path');

export default defineConfig({
    build: {
        outDir: 'build',
    },
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@page': path.resolve(__dirname, 'src/templates/pages'),
            '@reducers': path.resolve(__dirname, './src/serviceCenter/store'),
        },
    },
    plugins: [
        reactRefresh({
            parserPlugins: ['classProperties', 'classPrivateProperties'],
        }),
    ],
});
