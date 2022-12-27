import React from 'react'
import { SKILLS_DIC } from '../../../utils/translationDictionary'
import styles from './SkillCard.module.css'

const SkillCard = ({ listName, list, description }) => {
  const LIST_IMAGE = {
    frontend: 'react',
    backend: 'express',
    database: 'mongodb',
    versionControl: 'github'
  }

  return (
    <>
      <div className={styles.skillCard}>
        <div className={styles.bgImage} style={{ background: `url("/img/${LIST_IMAGE[listName]}.png") no-repeat center` }}></div>
        <div className={styles.body}>
          <h1 className={styles.title}>{SKILLS_DIC?.en[listName]}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  )
}

export default SkillCard
