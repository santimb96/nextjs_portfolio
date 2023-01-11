import React from 'react'
import { FaCertificate } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { BiLink } from 'react-icons/bi'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from './CertificationCard.module.css'

const CertificationCard = ({ props, idx }) => {
  const { certification, course, degree, description, endDate, grade, institution, imgName } = props
  const MATCH = useMediaQuery('(min-width: 768px)')
  const DATA = [
    { field: institution, fieldName: 'Certifica' },
    { field: grade, fieldName: 'Titulación' },
    { field: endDate, fieldName: 'Año', field: certification, fieldName: 'Certificado', link: true }
  ]

  const field = (fieldName, field, link) => (
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

  return (
    <div className={styles.certificationCard}>
      <div className={styles.body}>
        <div className={styles.degree}>
          <h3>{degree}</h3>
        </div>
        <div className={styles.separator}></div>
        {DATA?.map((elem) => field(elem.fieldName, elem.field, elem.link))}
      </div>
      <div className={styles.extendedInformation}>
        {course ? <FaCertificate className={styles.icon} /> : <TbCertificate className={styles.icon} />}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default CertificationCard
