import React, { useState } from 'react'
import Text from '../../Text/Text'
import Tag from '../../Tag/Tag'
import { formatDate } from '../../../utils/utilities'
import { AiOutlineClose, AiOutlinePlus, AiFillGithub } from 'react-icons/ai'
import { CgCodeSlash } from 'react-icons/cg'
import { GrDeploy } from 'react-icons/gr'
import styles from './ProjectCard.module.css'
const ProjectCard = ({ props }) => {
  const { business, deployment, description, endDate, imgName, name, repository, languages } = props

  const [show, setShow] = useState(false)

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imgBackground} style={{ background: `url("/img/${imgName}.webp") no-repeat center` }}></div>
        <div className={!show ? `${styles.title}` : `${styles.displayNone}`}>
          <div className={styles.openOptions}>
            <h2 className={styles.name}>{name}</h2>
            <button className={styles.moreInfo} onClick={() => setShow(true)}>
              <AiOutlinePlus />
              Info
            </button>
          </div>
          <div className={styles.separator}></div>
        </div>
        <div className={show ? `${styles.content}` : `${styles.displayNone}`}>
          <div className={styles.closeOptions}>
            <button className={styles.close} onClick={() => setShow(false)}>
              <AiOutlineClose />
            </button>
          </div>
          <div className={styles.section}>
            <h3 className={styles.business}>{business}</h3>
            <h4 className={styles.endDate}>{formatDate(endDate)}</h4>
          </div>
          <div className={styles.description}>
            <Text text={description} />
          </div>
          <div className={styles.languages}>
            <h3 className={styles.language}>Lenguajes: </h3>
            <div className={styles.list}>
              {languages?.map((lang) => (
                <Tag key={lang} Icon={CgCodeSlash} text={lang} />
              ))}
            </div>
          </div>
          <div className={styles.links}>
            {deployment !== '' && (
              <a className={styles.link} target='_blank' href={deployment}>
                <GrDeploy />
                Despliegue
              </a>
            )}
            <a className={styles.link} target='_blank' href={repository}>
              <AiFillGithub />
              Repositorio
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
