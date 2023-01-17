import React from 'react'
import { formatDate } from '../../../utils/utilities'
import Tag from '../../Tag/Tag'
import { BsCheck } from 'react-icons/bs'
import styles from './ExperienceCard.module.css'
const ExperienceCard = ({ props }) => {
  const { city, workFunction, aptitudes, business, description, endDate, startDate } = props

  const start = formatDate(startDate)
  const end = formatDate(endDate)

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{workFunction}</h2>
      <div className={styles.separator}></div>
      <div className={styles.businessInformation}>
        <h3 className={styles.business}>{business}</h3>
        <h4 className={styles.city}>{city}</h4>
      </div>
      <div className={styles.years}>
        <p>{start}</p>
        <p>{end}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <h3 className={styles.aptitudesTitle}>Aptitudes:</h3>
      <div className={styles.aptitudes}>
        {aptitudes?.map((aptitude) => (
          <Tag Icon={BsCheck} text={aptitude} />
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
