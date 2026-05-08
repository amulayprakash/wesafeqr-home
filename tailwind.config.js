/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:     'hsl(var(--primary))',
        coral:       'hsl(var(--coral))',
        background:  'hsl(var(--background))',
        foreground:  'hsl(var(--foreground))',
        muted:       'hsl(var(--muted))',
        'muted-fg':  'hsl(var(--muted-foreground))',
        card:        'hsl(var(--card))',
        border:      'hsl(var(--border))',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl:  '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.2)' },
          '50%':      { boxShadow: '0 0 40px hsl(var(--primary) / 0.4)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(200%)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.6s ease-out both',
        'fade-in':    'fade-in 0.5s ease-out both',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer:      'shimmer 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
