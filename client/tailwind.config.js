/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        dark: '#1C2434',
        bodydark: '#AEB7C0',
        bodydark1: '#DEE4EE',
        bodydark2: '#8A99AF',
        graydark: '#333A48',
        success: '#219653',
        danger: '#D34053',
        warning: '#FFA70B',
        stroke: '#E2E8F0',
        primary1: '#3C50E0',
        // dashboardBg: '#F6F5FF',
        dashboardBg: '#F1F5F9',
        // primary1: '#8C57FF',
        primary2: '#1D2B53',
        primary_brown: '#d8a757',
        primary_blue: '#016699'
      },
      fontFamily: {
        custom: ['Roboto', 'Helvetica', 'Arial', 'Verdana', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}