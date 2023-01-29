import React, { useEffect, useState, useRef, useContext } from 'react'
import NavButton from '../NavButton/NavButton'
import ChangeBackgroundColor from '../ChangeBackgroundColor/ChangeBackgroundColor'
import { BackgroundContext } from '../../../contexts/BackgroundContext'
import { PAGES } from '../../utils/router'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCloseOutline } from 'react-icons/io5'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from './NavBar.module.css'

const NavBar = ({ page, setShow }) => {
  const { dark } = useContext(BackgroundContext)
  // const navRef = useRef(0)
  const [open, setOpen] = useState(false)
  const MATCH = useMediaQuery('(min-width: 768px)')

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
    // const navElem = navRef.current
    // window.addEventListener('scroll', () => {
    //   if (window.scrollY > 50) {
    //     navElem.classList.add(styles.backgroundOpacity)
    //   } else {
    //     navElem.classList.remove(styles.backgroundOpacity)
    //   }
    // })
    setOpen(false)
    setShow(true)
  }, [page])

  return (
    <>
      <div className={`${styles.menuButtonContainer} ${!dark && styles.backgroundClear}`}>
        <ChangeBackgroundColor />
        <button className={`${styles.menuButton} ${!dark && styles.clearColor}`} onClick={handleOpen}>
          {open ? <IoCloseOutline className={styles.buttonType} /> : <RxHamburgerMenu className={styles.buttonType} />}
        </button>
      </div>
      <nav className={open || MATCH ? `${styles.navContainer} ${!dark && styles.backgroundClear}` : styles.displayNone}>
        {MATCH && <ChangeBackgroundColor />}
        {PAGES?.map((name, idx) => (
          <NavButton key={name} dark={dark} name={name?.toLowerCase()} duration={idx} isCurrentRoute={page === name?.toLowerCase()} />
        ))}
      </nav>
    </>
  )
}

export default NavBar
