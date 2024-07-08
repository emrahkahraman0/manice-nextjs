'use client'
import Image from 'next/image'
import RightImg from '/public/945x640.png'
import { motion } from 'framer-motion'

function ServicesValue() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="services_value"
      >
        <div className="services_value">
          <div className="services_value_left">
            <div className="content container">
              <h6>
                <span>Company</span> Value
              </h6>
              <p>
                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium dolore mque
                laudantium, totam rem aperiam eaque ipsa quae ab illo invent.
                Sed ut perspiciatis unde omnis.
              </p>
              <ul>
                <li>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse.
                </li>
                <li>
                  Consectetur adipisicing elit sed do eiusmod temporin cididunt
                  ut labore et dolore.
                </li>
              </ul>
            </div>
            {/*content*/}
          </div>
          {/*services_value_left*/}
          <div className="services_value_right">
            <Image
              className="img_fluid cover"
              src={RightImg}
              alt="Right Image"
            />
          </div>
          {/*services_value_right*/}
        </div>
        {/*services_value*/}
      </motion.div>
      {/*services_value#*/}
    </>
  )
}

export default ServicesValue
