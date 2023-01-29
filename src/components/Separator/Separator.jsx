import React, { useContext } from 'react'
import { BackgroundContext } from '../../../contexts/BackgroundContext'
import styles from './Separator.module.css'
const Separator = () => {
  const { dark } = useContext(BackgroundContext)

  return <div className={`${styles.separator} ${dark && styles.darkColor}`}></div>
}

export default Separator
