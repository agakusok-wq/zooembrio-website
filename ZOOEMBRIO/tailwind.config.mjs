/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1a2b4a',
          teal: '#2ab0b3',
          orange: '#e34e26',
          green: '#2d8a4e',
          magenta: '#c23b7a',
          cream: '#faf8f5',
        },
        spot: {
          coral: '#e8482a',
          amber: '#e8d44a',
          sky: '#7ec8e3',
          teal: '#2ab0b3',
          yellow: '#e8d44a',
          magenta: '#e63380',
          purple: '#5b3f8c',
          green: '#3d9b5c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        spot: '0 20px 50px -20px rgba(232, 72, 42, 0.25)',
        card: '0 8px 30px -12px rgba(26, 43, 74, 0.12)',
      },
    },
  },
  plugins: [],
};
