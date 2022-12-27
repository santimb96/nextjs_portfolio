import React, { useEffect, useState } from 'react'
import getApiData from '../../../utils/apiData'
import WaterSpinner from '../../WaterSpinner/WaterSpinner'
import SkillCard from './SkillCard'
import styles from './SkillList.module.css'

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
        <div className={styles.skillContainer}>
          {skillsList
            .sort((a, b) => (a > b ? 1 : -1))
            ?.map((listName, idx) => (
              <SkillCard
                key={listName}
                listName={listName}
                list={skills[listName]}
                description={skills[`${listName}Description`]}
                idx={idx}
              />
            ))}
        </div>
      )}
    </>
  )
}

export default SkillList
