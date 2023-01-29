import React, { useContext } from 'react'
import { BackgroundContext } from '../../../contexts/BackgroundContext'
import styles from './WaterSpinner.module.css'

const WaterSpinner = () => {
  const { dark } = useContext(BackgroundContext)
  return (
    <div className={styles.lsdRipple}>
      <div className={`${dark && styles.darkColor}`}></div>
      <div className={`${dark && styles.darkColor}`}></div>
    </div>
  )
}

export default WaterSpinner
