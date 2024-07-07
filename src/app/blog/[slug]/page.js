import Page from '@/templates/Page'
import Image from 'next/image'
import BlogImg from '/public/1170x640.png'

function BlogDetails() {
  return (
    <>
      <Page />
      <div id="blog_details">
        <div className="container">
          <div className="blog_details">
            <div className="blog_desc">
              <h6>Reprehenderit in voluptate velit esse cillum</h6>
              <div className="date">July 29, 2020</div>
              <div className="category">Arts</div>
            </div>
            {/*blog_desc*/}
            <Image className="img_fluid" src={BlogImg} alt="Blog Image" />
            <div className="post_detail">
              <p>
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
                pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                tincidunt tempus. Donec vitae sapien ut libero venenatis
                faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
                nibh. Donec sodales sagittis magna. Sed consequat, leo eget
                bibendum sodales, augue velit cursus nunc, quis gravida magna mi
                a libero. Fusce vulputate eleifend sapien.
              </p>
              <h4>Ordered List</h4>
              <ul>
                <li></li>
              </ul>
              <h4>Unordered List</h4>
              <ol>
                <li></li>
              </ol>
              <p>
                Tellus eget condimentum rhoncus, sem quam semper libero, sit
                amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
                luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                tincidunt tempus. Donec vitae sapien ut libero venenatis
                faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
                nibh. Donec sodales sagittis magna. Sed consequat, leo eget
                bibendum sodales, augue velit cursus nunc, quis gravida magna mi
                a libero. Fusce vulputate eleifend sapien.
              </p>
            </div>
            {/*post_detail*/}
          </div>
          {/*blog_details*/}
        </div>
        {/*container*/}
      </div>
      {/*blog_details#*/}
    </>
  )
}

export default BlogDetails
