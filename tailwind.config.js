/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/components/**/*.tsx'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      vlg: '1120px',
      xl: '1280px',
    },
    fontSize: {
      xs: '8px',
      sm: '10px',
      tiny: '12px',
      base: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '20px',
      '3xl': '22px',
      '4xl': '24px',
      '5xl': '26px',
      '6xl': '28px',
      '7xl': '30px',
      '8xl': '32px',
      '10xl': '36px',
    },
    lineHeight: {
      10: '10px',
      11: '11px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      17: '17px',
      18: '18px',
      20: '20px',
      21: '21px',
      23: '23px',
      24: '24px',
      25: '25px',
      28: '28px',
      30: '30px',
      33: '33px',
      40: '40px',
      46: '46px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        thin: 'var(--color-gray-thin)',
        lightest: 'var(--color-gray-lightest)',
        'lighter-hard': 'var(--color-gray-lighter-hard)',
        lighter: 'var(--color-gray-lighter)',
        'lighter-soft': 'var(--color-gray-lighter-soft)',
        'lighter-thin': 'var(--color-gray-lighter-thin)',
        light: 'var(--color-gray-light)',
        normal: 'var(--color-gray)',
        dark: 'var(--color-gray-dark)',
        storm: 'var(--color-gray-storm)',
        darkest: 'var(--color-gray-darkest)',
        video: 'var(--color-gray-video)',
      },
      peach: {
        normal: 'var(--color-peach)',
        lightest: 'var(--color-peach-lightest)',
      },
      red: {
        normal: 'var(--color-red)',
        lightest: 'var(--color-red-lightest)',
      },
      blue: {
        normal: 'var(--color-blue)',
        light: 'var(--color-blue-light)',
        lighter: 'var(--color-blue-lighter)',
        lightest: 'var(--color-blue-lightest)',
        darkest: 'var(--color-blue-darkest)',
      },
      green: {
        normal: 'var(--color-green)',
        lightest: 'var(--color-green-lightest)',
      },
      gold: {
        normal: 'var(--color-gold)',
        lightest: 'var(--color-gold-lightest)',
      },
      purple: {
        normal: 'var(--color-purple)',
        lightest: 'var(--color-purple-lightest)',
      },
      yellow: {
        normal: 'var(--color-yellow)',
        lightest: 'var(--color-yellow-lightest)',
      },
      'violet-dark': 'var(--color-violet-dark)',
      'gray-suit': 'var(--color-gray-suit)',
    },
  },
  variants: {},
  plugins: [],
}