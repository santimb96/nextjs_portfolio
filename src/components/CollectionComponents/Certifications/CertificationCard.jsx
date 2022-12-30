import React from 'react'
import { FaCertificate } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'
import styles from './CertificationCard.module.css'

const CertificationCard = ({ props, idx }) => {
  const { certification, course, degree, description, endDate, grade, institution } = props

  return (
    <div className={styles.certificationCard}>
      <div className={styles.body}>
        <h1 className={styles.degree}>{degree}</h1>
        <h2 className={styles.institution}>Certificador: {institution}</h2>
        <p className={styles.grade}>Promoción: {grade}</p>
        <p className={styles.endDate}>Finalización: {endDate}</p>
      </div>
      <div className={styles.extendedInformation}>
        {course ? <FaCertificate className={styles.icon} /> : <FaUserGraduate className={styles.icon} />}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default CertificationCard
