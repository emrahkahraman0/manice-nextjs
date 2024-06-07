"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Brand1 from "/public/brand-1.svg";
import Brand2 from "/public/brand-2.svg";
import Brand3 from "/public/brand-3.svg";
import Brand4 from "/public/brand-4.svg";

function HomeBrands() {
  return (
    <>
      <div id="home_brands">
        <div className="container">
          <Swiper
            className="home_brands"
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide className="home_brands_item">
              <Image className="img_fluid" src={Brand1} alt="Brands Image" />
            </SwiperSlide>
            {/*home_brands_item*/}
            <SwiperSlide className="home_brands_item">
              <Image className="img_fluid" src={Brand2} alt="Brands Image" />
            </SwiperSlide>
            {/*home_brands_item*/}
            <SwiperSlide className="home_brands_item">
              <Image className="img_fluid" src={Brand3} alt="Brands Image" />
            </SwiperSlide>
            {/*home_brands_item*/}
            <SwiperSlide className="home_brands_item">
              <Image className="img_fluid" src={Brand4} alt="Brands Image" />
            </SwiperSlide>
            {/*home_brands_item*/}
            <SwiperSlide className="home_brands_item">
              <Image className="img_fluid" src={Brand2} alt="Brands Image" />
            </SwiperSlide>
            {/*home_brands_item*/}
          </Swiper>
          {/*home_brands*/}
        </div>
        {/*container*/}
      </div>
      {/*home_brands#*/}
    </>
  );
}

export default HomeBrands;
