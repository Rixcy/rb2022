import { style } from '@vanilla-extract/css'
import { fonts, screen, vars } from '../../styles/theme.css'

export const recentPosts = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  rowGap: vars.space[2],
  marginBottom: vars.space[12],
})

export const post = style({
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    [screen.sm]: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
})

export const link = style([
  fonts.xl,
  {
    outline: 'none',
    selectors: {
      '&:hover, &:focus-within': {
        textDecoration: 'underline',
      },
    },
  },
])

export const date = style([
  fonts.sm,
  {
    color: vars.color.lightGrey,
  },
])
