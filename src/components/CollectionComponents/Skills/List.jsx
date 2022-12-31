import React from 'react'
import styles from './List.module.css'

const List = ({ collection }) => {
  return (
    <div className={styles.list}>
      {collection?.map((name) => (
        <p key={name} className={styles.item}>
          {name}
        </p>
      ))}
    </div>
  )
}

export default List
