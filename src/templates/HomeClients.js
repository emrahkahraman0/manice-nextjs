'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import Image from 'next/image'
import Client1 from '/public/1200x535.png'
import { motion } from 'framer-motion'

function HomeClients() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="home_clients"
      >
        <div className="container">
          <Swiper
            className="home_clients"
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
          >
            <SwiperSlide className="home_clients_item">
              <Image className="img_fluid" src={Client1} alt="Client Image" />
              <div className="client_caption container">
                <h4>
                  Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium dolore mque
                  laudantium, totam rem aperiam eaque ipsa quae ab illo invent.
                  Sed ut perspiciatis unde omnis.
                </h4>
                <h5>Rudhi Sasmito</h5>
                <h6>— Head Of Operations</h6>
              </div>
              {/*client_caption*/}
            </SwiperSlide>
            {/*home_clients_item*/}
            <SwiperSlide className="home_clients_item">
              <Image className="img_fluid" src={Client1} alt="Client Image" />
              <div className="client_caption container">
                <h4>
                  Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium dolore mque
                  laudantium, totam rem aperiam eaque ipsa quae ab illo invent.
                  Sed ut perspiciatis unde omnis.
                </h4>
                <h5>Rudhi Sasmito</h5>
                <h6>— Head Of Operations</h6>
              </div>
              {/*client_caption*/}
            </SwiperSlide>
            {/*home_clients_item*/}
            <SwiperSlide className="home_clients_item">
              <Image className="img_fluid" src={Client1} alt="Client Image" />
              <div className="client_caption container">
                <h4>
                  Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium dolore mque
                  laudantium, totam rem aperiam eaque ipsa quae ab illo invent.
                  Sed ut perspiciatis unde omnis.
                </h4>
                <h5>Rudhi Sasmito</h5>
                <h6>— Head Of Operations</h6>
              </div>
              {/*client_caption*/}
            </SwiperSlide>
            {/*home_clients_item*/}
          </Swiper>
          {/*home_clients*/}
        </div>
        {/*container*/}
      </motion.div>
      {/*home_clients#*/}
    </>
  )
}

export default HomeClients
