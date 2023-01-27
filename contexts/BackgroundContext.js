import { createContext, useState } from 'react'

const BackgroundContext = createContext()

const BackgroundProvider = ({ children }) => {
  const [dark, setDark] = useState(true)

  return <BackgroundContext.Provider value={{ dark, setDark }}>{children}</BackgroundContext.Provider>
}

export { BackgroundContext, BackgroundProvider }
