'use client'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

function HomeCounters() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="home_counters"
      >
        <div className="container">
          <div className="home_counters">
            <div className="home_counters_heading">
              <h6>Experienced in mortgage and financial advice!</h6>
              <p>
                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium dolore mque
                laudantium, totam rem aperiam eaque ipsa quae ab illo invent.
                Sed ut perspiciatis unde omnis.
              </p>
            </div>
            {/*home_counters_heading*/}
            <div className="home_counters_items row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
              <div className="home_counters_items_box">
                <CountUp className="count" end={100} duration={4} />
                <h5>Satisfied Customers</h5>
              </div>
              {/*home_counters_items_box*/}
              <div className="home_counters_items_box">
                <CountUp className="count" end={100} duration={4} />
                <h5>Satisfied Customers</h5>
              </div>
              {/*home_counters_items_box*/}
              <div className="home_counters_items_box">
                <CountUp className="count" end={100} duration={4} />
                <h5>Satisfied Customers</h5>
              </div>
              {/*home_counters_items_box*/}
              <div className="home_counters_items_box">
                <CountUp className="count" end={100} duration={4} />
                <h5>Satisfied Customers</h5>
              </div>
              {/*home_counters_items_box*/}
            </div>
            {/*home_counters_items*/}
          </div>
          {/*home_counters*/}
        </div>
        {/*container*/}
      </motion.div>
      {/*home_counters#*/}
    </>
  )
}

export default HomeCounters
