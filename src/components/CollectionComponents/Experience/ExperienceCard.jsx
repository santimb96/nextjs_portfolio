import React from 'react'
import { formatDate } from '../../../utils/utilities'
import styles from './ExperienceCard.module.css'
const ExperienceCard = ({ props }) => {
  const { city, workFunction, aptitudes, business, description, endDate, startDate } = props

  const start = formatDate(startDate)
  const end = formatDate(endDate)

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{workFunction}</h2>
      <div className={styles.businessAndYear}>
        <h3 className={styles.business}>{business}</h3>
        <h4 className={styles.year}>
          {start} - {end}
        </h4>
      </div>
      <h4 className={styles.city}>{city}</h4>
      <p className={styles.description}>{description}</p>
      <div className={styles.aptitudes}>
        {aptitudes?.map((aptitude) => (
          <p className={styles.aptitude} key={aptitude}>
            {aptitude}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
