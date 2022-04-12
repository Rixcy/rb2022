import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'

export const intro = style({
  maxWidth: '35.5rem',
  color: vars.color.lightGrey,
  fontSize: '24px',
  lineHeight: 1.5,
})
