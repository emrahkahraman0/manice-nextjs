'use client'
import Image from 'next/image'
import BlogImg from '/public/370x250.png'
import Link from 'next/link'
import { motion } from 'framer-motion'

function HomeBlog() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="home_blog"
      >
        <div className="container">
          <div className="home_blog">
            <div className="home_blog_heading">
              <h6>
                <span>Recent</span> News
              </h6>
            </div>
            {/*home_blog_heading*/}
            <div className="home_blog_items row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
              <div className="home_blog_items_box">
                <Image className="img_fluid" src={BlogImg} alt="Blog Image" />
                <h6>
                  <Link href="/">
                    Reprehenderit in voluptate velit esse cillum
                  </Link>
                </h6>
                <div className="blog_desc">
                  <div className="date">July 29, 2020</div>
                  <div className="category">Arts</div>
                </div>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident sunt in culpa.
                </p>
                <Link className="read_more" href="/">
                  Read More
                </Link>
              </div>
              {/*home_blog_items_box*/}
              <div className="home_blog_items_box">
                <Image className="img_fluid" src={BlogImg} alt="Blog Image" />
                <h6>
                  <Link href="/">
                    Reprehenderit in voluptate velit esse cillum
                  </Link>
                </h6>
                <div className="blog_desc">
                  <div className="date">July 29, 2020</div>
                  <div className="category">Arts</div>
                </div>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident sunt in culpa.
                </p>
                <Link className="read_more" href="/">
                  Read More
                </Link>
              </div>
              {/*home_blog_items_box*/}
              <div className="home_blog_items_box">
                <Image className="img_fluid" src={BlogImg} alt="Blog Image" />
                <h6>
                  <Link href="/">
                    Reprehenderit in voluptate velit esse cillum
                  </Link>
                </h6>
                <div className="blog_desc">
                  <div className="date">July 29, 2020</div>
                  <div className="category">Arts</div>
                </div>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident sunt in culpa.
                </p>
                <Link className="read_more" href="/">
                  Read More
                </Link>
              </div>
              {/*home_blog_items_box*/}
            </div>
            {/*home_blog_items*/}
          </div>
          {/*home_blog*/}
        </div>
        {/*container*/}
      </motion.div>
      {/*home_blog#*/}
    </>
  )
}

export default HomeBlog
