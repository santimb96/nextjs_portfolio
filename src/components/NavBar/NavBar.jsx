import React, { useEffect, useState } from 'react'
import NavButton from '../NavButton/NavButton'
import { PAGES } from '../../utils/router'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCloseOutline } from 'react-icons/io5'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from './NavBar.module.css'

const NavBar = ({ page, setShow }) => {
  const [open, setOpen] = useState(false)
  const match = useMediaQuery('(min-width: 768px)')
  const handleOpen = () => {
    if (open) {
      setOpen(false)
      setShow(true)
    } else {
      setOpen(true)
      setShow(false)
    }
  }

  useEffect(() => {
    setOpen(false)
    setShow(true)
  }, [page])

  return (
    <>
      <div className={styles.menuButtonContainer}>
        <button className={styles.menuButton} onClick={handleOpen}>
          {open ? <IoCloseOutline className={styles.buttonType} /> : <RxHamburgerMenu className={styles.buttonType} />}
        </button>
      </div>
      <nav className={open || match ? styles.navContainer : styles.displayNone}>
        {PAGES?.map((name, idx) => (
          <NavButton key={name} name={name?.toLowerCase()} duration={idx} isCurrentRoute={page === name?.toLowerCase()} />
        ))}
      </nav>
    </>
  )
}

export default NavBar
