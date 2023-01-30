import { createContext, useState } from 'react'

const BackgroundContext = createContext()

const BackgroundProvider = ({ children }) => {
  const [dark, setDark] = useState(false)

  return <BackgroundContext.Provider value={{ dark, setDark }}>{children}</BackgroundContext.Provider>
}

export { BackgroundContext, BackgroundProvider }
