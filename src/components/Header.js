"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HeaderLogo from "/public/headerLogo.svg";
import Link from "next/link";
import SearchBar from "@/templates/SearchBar";

function Header() {
  // Menü
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  // Scroll
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menü dışına tıklanıldığında menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Active
  const currentRoute = usePathname();

  return (
    <>
      <div id="header" className={scroll ? "scroll" : ""}>
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

            <ul ref={menuRef} className={`header_menu ${isOpen ? "open" : ""}`}>
              <li onClick={closeMenu}>
                <Link className={currentRoute === "/" ? "active" : ""} href="/">
                  Home
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link
                  className={currentRoute === "/about" ? "active" : ""}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link className={currentRoute === "#" ? "active" : ""} href="#">
                  Pages
                </Link>
                <ul className="dropdown">
                  <li onClick={closeMenu}>
                    <Link
                      className={currentRoute === "/teams" ? "active" : ""}
                      href="/teams"
                    >
                      Teams
                    </Link>
                  </li>
                  <li onClick={closeMenu}>
                    <Link
                      className={currentRoute === "/faqs" ? "active" : ""}
                      href="/faqs"
                    >
                      Faqs
                    </Link>
                  </li>
                  <li onClick={closeMenu}>
                    <Link
                      className={currentRoute === "/pricings" ? "active" : ""}
                      href="/pricings"
                    >
                      Pricings
                    </Link>
                  </li>
                </ul>
                {/* dropdown */}
              </li>
              <li onClick={closeMenu}>
                <Link
                  className={currentRoute === "/services" ? "active" : ""}
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link
                  className={currentRoute === "/projects" ? "active" : ""}
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link
                  className={currentRoute === "/blog" ? "active" : ""}
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link
                  className={currentRoute === "/contact" ? "active" : ""}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/* header_menu */}

            <SearchBar />

            <div
              className={`header_hamburger ${isOpen ? "open" : ""}`}
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
      </div>
      {/* header# */}
    </>
  );
}

export default Header;
