'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

function PricingsOne() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="pricings_one"
      >
        <div className="container">
          <div className="pricings_one row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="pricings_one_box">
                <h5>Professional</h5>
                <h6>Free</h6>
                <p>for up to 2 editors and 3 projects</p>
                <ul>
                  <li>
                    <Link href="/">3 projects</Link>
                  </li>
                  <li>
                    <Link href="/">30-day version history</Link>
                  </li>
                  <li>
                    <Link href="/">Up to 2 editors</Link>
                  </li>
                  <li>
                    <Link href="/">Unlimited cloud storage</Link>
                  </li>
                </ul>
                <Link className="read_more" href="/">
                  Get Now
                </Link>
              </div>
            </div>
            {/*pricings_one_box*/}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="pricings_one_box">
                <h4>popular</h4>
                <h5>Professional</h5>
                <h6>Free</h6>
                <p>for up to 2 editors and 3 projects</p>
                <ul>
                  <li>
                    <Link href="/">3 projects</Link>
                  </li>
                  <li>
                    <Link href="/">30-day version history</Link>
                  </li>
                  <li>
                    <Link href="/">Up to 2 editors</Link>
                  </li>
                  <li>
                    <Link href="/">Unlimited cloud storage</Link>
                  </li>
                </ul>
                <Link className="read_more" href="/">
                  Get Now
                </Link>
              </div>
            </div>
            {/*pricings_one_box*/}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="pricings_one_box">
                <h5>Professional</h5>
                <h6>Free</h6>
                <p>for up to 2 editors and 3 projects</p>
                <ul>
                  <li>
                    <Link href="/">3 projects</Link>
                  </li>
                  <li>
                    <Link href="/">30-day version history</Link>
                  </li>
                  <li>
                    <Link href="/">Up to 2 editors</Link>
                  </li>
                  <li>
                    <Link href="/">Unlimited cloud storage</Link>
                  </li>
                </ul>
                <Link className="read_more" href="/">
                  Get Now
                </Link>
              </div>
            </div>
            {/*pricings_one_box*/}
          </div>
          {/*pricings_one*/}
        </div>
        {/*container*/}
      </motion.div>
      {/*pricings_one#*/}
    </>
  )
}

export default PricingsOne
