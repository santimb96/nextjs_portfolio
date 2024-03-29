import React from 'react'
import { useRouter } from 'next/router'
import styles from './NavButton.module.css'
import { COLLECTIONS_DIC } from '../../utils/translationDictionary'

const NavButton = ({ dark, name, duration, isCurrentRoute }) => {
  const { push } = useRouter()
  return (
    <>
      <button
        onClick={() => push(`?page=${name}`)}
        className={`${styles.navButton} ${dark && styles.darkColor} ${isCurrentRoute ? styles.currentRoute : ''}`}
        style={{ animationDelay: duration / 10 + 's' }}
      >
        {COLLECTIONS_DIC?.en[name]}
      </button>
    </>
  )
}

export default NavButton
