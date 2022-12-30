import React from 'react'
import styles from './ListElement.module.css'
const ListElement = ({ name, idx }) => {
  return (
    <>
      <p className={styles.listElement} key={idx}>
        {name}
      </p>
    </>
  )
}

export default ListElement
