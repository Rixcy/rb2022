import { style } from '@vanilla-extract/css'
import { fonts, screen, vars } from '../../styles/theme.css'

export const item = style([
  fonts.lg,
  {
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    columnGap: vars.space[4],
    marginBottom: vars.space[4],
    selectors: {
      '&:hover, &:focus-within': {
        color: vars.color.theme[400],
      },
    },
    '@media': {
      [screen.sm]: {
        marginBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
  },
])

export const separator = style({
  width: '100%',
  borderColor: 'rgb(38 38 38)',
  borderTopWidth: '1px',
  borderTopStyle: 'dashed',
  display: 'none',
  selectors: {
    [`${item}:hover &, ${item}:focus-within &`]: {
      borderTopColor: vars.color.theme[400],
    },
  },
  '@media': {
    [screen.sm]: {
      display: 'block',
    },
  },
})

export const company = style({
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  letterSpacing: '2px',
  selectors: {
    [`${item}:hover &, ${item}:focus-within &`]: {
      color: vars.color.theme[400],
    },
  },
})

export const title = style({
  color: vars.color.lightGrey,
  whiteSpace: 'nowrap',
  selectors: {
    [`${item}:hover &, ${item}:focus-within &`]: {
      color: vars.color.theme[400],
    },
  },
})

export const duration = style({
  color: vars.color.grey,
  whiteSpace: 'pre',
})
