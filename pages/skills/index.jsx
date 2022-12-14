import React, { useEffect, useState } from 'react'
import getApiData from '../../src/utils/apiData'
import styles from './Skills.module.css'
import { saveData, checkAndReturnData } from '../../src/utils/localStorage'

const Skills = () => {
  const COLLECTION_NAME = 'skills'

  const [skills, setSkills] = useState({})
  const [error, setError] = useState(null)

  const getData = () => getApiData('/api/skillAPI')

  useEffect(() => {
    const checkData = checkAndReturnData(COLLECTION_NAME)

    if (!checkData) {
      getData()
        .then((data) => {
          saveData(COLLECTION_NAME, data)
          setSkills(data)
        })
        .catch((err) => setError(err))
    } else {
      setSkills(checkData)
    }
  }, [])
  return <div className={styles.prueba}>{error ? error?.message : skills?.frontend}</div>
}

export default Skills
