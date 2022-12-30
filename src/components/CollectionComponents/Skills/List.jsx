import React from 'react'
import { CgCodeSlash } from 'react-icons/cg'
import { GoFlame } from 'react-icons/go'
import ListElement from './ListElement'
import styles from './List.module.css'

const List = ({ listType, collection }) => {
  const getListElements = (listType) => collection?.[listType]?.map((name, idx) => <ListElement name={name} idx={idx} />)

  return (
    <div className={styles.listContent}>
      <div className={styles.listBody}>{getListElements(listType)}</div>
    </div>
  )
}

export default List
