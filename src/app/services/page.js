import Page from '@/templates/Page'
import Link from 'next/link'

function Services({ slug }) {
  return (
    <>
      <Page />
      <div id="services">
        <div className="container">
          <div className="services row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div className="services_item">
              <div className="icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <div className="text">
                <h6>
                  <Link href={`/services/${slug}`}>Financial Analysis</Link>
                </h6>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  essecillum dolore eu fugiat nulla pariatur.
                </p>
                <Link className="read_more" href={`/services/${slug}`}>
                  Read More
                </Link>
              </div>
            </div>
            {/*services_item*/}
            <div className="services_item">
              <div className="icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <div className="text">
                <h6>
                  <Link href={`/services/${slug}`}>Financial Analysis</Link>
                </h6>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  essecillum dolore eu fugiat nulla pariatur.
                </p>
                <Link className="read_more" href={`/services/${slug}`}>
                  Read More
                </Link>
              </div>
            </div>
            {/*services_item*/}
            <div className="services_item">
              <div className="icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <div className="text">
                <h6>
                  <Link href={`/services/${slug}`}>Financial Analysis</Link>
                </h6>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  essecillum dolore eu fugiat nulla pariatur.
                </p>
                <Link className="read_more" href={`/services/${slug}`}>
                  Read More
                </Link>
              </div>
            </div>
            {/*services_item*/}
            <div className="services_item">
              <div className="icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <div className="text">
                <h6>
                  <Link href={`/services/${slug}`}>Financial Analysis</Link>
                </h6>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  essecillum dolore eu fugiat nulla pariatur.
                </p>
                <Link className="read_more" href={`/services/${slug}`}>
                  Read More
                </Link>
              </div>
            </div>
            {/*services_item*/}
            <div className="services_item">
              <div className="icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <div className="text">
                <h6>
                  <Link href={`/services/${slug}`}>Financial Analysis</Link>
                </h6>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  essecillum dolore eu fugiat nulla pariatur.
                </p>
                <Link className="read_more" href={`/services/${slug}`}>
                  Read More
                </Link>
              </div>
            </div>
            {/*services_item*/}
          </div>
          {/*services*/}
        </div>
        {/*container*/}
      </div>
      {/*services#*/}
    </>
  )
}

export default Services
