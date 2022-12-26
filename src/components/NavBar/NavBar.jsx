import React, { useState } from 'react'
import NavButton from '../NavButton/NavButton'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCloseOutline } from 'react-icons/io5'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from './NavBar.module.css'

const NavBar = ({ page, setPage }) => {
  const COLLECTIONS = ['skills', 'experience', 'certification', 'personalData']
  const [open, setOpen] = useState(false)
  const match = useMediaQuery('(min-width: 768px)')
  const handleOpen = () => setOpen(!open)

  return (
    <>
      <div className={styles.menuButtonContainer}>
        <button className={styles.menuButton} onClick={handleOpen}>
          {open ? <IoCloseOutline className={styles.buttonType} /> : <RxHamburgerMenu className={styles.buttonType} />}
        </button>
      </div>
      <div className={open || match ? styles.navContainer : styles.displayNone}>
        {COLLECTIONS?.map((name, idx) => (
          <NavButton key={name} name={name?.toLowerCase()} duration={idx} setPage={setPage} isCurrentRoute={page === name?.toLowerCase()} />
        ))}
      </div>
    </>
  )
}

export default NavBar
