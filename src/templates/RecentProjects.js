"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";
import ProjectImg from "/public/300x300.png";

function RecentProjects() {
  return (
    <>
      <div id="recent_projects">
        <div className="container">
          <div className="recent_projects">
            <div className="recent_projects_heading">
              <h6>
                <span>recent</span> projects
              </h6>
            </div>
            {/*recent_projects_heading*/}
            <Swiper
              className="recent_projects_items"
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              pagination={{ clickable: true }}
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
                  slidesPerView: 1,
                },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide className="recent_projects_items_box">
                <Image
                  className="img_fluid"
                  src={ProjectImg}
                  alt="Project Image"
                />
                <h6>
                  <Link href="/">Project Name One</Link>
                </h6>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  essecillum dolore eu fugiat nulla pariatur.
                </p>
                <Link className="read_more" href="/">
                  Read More
                </Link>
              </SwiperSlide>
              {/*recent_projects_items_box*/}
              <SwiperSlide className="recent_projects_items_box">
                <Image
                  className="img_fluid"
                  src={ProjectImg}
                  alt="Project Image"
                />
                <h6>
                  <Link href="/">Project Name One</Link>
                </h6>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  essecillum dolore eu fugiat nulla pariatur.
                </p>
                <Link className="read_more" href="/">
                  Read More
                </Link>
              </SwiperSlide>
              {/*recent_projects_items_box*/}
              <SwiperSlide className="recent_projects_items_box">
                <Image
                  className="img_fluid"
                  src={ProjectImg}
                  alt="Project Image"
                />
                <h6>
                  <Link href="/">Project Name One</Link>
                </h6>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  essecillum dolore eu fugiat nulla pariatur.
                </p>
                <Link className="read_more" href="/">
                  Read More
                </Link>
              </SwiperSlide>
              {/*recent_projects_items_box*/}
              <SwiperSlide className="recent_projects_items_box">
                <Image
                  className="img_fluid"
                  src={ProjectImg}
                  alt="Project Image"
                />
                <h6>
                  <Link href="/">Project Name One</Link>
                </h6>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  essecillum dolore eu fugiat nulla pariatur.
                </p>
                <Link className="read_more" href="/">
                  Read More
                </Link>
              </SwiperSlide>
              {/*recent_projects_items_box*/}
            </Swiper>
            {/*recent_projects_items*/}
          </div>
          {/*recent_projects*/}
        </div>
        {/*container*/}
      </div>
      {/*recent_projects#*/}
    </>
  );
}

export default RecentProjects;
