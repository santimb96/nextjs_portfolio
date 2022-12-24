import React, { useEffect, useState, lazy, Suspense } from 'react'
import Footer from '../src/components/Footer/Footer'
import NavBar from '../src/components/NavBar/NavBar'
import PresentationCard from '../src/components/PresentationCard/PresentationCard'
import styles from './PublicWrapper.module.css'

const PublicWrapper = () => {
  const [page, setPage] = useState('personaldata')
  const [footerData, setFooterData] = useState({})

  return (
    <>
      <div className={styles.container}>
        <NavBar page={page} setPage={setPage} />
        <div className={styles.presentationCardContainer}>
          <PresentationCard setFooterData={setFooterData} />
        </div>
        <Footer name={footerData?.name} socialMedia={footerData?.socialMedia} />
      </div>
    </>
  )
}

export default PublicWrapper
