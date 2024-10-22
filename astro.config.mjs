import {defineConfig} from 'astro/config';
import {rehypeHeadingIds} from '@astrojs/markdown-remark';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
    // Enable React to support React JSX components.
    integrations: [
        mdx({
            rehypePlugins: [
                rehypeHeadingIds,
            ],
        }),
        react(),
        tailwind()
    ],
    vite: {
        css: {
            transformer: "sass",
        },
        build: {
            rollupOptions: {
                external: '/pagefind/pagefind.js?url'
            }
        }
    },
});