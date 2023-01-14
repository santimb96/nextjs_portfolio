import React, { useEffect, useState } from 'react'
import { AiFillTags } from 'react-icons/ai'
import { HiDownload } from 'react-icons/hi'
import Typewriter from 'typewriter-effect'
import getApiData from '../../../utils/apiData'
import WaterSpinner from '../../WaterSpinner/WaterSpinner'
import { saveAs } from 'file-saver'
import styles from './PresentationCard.module.css'

export const Description = ({ data }) => {
  const fixText = data?.description.split('. ')
  return fixText.map((sentence, idx) => (
    <p key={idx}>
      {sentence}
      {sentence.includes('!') && !fixText[idx + 1] ? '' : '.'}
    </p>
  ))
}

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

  const downloadFile = () => {
    saveAs('/assets/martinezSantiago.pdf', 'martinez_santiago_cv.pdf')
  }

  return (
    <>
      {loading ? (
        <WaterSpinner />
      ) : (
        <div className={styles.card}>
          <div className={showDescription ? styles.displayNone : styles.titleBody}>
            <h1 className={styles.title}>{personalData?.name}</h1>
            <h2 className={styles.subtitle}>
              <Typewriter
                options={{
                  strings: [personalData?.especialization],
                  autoStart: true,
                  loop: true
                }}
              />
            </h2>
          </div>
          <div className={showDescription ? styles.descriptionBody : styles.displayNone}>
            <div className={styles.description}>
              <Description data={personalData} />
            </div>
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
            <button className={styles.personalDataButton} onClick={handleShowDescription}>
              Ver {showDescription ? 'menos' : 'más'}
            </button>
            {showDescription && (
              <button className={styles.personalDataButton} onClick={downloadFile}>
                CV
                <HiDownload />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default PresentationCard
