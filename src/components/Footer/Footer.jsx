import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import styles from './Footer.module.css'

const Footer = ({ name, socialMedia }) => {
  const ICONS = {
    github: <BsGithub />,
    linkedin: <BsLinkedin />,
    mail: <MdMail />
  }

  return (
    <div className={styles.footerCard}>
      <div className={styles.title}>
        <p>{name}</p>
        <p>{2022}</p>
      </div>
      <div className={styles.socialMedia}>
        {socialMedia?.map((platform) => (
          <a className={styles.socialLink} key={platform?.name} target='_blank' href={platform?.link}>
            {ICONS[(platform?.name).toLowerCase()]}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer
