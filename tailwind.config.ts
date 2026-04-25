import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        'bg-dark': '#0b1530',
        'bg-dark-2': '#0f1c3d',
        'bg-tint': '#f4f7fb',

        // Text / Ink
        ink: '#0b1530',
        'ink-2': '#1e2a4a',
        muted: '#5b6678',
        'muted-2': '#8a93a6',

        // Lines
        line: '#e4e9f1',
        'line-hover': '#d6deeb',

        // Brand - Primary Blue
        brand: '#2d6cff',
        'brand-ink': '#1f4fd1',
        'brand-soft': '#3b82f6',
        chip: '#eef3ff',

        // Accent - Success Green
        accent: '#22c55e',
        'accent-ink': '#16a34a',

        // Service Tones
        'tone-blue': '#2d6cff',
        'tone-amber': '#f59e0b',
        'tone-violet': '#8b5cf6',
        'tone-green': '#22c55e',
        'tone-rose': '#ef4444',
        'tone-teal': '#14b8a6',

        // About Section Accents
        'about-emerald': '#10b981',
        'about-orange': '#f97316',
        'about-purple': '#a855f7',
        'about-cyan': '#06b6d4',
      },
      borderRadius: {
        xs: '6px',
        sm: '9px',
        md: '10px',
        lg: '14px',
        xl: '18px',
        pill: '999px',
      },
      fontSize: {
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '14.5': '14.5px',
        '15': '15px',
        '16': '16px',
        '17': '17px',
        '18': '18px',
        '19': '19px',
      },
      lineHeight: {
        'tight': '1.03',
        'heading': '1.10',
        'snug': '1.25',
        'normal': '1.55',
        'loose': '1.65',
      },
      letterSpacing: {
        'hero': '-0.03em',
        'h2': '-0.025em',
        'h3': '-0.015em',
        'tight': '-0.01em',
        'loose': '0.06em',
        'caps': '0.08em',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(11,21,48,0.04), 0 1px 1px rgba(11,21,48,0.03)',
        md: '0 6px 20px rgba(11,21,48,0.06), 0 2px 6px rgba(11,21,48,0.04)',
        'btn-brand': '0 4px 12px rgba(45,108,255,0.35)',
        'btn-brand-lg': '0 6px 18px rgba(45,108,255,0.40)',
        'btn-accent': '0 6px 18px rgba(34,197,94,0.35)',
        'glow-blue': '0 0 10px #3b82f6',
        'glow-green': '0 0 8px #22c55e',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '14': '56px',
        '18': '72px',
        '28': '110px',
      },
      maxWidth: {
        'wrap': '1120px',
      },
      transitionDuration: {
        'fast': '0.08s',
        'med': '0.15s',
        'slow': '0.20s',
        'slower': '0.25s',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
