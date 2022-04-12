import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../styles/theme.css'

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
})

export const title = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
})

export const nav = style({
  display: 'flex',
  flexDirection: 'row',
  padding: vars.space[8],
  gap: vars.space[2],
})

export const item = recipe({
  base: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    ':hover': {
      color: vars.color.theme[600],
    },
  },
  variants: {
    active: {
      true: { color: vars.color.theme[600] },
    },
  },
})
