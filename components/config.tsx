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
  const jobTitle = 'Technical Architect'
  const baseTitle = 'RICK BOOTH - FRONTEND DEVELOPER'
  const baseDescription = `${name} is a ${jobTitle} based in Newcastle. Working at Builder.ai on delivering and designing custom software and serving as a subject expert for Ruby, React and React Native.`
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
