import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Footer from '../src/components/Footer/Footer'
import NavBar from '../src/components/NavBar/NavBar'
import PresentationCard from '../src/components/CollectionComponents/PresentationCard/PresentationCard'
import styles from './PublicWrapper.module.css'
import SkillList from '../src/components/CollectionComponents/Skills/SkillList'
import CertificationList from '../src/components/CollectionComponents/Certifications/CertificationList'
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop'
import ExperienceList from '../src/components/CollectionComponents/Experience/ExperienceList'
import { PAGES, HOME_PAGE } from '../src/utils/router'

const PublicWrapper = () => {
  const { push, query, isReady } = useRouter()

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
    certifications: (
      <div className={styles.certificationContainer}>
        <CertificationList />
      </div>
    ),
    experience: (
      <div className={styles.experienceContainer}>
        <ExperienceList />
      </div>
    )
  }

  useEffect(() => {
    if (!isReady) {
      return
    }
    if (PAGES.indexOf(query?.page) === -1 && query?.page) {
      push('/404')
      return
    }
    if (query?.page === HOME_PAGE || !query?.page) {
      window.history.replaceState(null, '', '/')
      setPage('personaldata')
      return
    }
    return setPage(query?.page)
  }, [query, isReady])

  return (
    <div className={styles.container}>
      <ScrollToTop />
      <NavBar page={page} setShow={setShow} />
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
