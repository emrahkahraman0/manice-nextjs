import Link from "next/link";

function ServicesPricings() {
  return (
    <>
      <div id="services_pricings">
        <div className="container">
          <div className="services_pricings">
            <div className="services_pricings_heading">
              <h6>
                <span>Our</span> Pricing
              </h6>
            </div>
            {/*services_pricings_heading*/}
            <div className="services_pricings_items row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="services_pricings_items_box">
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
              </div>
              {/*services_pricings_items_box*/}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="services_pricings_items_box">
                  <h4>POPULAR</h4>
                  <h5>Professional</h5>
                  <h6>$9.99/mo</h6>
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
              </div>
              {/*services_pricings_items_box*/}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="services_pricings_items_box">
                  <h5>Professional</h5>
                  <h6>$19.99/mo</h6>
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
              </div>
              {/*services_pricings_items_box*/}
            </div>
            {/*services_pricings_items*/}
          </div>
          {/*services_pricings*/}
        </div>
        {/*container*/}
      </div>
      {/*services_pricings#*/}
    </>
  );
}

export default ServicesPricings;
