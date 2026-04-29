/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ink: '#03050a',
        cyan: '#00f5ff',
        blue: '#0066ff',
        snow: '#e2eeff',
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      keyframes: {
        flicker: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        flicker: 'flicker 3s ease-in-out infinite',
        scanline: 'scanline 6s linear infinite',
      },
    },
  },
  plugins: [],
}