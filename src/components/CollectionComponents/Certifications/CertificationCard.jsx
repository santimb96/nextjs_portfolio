import React from 'react'
import { FaCertificate } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { BiLink } from 'react-icons/bi'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from './CertificationCard.module.css'

export const Field = ({ fieldName, field, link, imgName }) => {
  const MATCH = useMediaQuery('(min-width: 768px)')
  return (
    <div key={fieldName} className={styles.fields}>
      {link ? (
        MATCH ? (
          <>
            <h4>{fieldName}</h4>
            <a href={field} target='_blank'>
              <Image className={styles.img} src={`/img/${imgName}.png`} alt={imgName} width={50} height={50} />
              <BiLink />
            </a>
          </>
        ) : (
          <a href={field} target='_blank'>
            Certificado <BiLink />
          </a>
        )
      ) : (
        <>
          <h4>{fieldName}</h4>
          <p>{field}</p>
        </>
      )}
    </div>
  )
}

const CertificationCard = ({ props, idx }) => {
  const { certification, course, degree, description, endDate, grade, institution, imgName } = props

  const DATA = [
    { field: institution, fieldName: 'Certifica' },
    { field: grade, fieldName: 'Titulación' },
    { field: endDate, fieldName: 'Año', field: certification, fieldName: 'Certificado', link: true }
  ]

  return (
    <div className={styles.certificationCard}>
      <div className={styles.body}>
        <div className={styles.degree}>
          <h3>{degree}</h3>
        </div>
        <div className={styles.separator}></div>
        {DATA?.map((elem) => (
          <Field fieldName={elem?.fieldName} field={elem?.field} link={elem?.link} imgName={imgName} />
        ))}
      </div>
      <div className={styles.extendedInformation}>
        {course ? <FaCertificate className={styles.icon} /> : <TbCertificate className={styles.icon} />}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default CertificationCard
