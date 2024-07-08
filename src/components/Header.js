'use client'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import HeaderLogo from '/public/headerLogo.svg'
import Link from 'next/link'
import SearchBar from '@/templates/SearchBar'
import { motion } from 'framer-motion'

function Header() {
  // Menü
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  function closeMenu() {
    setIsOpen(false)
  }

  // Scroll
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Active
  const currentRoute = usePathname()

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="header"
        className={scroll ? 'scroll' : ''}
      >
        <div className="container">
          <div className="header">
            <div className="header_logo">
              <Link href="/">
                <Image
                  className="img_fluid"
                  src={HeaderLogo}
                  alt="Header Logo"
                />
              </Link>
            </div>
            {/* header_logo */}

            <ul ref={menuRef} className={`header_menu ${isOpen ? 'open' : ''}`}>
              <li>
                <Link
                  className={currentRoute === '/' ? 'active' : ''}
                  href="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === '/about' ? 'active' : ''}
                  href="/about"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === '#' ? 'active' : ''}
                  href="#"
                  onClick={closeMenu}
                >
                  Pages
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link
                      className={currentRoute === '/teams' ? 'active' : ''}
                      href="/teams"
                      onClick={closeMenu}
                    >
                      Teams
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={currentRoute === '/faqs' ? 'active' : ''}
                      href="/faqs"
                      onClick={closeMenu}
                    >
                      Faqs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={currentRoute === '/pricings' ? 'active' : ''}
                      href="/pricings"
                      onClick={closeMenu}
                    >
                      Pricings
                    </Link>
                  </li>
                </ul>
                {/* dropdown */}
              </li>
              <li>
                <Link
                  className={currentRoute === '/services' ? 'active' : ''}
                  href="/services"
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === '/projects' ? 'active' : ''}
                  href="/projects"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === '/blog' ? 'active' : ''}
                  href="/blog"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === '/contact' ? 'active' : ''}
                  href="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/* header_menu */}

            <SearchBar />

            <div
              className={`header_hamburger ${isOpen ? 'open' : ''}`}
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-bars bars"></i>
              <i className="fa-solid fa-xmark times"></i>
            </div>
            {/* header_hamburger */}
          </div>
          {/* header */}
        </div>
        {/* container */}
      </motion.div>
      {/* header# */}
    </>
  )
}

export default Header
