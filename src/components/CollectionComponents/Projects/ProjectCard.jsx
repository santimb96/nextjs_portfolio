import React, { useState, useContext } from 'react'
import Text from '../../Text/Text'
import Tag from '../../Tag/Tag'
import Button from '../../Button/Button'
import Separator from '../../Separator/Separator'
import { BackgroundContext } from '../../../../contexts/BackgroundContext'
import { formatDate } from '../../../utils/utilities'
import { AiOutlineClose, AiOutlinePlus, AiFillGithub } from 'react-icons/ai'
import { CgCodeSlash } from 'react-icons/cg'
import { GoBrowser } from 'react-icons/go'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from './ProjectCard.module.css'
const ProjectCard = ({ props }) => {
  const { business, deployment, description, endDate, imgName, name, repository, languages } = props

  const { dark } = useContext(BackgroundContext)
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={styles.card}>
        <LazyLoadImage className={styles.imgBackground} loading='lazy' src={`/img/${imgName}.webp`} />
        <div className={!show ? `${styles.title} ${dark && styles.darkColor}` : `${styles.displayNone}`}>
          <div className={styles.openOptions}>
            <h2 className={styles.name}>{name}</h2>
            <Button Icon={AiOutlinePlus} text='Info' handle={() => setShow(true)} />
          </div>
          <Separator />
        </div>
        <div className={show ? `${styles.content} ${dark && styles.darkColor}` : `${styles.displayNone}`}>
          <div className={styles.closeOptions}>
            <button className={`${styles.close} ${dark && styles.darkColor}`} onClick={() => setShow(false)}>
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
            {deployment !== '' && <Button Icon={GoBrowser} text={'Despliegue'} handle={() => window.open(deployment)} />}
            <Button Icon={AiFillGithub} text={'Repositorio'} handle={() => window.open(repository)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
