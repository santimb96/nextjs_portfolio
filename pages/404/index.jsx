import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { RiForbid2Line } from 'react-icons/ri'
import WaterSpinner from '../../src/components/WaterSpinner/WaterSpinner'
import styles from './PageNotFound.module.css'

const PageNotFound = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true)
    const handleComplete = (url) => url === router.asPath && setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    // router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      // router.events.off('routeChangeError', handleComplete)
    }
  })
  return (
    <>
      {loading ? (
        <div className={styles.spinnerContainer}>
          <WaterSpinner />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.icon}>
            <RiForbid2Line />
          </div>
          <h1 className={styles.errorCode}>404</h1>
          <p className={styles.description}>Oops! Parece que te has equivocado de sitio!</p>
          <button className={styles.redirectButton}>
            <Link href='/'>Volver al inicio</Link>
          </button>
        </div>
      )}
    </>
  )
}

export default PageNotFound
