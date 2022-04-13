import { style } from '@vanilla-extract/css'
import { fonts, vars } from '../../styles/theme.css'

export const recentPosts = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  rowGap: vars.space[6],
  marginBottom: vars.space[12],
})

export const post = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
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
