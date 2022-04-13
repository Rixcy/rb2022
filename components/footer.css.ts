import { style } from '@vanilla-extract/css'
import { fonts, vars } from '../styles/theme.css'

export const footer = style({
  color: vars.color.grey,
  marginBottom: vars.space[6],
  flexDirection: 'column',
})

export const name = style([
  fonts['3xl'],
  {
    marginTop: 0,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 0,
  },
])

export const locationList = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  gap: vars.space[2],
  padding: 0,
})

export const linksList = style([
  fonts.sm,
  {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    gap: vars.space[2],
    padding: 0,
  },
])

export const link = style({
  color: vars.color.white,
  textTransform: 'uppercase',
})

export const copyrightNotice = style(fonts.sm)
