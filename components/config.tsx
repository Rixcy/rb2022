import { createContext, ReactNode, useContext } from 'react'

type ConfigContext = {
  jobTitle: string
  name: string
  uppercaseName: string
  baseTitle: string
  baseDescription: string
  baseOgImageUrl: string
}

const configContext = createContext({} as ConfigContext)

export const ConfigContextProvider = ({
  children,
}: {
  children: ((context: ConfigContext) => ReactNode) | ReactNode
}) => {
  const name = 'Rick Booth'
  const uppercaseName = name.toUpperCase()
  const jobTitle = 'Software Developer'
  const baseTitle = 'RICK BOOTH - SOFTWARE DEVELOPER'
  const baseDescription = `${name} is a ${jobTitle} based in Newcastle. Working at zeroheight building design system software.`
  const baseOgImageUrl = `https://rb2022.vercel.app/api/og-image?title=${encodeURIComponent(
    baseTitle
  )})`

  const context = {
    name,
    uppercaseName,
    jobTitle,
    baseTitle,
    baseDescription,
    baseOgImageUrl,
  }

  const content = children instanceof Function ? children(context) : children

  return (
    <configContext.Provider value={context}>{content}</configContext.Provider>
  )
}

export const useConfig = () => {
  const context = useContext(configContext)
  if (!context)
    throw new Error('useConfig must be used within a ConfigContextProvider')
  return context
}
