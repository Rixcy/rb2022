import { keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { fonts, motion, screen, vars } from '../styles/theme.css'

export const content = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  paddingTop: vars.space[4],
  paddingBottom: vars.space[4],
})

export const nav = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  backdropFilter: 'saturate(180%) blur(20px)',
  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px',
  position: 'sticky',
  top: 0,
  zIndex: 10,
  backgroundColor: 'rgba(50, 50, 50, 0.62)',
  '@media': {
    [screen.sm]: {
      marginBottom: vars.space[12],
    },
  },
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
    '@media': {
      [motion.enabled]: {
        selectors: {
          '&::after': {
            display: 'inline-block',
          },
        },
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

export const items = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.space[4],
})

export const item = recipe({
  base: {
    outline: 'none',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: vars.color.theme[300],
    '@media': {
      [motion.enabled]: {
        transition: 'color 200ms ease-out',
        selectors: {
          '&:focus-within::before, &:focus-within::after, &:hover::before, &:hover::after':
            {
              transition: 'color 200ms ease-out',
            },
        },
      },
    },
    selectors: {
      '&:focus-within::before, &:focus-within::after, &:hover::before, &:hover::after':
        {
          color: vars.color.theme[400],
        },
    },
    '::before': {
      content: '> ',
      color: vars.color.theme[300],
      opacity: 0,
    },
    '::after': {
      content: ' <',
      color: vars.color.theme[300],
      opacity: 0,
    },
    ':focus-within': {
      color: vars.color.theme[400],
    },
    ':hover': {
      color: vars.color.theme[400],
    },
  },
  variants: {
    active: {
      true: {
        '@media': {
          [motion.enabled]: {
            selectors: {
              '&:hover::before, &:hover::after': {
                transition: 'color 200ms ease-out',
              },
            },
          },
        },
        selectors: {
          '&:hover::before, &:hover::after': {
            color: vars.color.theme[400],
          },
          '&::after, &::before': {
            opacity: 1,
          },
        },
      },
    },
  },
})
