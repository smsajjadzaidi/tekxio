/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0E14',
        surface: '#111620',
        border: '#1F2733',
        text: '#E6EDF3',
        muted: '#8B98A9',
        accent: '#00E5A0',
        danger: '#F87171',
      },
    },
  },
  plugins: [],
};
