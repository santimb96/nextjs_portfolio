import React from 'react'
import Tag from '../../Tag/Tag'
import styles from './List.module.css'

const List = ({ collection }) => {
  return (
    <div className={styles.list}>
      {collection?.map((name) => (
        <Tag key={name} text={name} />
      ))}
    </div>
  )
}

export default List
