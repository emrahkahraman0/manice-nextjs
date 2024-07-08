'use client'
import Page from '@/templates/Page'
import Image from 'next/image'
import ProjectImg from '/public/300x300.png'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Projects({ slug }) {
  return (
    <>
      <Page />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="projects"
      >
        <div class="container">
          <div class="projects row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-2">
            <div class="projects_item">
              <Image
                className="img_fluid"
                src={ProjectImg}
                alt="Project Image"
              />
              <h6>
                <Link href={`/projects/${slug}`}>Project Name One</Link>
              </h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore eu fugiat nulla pariatur.
              </p>
              <Link className="read_more" href={`/projects/${slug}`}>
                Read More
              </Link>
            </div>
            {/*projects_item*/}
            <div class="projects_item">
              <Image
                className="img_fluid"
                src={ProjectImg}
                alt="Project Image"
              />
              <h6>
                <Link href={`/projects/${slug}`}>Project Name One</Link>
              </h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore eu fugiat nulla pariatur.
              </p>
              <Link className="read_more" href={`/projects/${slug}`}>
                Read More
              </Link>
            </div>
            {/*projects_item*/}
            <div class="projects_item">
              <Image
                className="img_fluid"
                src={ProjectImg}
                alt="Project Image"
              />
              <h6>
                <Link href={`/projects/${slug}`}>Project Name One</Link>
              </h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore eu fugiat nulla pariatur.
              </p>
              <Link className="read_more" href={`/projects/${slug}`}>
                Read More
              </Link>
            </div>
            {/*projects_item*/}
            <div class="projects_item">
              <Image
                className="img_fluid"
                src={ProjectImg}
                alt="Project Image"
              />
              <h6>
                <Link href={`/projects/${slug}`}>Project Name One</Link>
              </h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore eu fugiat nulla pariatur.
              </p>
              <Link className="read_more" href={`/projects/${slug}`}>
                Read More
              </Link>
            </div>
            {/*projects_item*/}
            <div class="projects_item">
              <Image
                className="img_fluid"
                src={ProjectImg}
                alt="Project Image"
              />
              <h6>
                <Link href={`/projects/${slug}`}>Project Name One</Link>
              </h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore eu fugiat nulla pariatur.
              </p>
              <Link className="read_more" href={`/projects/${slug}`}>
                Read More
              </Link>
            </div>
            {/*projects_item*/}
          </div>
          {/*projects*/}
        </div>
        {/*container*/}
      </motion.div>
      {/*projects#*/}
    </>
  )
}

export default Projects
