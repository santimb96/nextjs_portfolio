import React, { useState } from 'react'
import Footer from '../src/components/Footer/Footer'
import NavBar from '../src/components/NavBar/NavBar'
import PresentationCard from '../src/components/CollectionComponents/PresentationCard/PresentationCard'
import styles from './PublicWrapper.module.css'
import SkillList from '../src/components/CollectionComponents/Skills/SkillList'
import CertificationList from '../src/components/CollectionComponents/Certifications/CertificationList'
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop'
const PublicWrapper = () => {
  const [page, setPage] = useState('personaldata')
  const [show, setShow] = useState(false)
  const [footerData, setFooterData] = useState({})

  const PAGE_COMPONENT = {
    personaldata: (
      <div className={styles.presentationCardContainer}>
        <PresentationCard setFooterData={setFooterData} />
      </div>
    ),
    skills: (
      <div className={styles.skillsContainer}>
        <SkillList />
      </div>
    ),
    certification: (
      <div className={styles.certificationContainer}>
        <CertificationList />
      </div>
    )
    // experience: <Experience />,
  }

  return (
    <div className={styles.container}>
      <ScrollToTop />
      <NavBar page={page} setPage={setPage} setShow={setShow} />
      {show && (
        <>
          {PAGE_COMPONENT[page]}
          <Footer name={footerData?.name} socialMedia={footerData?.socialMedia} />
        </>
      )}
    </div>
  )
}

export default PublicWrapper
