import React, { useEffect, useState } from 'react'
import getApiData from '../../utils/apiData'
import { BsGithub, BsLinkedin, BsSuitHeartFill } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import styles from './Footer.module.css'
import WaterSpinner from '../WaterSpinner/WaterSpinner'

const Footer = () => {
  const [footerData, setFooterData] = useState({})
  const [loading, setLoading] = useState(true)
  const ICONS = {
    github: <BsGithub />,
    linkedin: <BsLinkedin />,
    mail: <MdMail />
  }

  useEffect(() => {
    getApiData('personalData', '/api/personalDataAPI')
      .then((data) => {
        setFooterData({ name: data?.name, socialMedia: data?.socialMedia })
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {loading ? (
        <WaterSpinner />
      ) : (
        <>
          <div className={styles.text}>
            <p className={styles.textContent}>
              Con mucho <BsSuitHeartFill className={styles.iconGap} /> {footerData?.name} - 2022
            </p>
          </div>
          <div className={styles.socialMedia}>
            {footerData?.socialMedia?.map((platform) => (
              <a className={styles.socialLink} key={platform?.name} target='_blank' href={platform?.link}>
                {ICONS[(platform?.name).toLowerCase()]}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default Footer
