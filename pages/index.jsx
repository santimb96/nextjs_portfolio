import React, { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import CollectionList from '../src/components/CollectionComponents/CollectionList/CollectionList'
import Footer from '../src/components/Footer/Footer'
import NavBar from '../src/components/NavBar/NavBar'
import PresentationCard from '../src/components/CollectionComponents/PresentationCard/PresentationCard'
import styles from './PublicWrapper.module.css'
import SkillList from '../src/components/CollectionComponents/Skills/SkillList'
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop'
import { BackgroundContext } from '../contexts/BackgroundContext'
import { PAGES, HOME_PAGE } from '../src/utils/constants'

const PublicWrapper = ({ setIsDark, isDark }) => {
  const { push, query, isReady } = useRouter()

  const { dark } = useContext(BackgroundContext)
  const [page, setPage] = useState('personaldata')
  const [show, setShow] = useState(false)
  const [footerData, setFooterData] = useState({})

  const PAGE_COMPONENT = {
    personaldata: <PresentationCard setFooterData={setFooterData} />,
    skills: <SkillList />,
    certifications: <CollectionList listType={'certification'} sort={true} />,
    experience: <CollectionList listType={'experience'} sort={true} />,
    projects: <CollectionList listType={'project'} sort={true} />
  }

  useEffect(() => {
    if (isDark !== dark) {
      setIsDark(dark)
      return
    }
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
  }, [query, isReady, dark])

  return (
    <div className={styles.container}>
      <ScrollToTop dark={dark} />
      <NavBar page={page} setShow={setShow} />
      {show && (
        <>
          {page === 'personaldata' ? (
            <div className={`${styles.presentationCardContainer} ${dark && styles.darkColor}`}>{PAGE_COMPONENT[page]}</div>
          ) : (
            <div className={`${styles.commonContainer} ${dark && styles.darkColor}`}>{PAGE_COMPONENT[page]}</div>
          )}
          <div className={`${styles.footerCard} ${dark && styles.darkColor}`}>
            <Footer name={footerData?.name} socialMedia={footerData?.socialMedia} />
          </div>
        </>
      )}
    </div>
  )
}

export default PublicWrapper
