/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        wine: '#722F37',
        'wine-hover': '#5a1f27',
        'wine-light': '#9B4D57',
        'wine-pale': '#F5E8EA',
        cream: '#FAF7F4',
        parchment: '#F5EFE6',
        ink: '#2C1810',
        muted: '#8B7355',
      },
      fontFamily: {
        script: ["'Pinyon Script'", 'cursive'],
        garamond: ["'EB Garamond'", 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
      },
    },
  },
  plugins: [],
};
