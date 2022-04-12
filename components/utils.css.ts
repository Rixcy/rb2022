import { style } from '@vanilla-extract/css'
import { vars } from '../styles/theme.css'

export const link = style({
  display: 'inline-flex',
  color: vars.color.white,
  position: 'relative',
  overflow: 'hidden',
  outline: 'none',
  selectors: {
    '&:is(:focus-within, :hover)::after': {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    },
  },
  '::after': {
    content: '',
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '0.1em',
    backgroundColor: vars.color.theme[300],
    opacity: 0,
    transition: 'opacity 300ms, transform 300ms',
    transform: 'translate3d(-100%, 0, 0)',
  },
})
