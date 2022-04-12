import { style } from '@vanilla-extract/css'
import { vars } from '../styles/theme.css'

export const footer = style({
  color: vars.color.grey,
})

export const name = style({
  fontSize: '32px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  marginBottom: 0,
})

export const locationList = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  gap: vars.space[2],
  padding: 0,
})

export const linksList = style({
  fontSize: '14px',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  gap: vars.space[2],
  padding: 0,
})

export const link = style({
  color: vars.color.white,
  textTransform: 'uppercase',
})

export const copyrightNotice = style({
  fontSize: '14px',
})
