import React, { useEffect, useState } from 'react'
import { AiFillTags } from 'react-icons/ai'
import { HiDownload } from 'react-icons/hi'
import Text from '../../Text/Text'
import Tag from '../../Tag/Tag'
import Button from '../../Button/Button'
import Typewriter from 'typewriter-effect'
import getApiData from '../../../utils/apiData'
import WaterSpinner from '../../WaterSpinner/WaterSpinner'
import { saveAs } from 'file-saver'
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
              <Text text={personalData?.description} />
            </div>
            <div className={styles.tags}>
              {personalData?.personalSkills?.map((skill) => (
                <div key={skill} className={styles.skillTag}>
                  <Tag Icon={AiFillTags} text={skill} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.displayButton}>
            <Button text={showDescription ? 'Ver menos' : 'Ver más'} handle={handleShowDescription} />
            {showDescription && <Button Icon={HiDownload} text={'CV'} handle={downloadFile} />}
          </div>
        </div>
      )}
    </>
  )
}

export default PresentationCard
