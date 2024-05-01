'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import HeaderLogo from '/public/headerLogo.svg'
import Link from 'next/link'
import SearchBar from '@/templates/SearchBar'

function Header() {
  //Menü
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  //Scroll
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  //Active
  const currentRoute = usePathname()

  return (
    <>
      <div id="header" className={scroll ? 'scroll' : ''}>
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
            {/*header_logo*/}

            <ul className={`header_menu ${isOpen ? 'open' : ''}`}>
              <li>
                <Link className={currentRoute === '/' ? 'active' : ''} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === '/about' ? 'active' : ''}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link className={currentRoute === '#' ? 'active' : ''} href="#">
                  Pages
                </Link>
                <ul className="dropdown">
                  <li>
                    <Link
                      className={currentRoute === '/teams' ? 'active' : ''}
                      href="/teams"
                    >
                      Teams
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={currentRoute === '/faqs' ? 'active' : ''}
                      href="/faqs"
                    >
                      Faqs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={currentRoute === '/pricings' ? 'active' : ''}
                      href="/pricings"
                    >
                      Pricings
                    </Link>
                  </li>
                </ul>
                {/*dropdown*/}
              </li>
              <li>
                <Link
                  className={currentRoute === '/services' ? 'active' : ''}
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === '/projects' ? 'active' : ''}
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === '/blog' ? 'active' : ''}
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === '/contact' ? 'active' : ''}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/*header_menu*/}

            <SearchBar />

            <div
              className={`header_hamburger ${isOpen ? 'open' : ''}`}
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-bars bars"></i>
              <i className="fa-solid fa-xmark times"></i>
            </div>
            {/*header_hamburger*/}
          </div>
          {/*header*/}
        </div>
        {/*container*/}
      </div>
      {/*header#*/}
    </>
  )
}

export default Header
