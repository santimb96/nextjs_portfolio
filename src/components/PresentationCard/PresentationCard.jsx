import React, { useEffect, useState } from 'react'
import getData from '../../utils/apiData'
import styles from './PresentationCard.module.css'

const PresentationCard = () => {
  const COLLECTION_NAME = 'personalData'
  const ENDPOINT = '/api/skillAPI'

  const [personalData, setPersonalData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const data = () => getData(COLLECTION_NAME, ENDPOINT)

  useEffect(() => {
    if (data instanceof Error) {
      setError(data)
    } else {
      setPersonalData(data)
    }
    setLoading(false)
  }, [])
  return <div>{personalData.name}</div>
}

export default PresentationCard
