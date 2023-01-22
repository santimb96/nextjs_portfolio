import React from 'react'
import { formatDate } from '../../../utils/utilities'
import Text from '../../Text/Text'
import Tag from '../../Tag/Tag'
import { BsCheck } from 'react-icons/bs'
import styles from './ExperienceCard.module.css'
const ExperienceCard = ({ props }) => {
  const { city, workFunction, aptitudes, business, description, endDate, startDate } = props

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{workFunction}</h2>
      <div className={styles.separator}></div>
      <div className={styles.businessInformation}>
        <h3 className={styles.business}>{business}</h3>
        <h4 className={styles.city}>{city}</h4>
      </div>
      <div className={styles.years}>
        <p>{formatDate(startDate)}</p>
        <p>{formatDate(endDate)}</p>
      </div>
      <p className={styles.description}>
        <Text text={description} />
      </p>
      <h3 className={styles.aptitudesTitle}>Aptitudes:</h3>
      <div className={styles.aptitudes}>
        {aptitudes?.map((aptitude) => (
          <Tag key={aptitude} Icon={BsCheck} text={aptitude} />
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
