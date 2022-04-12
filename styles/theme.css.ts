import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    theme: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
    white: '#fff',
    black: '#000',
    grey: '#666',
    lightGrey: '#a3a3a3',
  },
  space: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
  },
})

type FontPairing = { fontSize: string; lineHeight: string | number }
type Fonts = Record<string, FontPairing>

export const fonts: Fonts = {
  xs: { fontSize: '0.75rem', lineHeight: '1rem' }, // [12px, 16px]
  sm: { fontSize: '0.875rem', lineHeight: '1.25rem' }, // [14px, 20px]
  base: { fontSize: '1rem', lineHeight: '1.5rem' }, // [16px, 24px]
  lg: { fontSize: '1.125rem', lineHeight: '1.75rem' }, // [18px, 28px]
  xl: { fontSize: '1.25rem', lineHeight: '1.75rem' }, // [20px, 28px]
  '2xl': { fontSize: '1.5rem', lineHeight: '2rem' }, // [24px, 32px]
  '3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' }, // [30px, 36px]
  '4xl': { fontSize: '2.25rem', lineHeight: '2.5rem' }, // [36px, 40px]
  '5xl': { fontSize: '3rem', lineHeight: 1 }, // [48px, 48px]
}

export const screen = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
}
