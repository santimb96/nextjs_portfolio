import React, { useEffect, useState } from 'react'
import ExperienceCard from './ExperienceCard'
import getApiData from '../../../utils/apiData'
import { sortByEndDate } from '../../../utils/utilities'
import WaterSpinner from '../../WaterSpinner/WaterSpinner'
import styles from './ExperienceList.module.css'

const ExperienceList = () => {
  const [experience, setExperience] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getApiData('experience', '/api/experienceAPI')
      .then((data) => {
        setExperience(sortByEndDate(data))
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])
  return (
    <div className={styles.experienceList}>
      {loading ? <WaterSpinner /> : experience?.map((doc) => <ExperienceCard key={doc?.business} props={doc} />)}
    </div>
  )
}

export default ExperienceList
