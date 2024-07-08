'use client'
import Image from 'next/image'
import InfoImage from '/public/570x415.png'
import { motion } from 'framer-motion'

function Aboutİnfo() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="about_info"
      >
        <div className="container">
          <div className="about_info align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
            <div className="about_info_image">
              <Image className="img_fluid" src={InfoImage} alt="Brands Image" />
            </div>
            {/*about_info_image*/}
            <div className="about_info_text">
              <h6>
                <span>our</span> company
              </h6>
              <p className="regular">
                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium dolore mque
                laudantium, totam rem aperiam eaque ipsa quae ab illo invent.
                Sed ut perspiciatis unde omnis.
              </p>
              <p className="italic">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <h4>Rudhi Sasmito</h4>
              <h5>— Head Of Operations</h5>
            </div>
            {/*about_info_text*/}
          </div>
          {/*about_info*/}
        </div>
        {/*container*/}
      </motion.div>
      {/*about_info#*/}
    </>
  )
}

export default Aboutİnfo
