import Link from "next/link";

function HomeServices() {
  return (
    <>
      <div id="home_services">
        <div className="container">
          <div className="home_services">
            <div className="home_services_heading">
              <h6>
                <span>our</span> services
              </h6>
            </div>
            {/*home_services_heading*/}
            <div className="home_services_items row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
              <div className="home_services_items_box">
                <div className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="text">
                  <h6>
                    <Link href="/">Financial Analysis</Link>
                  </h6>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              {/*home_services_items_box*/}
              <div className="home_services_items_box">
                <div className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="text">
                  <h6>
                    <Link href="/">Financial Analysis</Link>
                  </h6>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              {/*home_services_items_box*/}
              <div className="home_services_items_box">
                <div className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="text">
                  <h6>
                    <Link href="/">Financial Analysis</Link>
                  </h6>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              {/*home_services_items_box*/}
              <div className="home_services_items_box">
                <div className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="text">
                  <h6>
                    <Link href="/">Financial Analysis</Link>
                  </h6>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              {/*home_services_items_box*/}
              <div className="home_services_items_box">
                <div className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="text">
                  <h6>
                    <Link href="/">Financial Analysis</Link>
                  </h6>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              {/*home_services_items_box*/}
              <div className="home_services_items_box">
                <div className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div className="text">
                  <h6>
                    <Link href="/">Financial Analysis</Link>
                  </h6>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              {/*home_services_items_box*/}
            </div>
            {/*home_services_items*/}
          </div>
          {/*home_services*/}
        </div>
        {/*container*/}
      </div>
      {/*home_services#*/}
    </>
  );
}

export default HomeServices;
