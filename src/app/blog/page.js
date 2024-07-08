'use client'
import Page from '@/templates/Page'
import Link from 'next/link'
import Image from 'next/image'
import BlogImg from '/public/370x250.png'
import { motion } from 'framer-motion'

function Blog({ slug }) {
  return (
    <>
      <Page />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="blog">
        <div className="container">
          <div className="blog row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div className="blog_item ">
              <Image className="img_fluid" src={BlogImg} alt="Blog Image" />
              <h6>
                <Link href={`/blog/${slug}`}>
                  Reprehenderit in voluptate velit esse cillum
                </Link>
              </h6>
              <div className="blog_desc">
                <div className="date">July 29, 2020</div>
                <div className="category">Arts</div>
              </div>
              {/*blog_desc*/}
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident sunt in culpa.
              </p>
              <Link className="read_more" href={`/blog/${slug}`}>
                Read More
              </Link>
            </div>
            {/*blog_item*/}
            <div className="blog_item ">
              <Image className="img_fluid" src={BlogImg} alt="Blog Image" />
              <h6>
                <Link href={`/blog/${slug}`}>
                  Reprehenderit in voluptate velit esse cillum
                </Link>
              </h6>
              <div className="blog_desc">
                <div className="date">July 29, 2020</div>
                <div className="category">Arts</div>
              </div>
              {/*blog_desc*/}
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident sunt in culpa.
              </p>
              <Link className="read_more" href={`/blog/${slug}`}>
                Read More
              </Link>
            </div>
            {/*blog_item*/}
            <div className="blog_item ">
              <Image className="img_fluid" src={BlogImg} alt="Blog Image" />
              <h6>
                <Link href={`/blog/${slug}`}>
                  Reprehenderit in voluptate velit esse cillum
                </Link>
              </h6>
              <div className="blog_desc">
                <div className="date">July 29, 2020</div>
                <div className="category">Arts</div>
              </div>
              {/*blog_desc*/}
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident sunt in culpa.
              </p>
              <Link className="read_more" href={`/blog/${slug}`}>
                Read More
              </Link>
            </div>
            {/*blog_item*/}
            <div className="blog_item ">
              <Image className="img_fluid" src={BlogImg} alt="Blog Image" />
              <h6>
                <Link href={`/blog/${slug}`}>
                  Reprehenderit in voluptate velit esse cillum
                </Link>
              </h6>
              <div className="blog_desc">
                <div className="date">July 29, 2020</div>
                <div className="category">Arts</div>
              </div>
              {/*blog_desc*/}
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident sunt in culpa.
              </p>
              <Link className="read_more" href={`/blog/${slug}`}>
                Read More
              </Link>
            </div>
            {/*blog_item*/}
            <div className="blog_item ">
              <Image className="img_fluid" src={BlogImg} alt="Blog Image" />
              <h6>
                <Link href={`/blog/${slug}`}>
                  Reprehenderit in voluptate velit esse cillum
                </Link>
              </h6>
              <div className="blog_desc">
                <div className="date">July 29, 2020</div>
                <div className="category">Arts</div>
              </div>
              {/*blog_desc*/}
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident sunt in culpa.
              </p>
              <Link className="read_more" href={`/blog/${slug}`}>
                Read More
              </Link>
            </div>
            {/*blog_item*/}
          </div>
          {/*blog*/}

          <div className="pagination">
            <ul>
              <li>
                <Link href="/">Previous</Link>
              </li>
              <li>
                <Link href="/">1</Link>
              </li>
              <li>
                <Link href="/">2</Link>
              </li>
              <li>
                <Link href="/">3</Link>
              </li>
              <li>
                <Link href="/">Next</Link>
              </li>
            </ul>
          </div>
          {/*pagination*/}
        </div>
        {/*container*/}
      </motion.div>
      {/*blog#*/}
    </>
  )
}

export default Blog
