/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        themes: [
            {
                nord: {
                    'color-scheme': 'light',
                    primary: '#5E81AC',
                    secondary: '#81A1C1',
                    accent: '#88C0D0',
                    neutral: '#4C566A',
                    'neutral-content': '#D8DEE9',
                    'base-100': '#ECEFF4',
                    'base-200': '#E5E9F0',
                    'base-300': '#D8DEE9',
                    'base-content': '#2E3440',
                    info: '#B48EAD',
                    success: '#A3BE8C',
                    warning: '#EBCB8B',
                    error: '#BF616A',
                    '--rounded-box': '0.4rem',
                    '--rounded-btn': '0.2rem',
                    '--rounded-badge': '0.4rem',
                    '--tab-radius': '0.2rem',
                },
            },
            {
                dark: {
                    'color-scheme': 'dark',
                    primary: 'oklch(65.69% 0.196 275.75)',
                    secondary: 'oklch(74.8% 0.26 342.55)',
                    accent: 'oklch(74.51% 0.167 183.61)',
                    neutral: '#2a323c',
                    'neutral-content': '#A6ADBB',
                    'base-100': '#1d232a',
                    'base-200': '#191e24',
                    'base-300': '#15191e',
                    'base-content': '#A6ADBB',
                    '--rounded-btn': '0.2rem',
                },
            },
        ],
    },
}
