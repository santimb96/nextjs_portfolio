import React from 'react'
import { SKILLS_DIC } from '../../../utils/translationDictionary'
import { GoFlame } from 'react-icons/go'
import { CgCodeSlash } from 'react-icons/cg'
import Text from '../../Text/Text'
import List from './List'
import styles from './SkillCard.module.css'
const IMAGES = {
  backend: 'express',
  frontend: 'react',
  database: 'mongodb',
  utility: 'github'
}

const SkillCard = ({ listName, collectionList, description }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imgBackground} style={{ background: `url("/img/${IMAGES[listName]}.png") no-repeat center` }}></div>
        <div className={styles.skillCard}>
          <div className={styles.title}>
            <h3>{SKILLS_DIC?.en[listName]}</h3>
          </div>
          <div className={styles.icons}>
            <div className={styles.separator}></div>
            <h4 className={styles.listTitle}>{'Preferidos'}</h4>
            <GoFlame />
            <h4 className={styles.listTitle}>{'Y también...'}</h4>
            <CgCodeSlash />
          </div>
          <div className={styles.lists}>
            <div className={styles.description}>
              <Text text={description} />
            </div>
            <List collection={collectionList?.preference} />
            <List collection={collectionList?.other} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillCard
