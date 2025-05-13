/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B42B2B',
        secondary: '#2A2E35',
        accent: '#D9822B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@tailwindcss/forms'),
  ],
  variants: {
    extend: {
      scrollSnapType: ['responsive'],
      scrollSnapAlign: ['responsive'],
    },
  },
}

