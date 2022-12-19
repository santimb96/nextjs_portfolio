import React from 'react'
import styles from './Footer.module.css'

const Footer = ({ name, socialMedia }) => {
  return (
    <div className={styles.footerCard}>
      <div className={styles.title}>
        <p>{name}</p>
        <p>{2022}</p>
      </div>
      <div className={styles.socialMedia}>
        {socialMedia?.map((platform) => (
          <p>{platform?.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Footer
