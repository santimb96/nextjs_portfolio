import React, { useEffect, useState } from 'react'
import { AiFillTags } from 'react-icons/ai'
import getApiData from '../../utils/apiData'
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

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.card}>
          <div className={showDescription ? styles.displayNone : styles.titleBody}>
            <h1 className={styles.title}>{personalData?.name}</h1>
            <h2 className={styles.subtitle}>{personalData?.especialization}</h2>
          </div>
          <div className={showDescription ? styles.descriptionBody : styles.displayNone}>
            <p className={styles.description}>{personalData?.description}</p>
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
              Ver {showDescription ? 'menos' : 'más'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default PresentationCard
