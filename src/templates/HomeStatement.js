'use client'
import React from 'react'
import HomeClients from './HomeClients'
import HomeBrands from './HomeBrands'
import { motion } from 'framer-motion'

function HomeStatement() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="home_statement"
      >
        <div className="text container">
          <h6>All of our customers trust their success to us</h6>
          <p>
            Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium dolore mque laudantium, totam
            rem aperiam eaque ipsa quae ab illo invent. Sed ut perspiciatis unde
            omnis.
          </p>
        </div>
        {/*text*/}
      </motion.div>
      {/*home_statement#*/}
      <HomeClients />
      <HomeBrands />
    </>
  )
}

export default HomeStatement
