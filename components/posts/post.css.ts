import { style } from '@vanilla-extract/css'
import { fonts, screen, vars } from '../../styles/theme.css'

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: vars.space[6],
  paddingBottom: vars.space[2],
  marginBottom: vars.space[2],
  '@media': {
    [screen.md]: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
    },
  },
})

export const allPostsLink = style({
  whiteSpace: 'nowrap',
})

export const desktopContent = style({
  display: 'none',
  '@media': {
    [screen.md]: {
      display: 'flex',
      flexDirection: 'row',
      columnGap: vars.space[2],
    },
  },
})

export const titleWrapper = style([
  fonts['2xl'],
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    columnGap: vars.space[2],
  },
])

export const title = style([
  fonts['2xl'],
  {
    margin: 0,
  },
])

export const breadcrumbSeparator = style({
  color: vars.color.grey,
})

export const date = style([
  fonts.xl,
  {
    display: 'flex',
    color: vars.color.lightGrey,
    '@media': {
      [screen.md]: {
        marginLeft: vars.space[2],
      },
    },
  },
])

export const separator = style({
  width: '100%',
  backgroundColor: vars.color.lightGrey,
  opacity: 0.3,
})
