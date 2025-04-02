/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      grey: {
        50: '#F2F2F2',
      },
      color: {
        primary: '#1a1a1a',
        secondary: '#525252',
        error: '#CE0000',
        description: '#666666',
        light: {
          btn: {
            'blue-900-primary': '#0017c1',
          },
          st: {
            'green-800-success': '#197a4b',
          },
          bg: {
            'gray-900': '#1a1a1a',
          },
          tx: {
            'gray-900-primary': '#1a1a1a',
          },
          ic: {
            'gray-800-secondary': '#333333',
          },
          br: {
            'blue-900-interactive': '#0017c1',
          },
          tag: {
            'green-50-bg': '#e8f5ec',
          },
        },
        dark: {
          btn: {
            'blue-900-primary': '#39abff',
          },
          st: {
            'green-800-success': '#b3b3b3',
          },
          bg: {
            'gray-900': '#1a1a1a',
          },
          tx: {
            'gray-900-primary': '#ffffff',
          },
          ic: {
            'gray-800-secondary': '#ffffff',
          },
          br: {
            'blue-900-interactive': '#578bff',
          },
          tag: {
            'green-50-bg': '#197a4b',
          },
        },
      },
    },
    fontSize: {
      heading_lg: ['24px', { lineHeight: '1.5', fontWeight: 'bold' }],
      heading_md: ['20px', { lineHeight: '1.5', fontWeight: 'bold' }],
    },
    extend: {
      screens: {
        desktop: '1920px',
        laptop: '1440px',
        readonly: '1080px',
      },
      boxShadow: {
        'popup': '0px 4px 16px 3px #0000001A, 0px 1px 6px 0px #0000004D',
        'style1': '0px 1px 5px 0px rgba(0, 0, 0, 0.30), 0px 2px 8px 1px rgba(0, 0, 0, 0.10)',
        'focus-outline': '0 0 0 2px #FFD43D, 0 0 0 6px #1A1A1A',
      },
    },
  },
  plugins: [],
}
