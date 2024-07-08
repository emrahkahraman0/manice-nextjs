'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import Image from 'next/image'
import ClientImage from '/public/100x100.png'
import { motion } from 'framer-motion'

function ServicesClients() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="services_clients"
      >
        <div className="container">
          <div className="services_clients">
            <div className="services_clients_heading">
              <h6>
                <span>Client</span> says
              </h6>
            </div>
            {/*services_clients_heading*/}
            <Swiper
              className="services_clients_boxs"
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2
                },
                992: {
                  slidesPerView: 2
                }
              }}
            >
              <SwiperSlide className="services_clients_boxs_item">
                <p>
                  Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium dolore mque
                  laudantium.
                </p>
                <div className="client_desc">
                  <div className="client_desc_image">
                    <Image
                      className="img_fluid"
                      src={ClientImage}
                      alt="Client Image"
                    />
                  </div>
                  <div className="client_desc_text">
                    <h5>Rudhi Sasmito</h5>
                    <h6>ABC Company</h6>
                  </div>
                </div>
                {/*client_desc*/}
              </SwiperSlide>
              {/*services_clients_boxs_item*/}
              <SwiperSlide className="services_clients_boxs_item">
                <p>
                  Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium dolore mque
                  laudantium.
                </p>
                <div className="client_desc">
                  <div className="client_desc_image">
                    <Image
                      className="img_fluid"
                      src={ClientImage}
                      alt="Client Image"
                    />
                  </div>
                  <div className="client_desc_text">
                    <h5>Rudhi Sasmito</h5>
                    <h6>ABC Company</h6>
                  </div>
                </div>
                {/*client_desc*/}
              </SwiperSlide>
              {/*services_clients_boxs_item*/}
              <SwiperSlide className="services_clients_boxs_item">
                <p>
                  Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium dolore mque
                  laudantium.
                </p>
                <div className="client_desc">
                  <div className="client_desc_image">
                    <Image
                      className="img_fluid"
                      src={ClientImage}
                      alt="Client Image"
                    />
                  </div>
                  <div className="client_desc_text">
                    <h5>Rudhi Sasmito</h5>
                    <h6>ABC Company</h6>
                  </div>
                </div>
                {/*client_desc*/}
              </SwiperSlide>
              {/*services_clients_boxs_item*/}
            </Swiper>
            {/*services_clients_boxs*/}
          </div>
          {/*services_clients*/}
        </div>
        {/*container*/}
      </motion.div>
      {/*services_clients#*/}
    </>
  )
}

export default ServicesClients
