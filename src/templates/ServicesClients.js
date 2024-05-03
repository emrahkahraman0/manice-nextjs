'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import Image from 'next/image'
import ClientImage from '/public/100x100.png'

function ServicesClients() {
  return (
    <>
      <div id="services_clients">
        <div className="container">
          <Swiper
            className="services_clients"
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
          >
            <SwiperSlide className="services_clients_item">
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
            {/*services_clients_item*/}
            <SwiperSlide className="services_clients_item">
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
            {/*services_clients_item*/}
            <SwiperSlide className="services_clients_item">
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
            {/*services_clients_item*/}
            <SwiperSlide className="services_clients_item">
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
            {/*services_clients_item*/}
          </Swiper>
          {/*services_clients*/}
        </div>
        {/*container*/}
      </div>
      {/*services_clients#*/}
    </>
  )
}

export default ServicesClients
