"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Slider1 from "/public/1920x800.png";
import Link from "next/link";

function HomeSlider() {
  return (
    <>
      <div id="home_slider">
        <Swiper
          className="home_slider"
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="home_slider_item">
            <Image className="img_fluid" src={Slider1} alt="Slider İmage" />
            <div className="slider_caption container">
              <h6>We are driven to create a better financial future</h6>
              <p>
                Our professional team works to increase productivity and cost
                effectiveness on the market.
              </p>
              <div className="btn">
                <Link href="/">Learn More</Link>
                <Link href="/">Contact Us</Link>
              </div>
            </div>
            {/*slider_caption*/}
          </SwiperSlide>
          {/*home_slider_item*/}
          <SwiperSlide className="home_slider_item">
            <Image className="img_fluid" src={Slider1} alt="Slider İmage" />
            <div className="slider_caption container">
              <h6>We are driven to create a better financial future</h6>
              <p>
                Our professional team works to increase productivity and cost
                effectiveness on the market.
              </p>
              <div className="btn">
                <Link href="/">Learn More</Link>
                <Link href="/">Contact Us</Link>
              </div>
            </div>
            {/*slider_caption*/}
          </SwiperSlide>
          {/*home_slider_item*/}
          <SwiperSlide className="home_slider_item">
            <Image className="img_fluid" src={Slider1} alt="Slider İmage" />
            <div className="slider_caption container">
              <h6>We are driven to create a better financial future</h6>
              <p>
                Our professional team works to increase productivity and cost
                effectiveness on the market.
              </p>
              <div className="btn">
                <Link href="/">Learn More</Link>
                <Link href="/">Contact Us</Link>
              </div>
            </div>
            {/*slider_caption*/}
          </SwiperSlide>
          {/*home_slider_item*/}
        </Swiper>
        {/*home_slider*/}
      </div>
      {/*home_slider#*/}
    </>
  );
}

export default HomeSlider;
