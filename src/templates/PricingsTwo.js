import Link from 'next/link'

function PricingsTwo() {
  return (
    <>
      <div id="pricings_two">
        <div className="container">
          <h3>3 Coloumn</h3>
          <div className="pricings_two row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            <div className="pricings_two_box">
              <h5>Professional</h5>
              <h6>Free</h6>
              <p>for up to 2 editors and 3 projects</p>
              <ul>
                <li>
                  <Link href="/">3 projects</Link>
                </li>
                <li>
                  <Link href="/">30-day version history</Link>
                </li>
                <li>
                  <Link href="/">Up to 2 editors</Link>
                </li>
                <li>
                  <Link href="/">Unlimited cloud storage</Link>
                </li>
              </ul>
              <Link className="read_more" href="/">
                Get Now
              </Link>
            </div>
            {/*pricings_two_box*/}
            <div className="pricings_two_box">
              <h4>popular</h4>
              <h5>Professional</h5>
              <h6>Free</h6>
              <p>for up to 2 editors and 3 projects</p>
              <ul>
                <li>
                  <Link href="/">3 projects</Link>
                </li>
                <li>
                  <Link href="/">30-day version history</Link>
                </li>
                <li>
                  <Link href="/">Up to 2 editors</Link>
                </li>
                <li>
                  <Link href="/">Unlimited cloud storage</Link>
                </li>
              </ul>
              <Link className="read_more" href="/">
                Get Now
              </Link>
            </div>
            {/*pricings_two_box*/}
            <div className="pricings_two_box">
              <h5>Professional</h5>
              <h6>Free</h6>
              <p>for up to 2 editors and 3 projects</p>
              <ul>
                <li>
                  <Link href="/">3 projects</Link>
                </li>
                <li>
                  <Link href="/">30-day version history</Link>
                </li>
                <li>
                  <Link href="/">Up to 2 editors</Link>
                </li>
                <li>
                  <Link href="/">Unlimited cloud storage</Link>
                </li>
              </ul>
              <Link className="read_more" href="/">
                Get Now
              </Link>
            </div>
            {/*pricings_two_box*/}
          </div>
          {/*pricings_two*/}
        </div>
        {/*container*/}
      </div>
      {/*pricings_two#*/}
    </>
  )
}

export default PricingsTwo
