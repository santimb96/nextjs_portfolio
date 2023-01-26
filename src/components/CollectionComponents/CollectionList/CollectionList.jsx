import React, { useEffect, useState } from 'react'
import ExperienceCard from '../Experience/ExperienceCard'
import CertificationCard from '../Certifications/CertificationCard'
import ProjectCard from '../Projects/ProjectCard'
import getApiData from '../../../utils/apiData'
import { sortByEndDate } from '../../../utils/utilities'
import WaterSpinner from '../../WaterSpinner/WaterSpinner'
import styles from './CollectionList.module.css'

const COMPONENTS = {
  experience: ExperienceCard,
  certification: CertificationCard,
  project: ProjectCard
}

const CollectionList = ({ listType, sort }) => {
  const Children = COMPONENTS[listType]

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getApiData(listType, `/api/${listType}API`)
      .then((data) => {
        setData(sort ? sortByEndDate(data) : data)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [listType])
  return (
    <div className={styles.collectionList}>
      {loading ? <WaterSpinner /> : data?.map((doc, idx) => <Children key={listType + idx} props={doc} />)}
    </div>
  )
}

export default CollectionList
