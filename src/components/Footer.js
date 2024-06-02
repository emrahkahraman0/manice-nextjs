import Image from "next/image";
import FooterLogo from "/public/footerLogo.svg";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div className="footer_item">
              <Image className="img_fluid" src={FooterLogo} alt="Footer Logo" />
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.{" "}
              </p>
              <ul className="social">
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className="fa-brands fa-github"></i>
                  </Link>
                </li>
              </ul>
              {/*social*/}
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h6>Our Company</h6>
              <ul className="links">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Schedule</Link>
                </li>
                <li>
                  <Link href="/">Gallery</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
              {/*links*/}
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h6>Useful Links</h6>
              <ul className="links">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Schedule</Link>
                </li>
                <li>
                  <Link href="/">Gallery</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
              {/*links*/}
            </div>
            {/*footer_item*/}
            <div className="footer_item">
              <h6>Contact Info</h6>
              <div className="desc">
                <div className="desc_item">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="text">
                    <h5>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</h5>
                  </div>
                </div>
                {/*desc_item*/}
                <div className="desc_item">
                  <div className="icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="text">
                    <Link href="tel:03456667778">(0761) 654-123987</Link>
                  </div>
                </div>
                {/*desc_item*/}
                <div className="desc_item">
                  <div className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="text">
                    <Link href="mailto:info@yoursite.com">
                      info@yoursite.com
                    </Link>
                  </div>
                </div>
                {/*desc_item*/}
                <div className="desc_item">
                  <div className="icon">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div className="text">
                    <h5>Mon - Sat 09:00 - 17:00</h5>
                  </div>
                </div>
                {/*desc_item*/}
              </div>
              {/*desc*/}
            </div>
            {/*footer_item*/}
          </div>
          {/*footer*/}
        </div>
        {/*container*/}
      </div>
      {/*footer#*/}

      <div id="copyright">
        <div className="container text">
          © 2020 Manice Figma Template. All rights reserved
        </div>
      </div>
    </>
  );
}

export default Footer;
