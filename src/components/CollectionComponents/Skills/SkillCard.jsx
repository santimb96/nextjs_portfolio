import React, { useContext } from 'react'
import { SKILLS_DIC } from '../../../utils/translationDictionary'
import { GoFlame } from 'react-icons/go'
import { CgCodeSlash } from 'react-icons/cg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useMediaQuery } from '@mui/material'
import { BackgroundContext } from '../../../../contexts/BackgroundContext'
import Text from '../../Text/Text'
import Separator from '../../Separator/Separator'
import List from './List'
import styles from './SkillCard.module.css'

const IMAGES = {
  backend: 'express',
  frontend: 'react',
  database: 'mongodb',
  utility: 'github'
}

const SkillCard = ({ listName, collectionList, description }) => {
  const MATCH = useMediaQuery('(min-width: 768px)')
  const { dark } = useContext(BackgroundContext)
  return (
    <>
      <div className={styles.card}>
        <LazyLoadImage className={styles.imgBackground} src={`/img/${IMAGES[listName]}.webp`} />
        <div className={`${styles.skillCard} ${dark && MATCH && styles.darkColor}`}>
          <div className={styles.title}>
            <h3>{SKILLS_DIC?.en[listName]}</h3>
          </div>
          <div className={styles.icons}>
            <Separator />
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
