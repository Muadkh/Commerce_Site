/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './Components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  screens: {
    'sm': '320px',
    // => @media (min-width: 576px) { ... }
    'md': '768px',
    // => @media (min-width: 768px) { ... }
    'lg': '992px',
    // => @media (min-width: 992px) { ... }
    'xl': '1200px',
    // => @media (min-width: 1200px) { ... }
  },

  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
};
export const plugins = [require("daisyui")];
