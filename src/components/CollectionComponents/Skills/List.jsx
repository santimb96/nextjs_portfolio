import React from 'react'
import Tag from '../../Tag/Tag'
import styles from './List.module.css'

const List = ({ collection }) => {
  return (
    <div className={styles.list}>
      {collection?.map((name) => (
        <Tag className={styles.tag} text={name} />
      ))}
    </div>
  )
}

export default List
