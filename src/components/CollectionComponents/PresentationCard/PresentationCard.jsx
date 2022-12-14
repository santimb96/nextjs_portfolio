import React, { useEffect, useState } from 'react'
import { AiFillTags } from 'react-icons/ai'
import getApiData from '../../../utils/apiData'
import WaterSpinner from '../../WaterSpinner/WaterSpinner'
import styles from './PresentationCard.module.css'

const PresentationCard = ({ setFooterData }) => {
  const [showDescription, setShowDescription] = useState(false)
  const [personalData, setPersonalData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const handleShowDescription = () => setShowDescription(!showDescription)

  useEffect(() => {
    getApiData('personalData', '/api/personalDataAPI')
      .then((data) => {
        setPersonalData(data)
        setFooterData({ name: data?.name, socialMedia: data?.socialMedia })
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  const splitByPoint = () => {
    const fixText = personalData?.description.split('. ')
    return fixText.map((sentence) => <p key={sentence}>{sentence}.</p>)
  }

  return (
    <>
      {loading ? (
        <WaterSpinner />
      ) : (
        <div className={styles.card}>
          <div className={showDescription ? styles.displayNone : styles.titleBody}>
            <h1 className={styles.title}>{personalData?.name}</h1>
            <h2 className={styles.subtitle}>{personalData?.especialization}</h2>
          </div>
          <div className={showDescription ? styles.descriptionBody : styles.displayNone}>
            <div className={styles.description}>{splitByPoint()}</div>
            <div className={styles.tags}>
              {personalData?.personalSkills?.map((skill) => (
                <div key={skill} className={styles.skillTag}>
                  <AiFillTags />
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.displayButton}>
            <button className={styles.seeMoreOrLess} onClick={handleShowDescription}>
              Ver {showDescription ? 'menos' : 'm??s'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default PresentationCard
