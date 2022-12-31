import React from 'react'
import { SKILLS_DIC } from '../../../utils/translationDictionary'
import { GoFlame } from 'react-icons/go'
import { CgCodeSlash } from 'react-icons/cg'
import List from './List'
import styles from './SkillCard.module.css'

const SkillCard = ({ listName, collectionList }) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.title}>
        <h3>{SKILLS_DIC?.en[listName]}</h3>
      </div>
      <div className={styles.icons}>
        <GoFlame />
        <CgCodeSlash />
      </div>
      <div className={styles.lists}>
        <List collection={collectionList?.preference} />
        <List collection={collectionList?.other} />
      </div>
    </div>
  )
}

export default SkillCard
