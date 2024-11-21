import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        main: '#A3E636',
        mainAccent: '#88cc19', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: '#E0E7F1',
        text: '#000',
        border: '#000',

        // dark mode
        darkBg: '#2c312b',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color
      },
      borderRadius: {
        base: '6px',
      },
      boxShadow: {
        light: '4px 4px 0px 0px #000',
        dark: '4px 4px 0px 0px #000',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '600',
        heading: '800',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
