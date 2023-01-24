import React from 'react'
import Text from '../../Text/Text'
import { formatDate } from '../../../utils/utilities'
import styles from './ProjectCard.module.css'
const ProjectCard = ({ props }) => {
  const { business, deployment, description, endDate, imgName, name, repository } = props

  return (
    <>
      <div className={styles.imgBackground} style={{ background: `url("/img/${imgName}.png") no-repeat center` }}></div>
      <div className={styles.card}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.separator}></div>
        <h3 className={styles.business}>{business}</h3>
        <h4 className={styles.endDate}>{formatDate(endDate)}</h4>
        <div className={styles.description}>
          <Text text={description} />
        </div>
        <div className={styles.links}>
          {deployment !== '' && (
            <a className={styles.link} target='_blank' href={deployment}>
              Despliegue
            </a>
          )}
          <a className={styles.link} target='_blank' href={repository}>
            Repositorio
          </a>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
