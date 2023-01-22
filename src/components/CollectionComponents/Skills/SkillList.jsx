import React, { useEffect, useState } from 'react'
import getApiData from '../../../utils/apiData'
import WaterSpinner from '../../WaterSpinner/WaterSpinner'
import SkillCard from './SkillCard'
import styles from '../CollectionList/CollectionList.module.css'

const SkillList = () => {
  const [skills, setSkills] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const skillsList = Object.keys(skills).filter((key) => !key.includes('Description'))

  useEffect(() => {
    getApiData('skill', '/api/skillAPI')
      .then((data) => {
        setSkills(data)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {loading ? (
        <WaterSpinner />
      ) : (
        <div className={styles.collectionList}>
          {skillsList
            .sort((a, b) => (a > b ? 1 : -1))
            ?.map((listName, idx) => (
              <SkillCard
                key={listName}
                listName={listName}
                collectionList={skills[listName]}
                idx={idx}
                description={skills[`${listName}Description`]}
              />
            ))}
        </div>
      )}
    </>
  )
}

export default SkillList
