import React, { useEffect, useState } from 'react'
import getData from '../../src/utils/apiData'
import styles from './Skills.module.css'

const Skills = () => {
  const COLLECTION_NAME = 'skills'
  const ENDPOINT = '/api/skillAPI'

  const [skills, setSkills] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const data = () => getData(COLLECTION_NAME, ENDPOINT)

  useEffect(() => {
    if (data instanceof Error) {
      setError(data)
    } else {
      setSkills(data)
    }
    setLoading(false)
  }, [])

  return <div className={styles.prueba}>{loading ? 'Loading...' : error ? error?.message : skills?.frontend}</div>
}

export default Skills
