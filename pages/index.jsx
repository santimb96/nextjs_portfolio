import React, { useState } from 'react'
import Footer from '../src/components/Footer/Footer'
import NavBar from '../src/components/NavBar/NavBar'
import PresentationCard from '../src/components/PresentationCard/PresentationCard'
import styles from './PublicWrapper.module.css'

const PublicWrapper = () => {
  const [page, setPage] = useState('personaldata')
  const [footerData, setFooterData] = useState({})

  const PAGE_COMPONENT = {
    personaldata: (
      <div className={styles.presentationCardContainer}>
        <PresentationCard setFooterData={setFooterData} />
      </div>
    )
    // skills: <Skills />,
    // experience: <Experience />,
    // certification: <Certification />
  }

  return (
    <div className={styles.container}>
      <NavBar page={page} setPage={setPage} />
      {PAGE_COMPONENT[page]}
      <Footer name={footerData?.name} socialMedia={footerData?.socialMedia} />
    </div>
  )
}

export default PublicWrapper
