import HomeBrands from '@/templates/HomeBrands'
import Page from '@/templates/Page'
import Link from 'next/link'
import Image from 'next/image'
import ContactImage from '/public/570x360.png'

function Contact() {
  return (
    <>
      <Page />
      <div id="contact">
        <div className="container">
          <div className="contact">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6150138.660785171!2d7.428839426886231!3d41.17822406529046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2zxLB0YWx5YQ!5e0!3m2!1str!2str!4v1720127476819!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
            ></iframe>
            <div className="contact_info align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
              <div className="contact_info_image">
                <Image
                  className="img_fluid"
                  src={ContactImage}
                  alt="Contact Image"
                />
                <div className="icons align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
                  <div className="icons_item">
                    <i className="fa-regular fa-map"></i>
                    <h5>Address</h5>
                    <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                    <p>
                      Mon - Fri: 8AM — 4PM
                      <br />
                      Saturday: 8AM — 4PM
                    </p>
                  </div>
                  {/*icons_item*/}
                  <div className="icons_item">
                    <i className="fa-solid fa-phone"></i>
                    <h5>Phone & Email</h5>
                    <p>
                      Phone: +44-333 014 4501
                      <br />
                      Fax: +44-333 014 4502
                    </p>
                    <p>Email: contact@manice.com</p>
                  </div>
                  {/*icons_item*/}
                </div>
                {/*icons*/}
              </div>
              {/*contact_info_image*/}
              <div className="contact_info_form">
                <h6>Contact Form</h6>
                <form>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                  <textarea placeholder="Your Message"></textarea>
                  <button type="submit">Send</button>
                  <p>
                    We provide a professional service for private and commercial
                    customers.
                  </p>
                </form>
              </div>
              {/*contact_info_form*/}
            </div>
            {/*contact_info*/}
          </div>
          {/*contact*/}
        </div>
        {/*container*/}
      </div>
      {/*contact#*/}
      <HomeBrands />
    </>
  )
}

export default Contact
