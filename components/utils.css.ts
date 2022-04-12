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
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
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
    background: `linear-gradient(90deg, ${vars.color.theme[300]} 0%, ${vars.color.theme[500]} 100%)`,
    transition: 'transform 200ms ease-out',
    transform: 'scaleX(0)',
    transformOrigin: 'bottom right',
  },
})
