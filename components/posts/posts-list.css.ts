import { style } from '@vanilla-extract/css'
import { fonts, vars } from '../../styles/theme.css'

export const posts = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  rowGap: vars.space[6],
})

export const title = style([
  fonts['2xl'],
  {
    display: 'flex',
    fontWeight: 'bold',
    outline: 'none',
    marginTop: 0,
    marginBottom: vars.space[2],
    selectors: {
      '&:hover, &:focus-within': {
        textDecoration: 'underline',
      },
    },
  },
])

export const date = style([
  fonts.xl,
  {
    display: 'flex',
    color: vars.color.lightGrey,
    paddingBottom: vars.space[2],
    marginBottom: vars.space[2],
  },
])
