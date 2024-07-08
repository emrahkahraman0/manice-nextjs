'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Servicesİtems() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="services_items"
      >
        <div className="container">
          <div className="services_items">
            <div className="services_items_heading">
              <h6>
                <span>Our</span> Services
              </h6>
            </div>
            {/*services_items_heading*/}
            <div className="services_items_boxs row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
              <div className="services_items_boxs_item">
                <div className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="text">
                  <h6>
                    <Link href="/">Financial Analysis</Link>
                  </h6>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur.
                  </p>
                  <Link className="read_more" href="/">
                    Read More
                  </Link>
                </div>
              </div>
              {/*services_items_boxs_item*/}
              <div className="services_items_boxs_item">
                <div className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="text">
                  <h6>
                    <Link href="/">Financial Analysis</Link>
                  </h6>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur.
                  </p>
                  <Link className="read_more" href="/">
                    Read More
                  </Link>
                </div>
              </div>
              {/*services_items_boxs_item*/}
              <div className="services_items_boxs_item">
                <div className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="text">
                  <h6>
                    <Link href="/">Financial Analysis</Link>
                  </h6>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur.
                  </p>
                  <Link className="read_more" href="/">
                    Read More
                  </Link>
                </div>
              </div>
              {/*services_items_boxs_item*/}
              <div className="services_items_boxs_item">
                <div className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="text">
                  <h6>
                    <Link href="/">Financial Analysis</Link>
                  </h6>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur.
                  </p>
                  <Link className="read_more" href="/">
                    Read More
                  </Link>
                </div>
              </div>
              {/*services_items_boxs_item*/}
              <div className="services_items_boxs_item">
                <div className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="text">
                  <h6>
                    <Link href="/">Financial Analysis</Link>
                  </h6>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur.
                  </p>
                  <Link className="read_more" href="/">
                    Read More
                  </Link>
                </div>
              </div>
              {/*services_items_boxs_item*/}
              <div className="services_items_boxs_item">
                <div className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="text">
                  <h6>
                    <Link href="/">Financial Analysis</Link>
                  </h6>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur.
                  </p>
                  <Link className="read_more" href="/">
                    Read More
                  </Link>
                </div>
              </div>
              {/*services_items_boxs_item*/}
            </div>
            {/*services_items_boxs*/}
          </div>
          {/*services_items*/}
        </div>
        {/*container*/}
      </motion.div>
      {/*services#*/}
    </>
  )
}

export default Servicesİtems
