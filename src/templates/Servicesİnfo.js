import Image from 'next/image'
import Graphic from '/public/graphic.png'

function Servicesİnfo() {
  return (
    <>
      <div id="services_info">
        <div className="container">
          <div className="services_info align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
            <div className="services_info_image">
              <Image className="img_fluid" src={Graphic} alt="Graphic Image" />
            </div>
            <div className="services_info_text">
              <h6>
                <span>Business</span> Solutions
              </h6>
              <p>
                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium dolore mque
                laudantium, totam rem aperiam eaque ipsa quae ab illo invent.
                Sed ut perspiciatis unde omnis.
              </p>
              <ul>
                <li>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse.
                </li>
              </ul>
              <p>
                Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse.
              </p>
            </div>
            {/*services_info_text*/}
          </div>
          {/*services_info*/}
        </div>
        {/*container*/}
      </div>
      {/*services_info#*/}
    </>
  )
}

export default Servicesİnfo
