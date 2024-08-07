'use client'
import Page from '@/templates/Page'
import Image from 'next/image'
import TeamImg from '/public/250x250.png'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Teams({ slug }) {
  return (
    <>
      <Page />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="teams">
        <div class="container">
          <div class="teams row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div class="teams_item">
              <Image className="img_fluid" src={TeamImg} alt="Team Image" />
              <h5>
                <Link href={`/teams/${slug}`}>Team Name</Link>
              </h5>
              <h6>Team Job</h6>
              <Link className="read_more" href={`/teams/${slug}`}>
                Read More
              </Link>
            </div>
            {/*teams_item*/}
            <div class="teams_item">
              <Image className="img_fluid" src={TeamImg} alt="Team Image" />
              <h5>
                <Link href={`/teams/${slug}`}>Team Name</Link>
              </h5>
              <h6>Team Job</h6>
              <Link className="read_more" href={`/teams/${slug}`}>
                Read More
              </Link>
            </div>
            {/*teams_item*/}
            <div class="teams_item">
              <Image className="img_fluid" src={TeamImg} alt="Team Image" />
              <h5>
                <Link href={`/teams/${slug}`}>Team Name</Link>
              </h5>
              <h6>Team Job</h6>
              <Link className="read_more" href={`/teams/${slug}`}>
                Read More
              </Link>
            </div>
            {/*teams_item*/}
            <div class="teams_item">
              <Image className="img_fluid" src={TeamImg} alt="Team Image" />
              <h5>
                <Link href={`/teams/${slug}`}>Team Name</Link>
              </h5>
              <h6>Team Job</h6>
              <Link className="read_more" href={`/teams/${slug}`}>
                Read More
              </Link>
            </div>
            {/*teams_item*/}
            <div class="teams_item">
              <Image className="img_fluid" src={TeamImg} alt="Team Image" />
              <h5>
                <Link href={`/teams/${slug}`}>Team Name</Link>
              </h5>
              <h6>Team Job</h6>
              <Link className="read_more" href={`/teams/${slug}`}>
                Read More
              </Link>
            </div>
            {/*teams_item*/}
          </div>
          {/*teams*/}
        </div>
        {/*container*/}
      </motion.div>
      {/*teams#*/}
    </>
  )
}

export default Teams
