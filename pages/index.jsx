import React, { useEffect, useState } from 'react'
import Footer from '../src/components/Footer/Footer'
import PresentationCard from '../src/components/PresentationCard/PresentationCard'
import getData from '../src/utils/apiData'
import styles from './PublicWrapper.module.css'

const PublicWrapper = () => {
  const [skills, setSkills] = useState({})
  const [experience, setExperience] = useState({})
  const [personalData, setPersonalData] = useState({})
  const [certifications, setCertifications] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      getData('skill', '/api/skillAPI'),
      getData('experience', '/api/experienceAPI'),
      getData('personalData', '/api/personalDataAPI'),
      getData('certification', '/api/certificationAPI')
    ])
      .then(([skillsResponse, experienceResponse, personalDataResponse, certificationsResponse]) => {
        setSkills(skillsResponse)
        setExperience(experienceResponse)
        setPersonalData(personalDataResponse)
        setCertifications(certificationsResponse)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <>
      <div className={styles.presentationCardContainer}>
        <PresentationCard
          name={personalData?.name}
          especialization={personalData?.especialization}
          openToWork={personalData?.openToWork}
          personalSkills={personalData?.personalSkills}
          description={personalData?.description}
        />
      </div>
      <Footer name={personalData?.name} socialMedia={personalData?.socialMedia} />
    </>
  )
}

export default PublicWrapper
