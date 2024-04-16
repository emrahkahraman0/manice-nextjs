"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HeaderLogo from "/public/headerLogo.svg";
import Link from "next/link";

function Header() {
  //Menü
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  //Scroll
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

  //Active
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
                  alt="Team Image"
                />
              </Link>
            </div>
            {/*header_logo*/}

            <ul className={`header_menu ${isOpen ? "open" : ""}`}>
              <li>
                <Link className={currentRoute === "/" ? "active" : ""} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/teams" ? "active" : ""}
                  href="/teams"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/users" ? "active" : ""}
                  href="/users"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  className={currentRoute === "/posts" ? "active" : ""}
                  href="/posts"
                >
                  Posts
                </Link>
              </li>
            </ul>
            {/*header_menu*/}

            <div
              className={`header_hamburger ${isOpen ? "open" : ""}`}
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
  );
}

export default Header;
