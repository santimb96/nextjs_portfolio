import React from 'react'
import { FaCertificate } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { BiLink } from 'react-icons/bi'
import styles from './CertificationCard.module.css'

const CertificationCard = ({ props, idx }) => {
  const { certification, course, degree, description, endDate, grade, institution } = props
  const data = [
    { field: institution, fieldName: 'Entidad' },
    { field: grade, fieldName: 'Calificación' },
    { field: endDate, fieldName: 'Año', field: certification, fieldName: 'Certificación', link: true }
  ]

  const field = (fieldName, field, link) => (
    <div key={fieldName} className={styles.fields}>
      {link ? (
        <a href={field} target='_blank'>
          Certificado <BiLink />
        </a>
      ) : (
        <>
          <h3>{fieldName}</h3>
          <p>{field}</p>
        </>
      )}
    </div>
  )

  return (
    <div className={styles.certificationCard}>
      <div className={styles.body}>
        <div className={styles.degree}>
          <h2>{degree}</h2>
        </div>
        {data?.map((elem) => field(elem.fieldName, elem.field, elem.link))}
      </div>
      <div className={styles.extendedInformation}>
        {course ? <FaCertificate className={styles.icon} /> : <TbCertificate className={styles.icon} />}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default CertificationCard
