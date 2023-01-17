import React from 'react'
import styles from './Tag.module.css'

const Tag = ({ Icon = null, text }) => {
  return (
    <div className={styles.tag} key={text}>
      {Icon !== null && <Icon />}
      <p>{text}</p>
    </div>
  )
}

export default Tag
