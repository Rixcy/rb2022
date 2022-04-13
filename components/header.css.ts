import { keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { fonts, vars } from '../styles/theme.css'

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
})

const cursorBlink = keyframes({
  '0%': { opacity: 1 },
  '50%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const title = style([
  fonts['2xl'],
  {
    fontWeight: 'bold',
    outline: 'none',
    position: 'relative',
    selectors: {
      '&:hover::after': {
        display: 'inline-block',
      },
    },
    ':focus-within': {
      textDecoration: 'underline',
    },
    '::after': {
      animation: `${cursorBlink} 1.5s steps(1) infinite`,
      display: 'none',
      content: '',
      position: 'absolute',
      right: '-8px',
      width: '3px',
      height: '100%',
      background: vars.color.white,
    },
  },
])

export const nav = style({
  display: 'flex',
  flexDirection: 'row',
  padding: vars.space[8],
  gap: vars.space[2],
})

export const item = recipe({
  base: {
    outline: 'none',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: vars.color.theme[300],
    transition: 'color 200ms ease-out',
    ':focus-within': {
      textDecoration: 'underline',
      color: vars.color.theme[400],
    },
    ':hover': {
      color: vars.color.theme[400],
    },
  },
  variants: {
    active: {
      true: { color: vars.color.theme[300] },
    },
  },
})
