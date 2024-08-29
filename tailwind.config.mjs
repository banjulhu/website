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
                basic: {
                    "black": "#1b2021"
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
