import React from 'react'
import { SKILLS_DIC } from '../../../utils/translationDictionary'
import { GoFlame } from 'react-icons/go'
import { CgCodeSlash } from 'react-icons/cg'
import List from './List'
import styles from './SkillCard.module.css'

const SkillCard = ({ listName, collectionList }) => {
  return (
    <>
      <div className={styles.skillCard}>
        <div className={styles.body}>
          <h2 className={styles.title}>{SKILLS_DIC?.en[listName]}</h2>
          <div className={styles.icons}>
            <GoFlame />
            <CgCodeSlash />
          </div>
          <div className={styles.lists}>
            <List listType='preference' collection={collectionList} />
            <List listType='other' collection={collectionList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillCard
