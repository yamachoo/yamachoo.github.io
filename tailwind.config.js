module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      spacing: {
        typing: '17ch'
      },
      borderWidth: {
        12: '12px'
      },
      keyframes: {
        typing: {
          '0%': {
            width: 0
          }
        },
        caret: {
          '50%': {
            'border-right-color': 'currentColor'
          }
        }
      },
      animation: {
        typing: 'typing 3s steps(23), caret 1s steps(1) infinite'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
