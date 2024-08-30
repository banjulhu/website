const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
                emphasized: ['Sriracha', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                brand: {
                    "primary": "#F57D20"
                },
                dark: {
                    "background": "#121212",
                    "surface": "#161616",
                    "primary": "#F57D20",
                    "on-background": "",
                    "on-surface": "",
                    "on-primary": "#F57D20"
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
