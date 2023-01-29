import React, { useState } from 'react'
import { BackgroundProvider } from '../contexts/BackgroundContext'
import '../styles/globals.css'
import '../styles/colors.css'
import '../styles/sizes.css'

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false)

  return (
    <>
      <BackgroundProvider>
        <Component setIsDark={setIsDark} isDark={isDark} {...pageProps} />
        <style jsx global='true'>
          {`
            body {
              transition: all 0.3s ease-in-out;
              background: ${isDark ? 'var(--primary-dark)' : 'var(--primary-clear)'};
            }
          `}
        </style>
      </BackgroundProvider>
    </>
  )
}

export default MyApp
