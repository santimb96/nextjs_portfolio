import React, { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import NavButton from '../NavButton/NavButton'
import ChangeBackgroundColor from '../ChangeBackgroundColor/ChangeBackgroundColor'
import Image from 'next/image'
import { BackgroundContext } from '../../../contexts/BackgroundContext'
import { PAGES } from '../../utils/constants'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCloseOutline } from 'react-icons/io5'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from './NavBar.module.css'

const NavBar = ({ page, setShow }) => {
  const { push } = useRouter()
  const { dark } = useContext(BackgroundContext)
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
    setOpen(false)
    setShow(true)
  }, [page])

  return (
    <>
      <div className={`${styles.menuButtonContainer} ${dark && styles.backgroundDark}`}>
        <ChangeBackgroundColor />
        <button className={`${styles.menuButton} ${dark && styles.darkColor}`} onClick={handleOpen}>
          {open ? <IoCloseOutline className={styles.buttonType} /> : <RxHamburgerMenu className={styles.buttonType} />}
        </button>
      </div>
      <nav className={open || MATCH ? `${styles.navContainer} ${dark && styles.backgroundDark}` : styles.displayNone}>
        {MATCH && <Image onClick={() => push('/')} src='/img/logo.png' alt='logo' width={150} height={75} style={{ cursor: 'pointer' }} />}
        {PAGES?.map((name, idx) => (
          <NavButton key={name} dark={dark} name={name?.toLowerCase()} duration={idx} isCurrentRoute={page === name?.toLowerCase()} />
        ))}
        {MATCH && <ChangeBackgroundColor />}
      </nav>
    </>
  )
}

export default NavBar
