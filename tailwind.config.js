/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myblue: { DEFAULT: '#0057B8', light: '#0066d9' },
        myyellow: '#FFD700 ',
        myblack: '#0E0E0E ',
        mywhite: '#F4F2F0 ',
      },
      keyframes: {
        scroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 20px))' },
        },
      },
      screens: {
        review1: '1446px',
        review2: '1114px',
      },
    },
  },
  plugins: [],
}
