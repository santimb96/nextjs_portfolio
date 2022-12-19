import React, { useEffect, useState } from 'react'
import getData from '../../utils/apiData'
import styles from './PresentationCard.module.css'

const PresentationCard = ({ name, especialization, openToWork, personalSkills }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.title}>
          <h1>{name}</h1>
          <h2>{especialization}</h2>
        </div>
      </div>
    </>
  )
}

export default PresentationCard
