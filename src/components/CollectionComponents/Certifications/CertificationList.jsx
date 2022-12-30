import React, { useEffect, useState } from 'react'
import getApiData from '../../../utils/apiData'
import CertificationCard from './CertificationCard'
import WaterSpinner from '../../WaterSpinner/WaterSpinner'
import styles from './CertificationList.module.css'

const CertificationList = () => {
  const [certifications, setCertifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getApiData('certification', '/api/certificationAPI')
      .then((data) => {
        setCertifications(data.sort((a, b) => (a?.endDate < b.endDate ? 1 : -1)))
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])
  return (
    <>
      {loading ? (
        <WaterSpinner />
      ) : (
        <div className={styles.certificationList}>
          {certifications?.map((certification, idx) => (
            <CertificationCard props={certification} />
          ))}
        </div>
      )}
    </>
  )
}

export default CertificationList
