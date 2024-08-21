import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                width: {
                    '0%': { width: '0%' },
                    '100%': { width: 'var(--target-width, 100%)' },
                },
            },
            animation: {
                width: 'width 5s ease forwards',
            },
        },
    },
    plugins: [],
};

export default config;
