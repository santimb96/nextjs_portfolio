import React, { useEffect, useState, useRef } from 'react'
import { AiFillTags } from 'react-icons/ai'
import getData from '../../utils/apiData'
import styles from './PresentationCard.module.css'

const PresentationCard = ({ name, especialization, openToWork, personalSkills, description }) => {
  const [showDescription, setShowDescription] = useState(false)
  // const titleRef = useRef(null)
  // const descriptionRef = useRef(null)

  const handleShowDescription = () => setShowDescription(!showDescription)

  return (
    <>
      <div className={styles.card}>
        <div className={showDescription ? styles.displayNone : styles.titleBody}>
          <h1 className={styles.title}>{name}</h1>
          <h2 className={styles.subtitle}>{especialization}</h2>
        </div>
        <div className={showDescription ? styles.descriptionBody : styles.displayNone}>
          <p className={styles.description}>{description}</p>
          <div className={styles.tags}>
            {personalSkills?.map((skill) => (
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
    </>
  )
}

export default PresentationCard
