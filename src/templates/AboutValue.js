import Link from "next/link";

function AboutValue() {
  return (
    <>
      <div id="about_value">
        <div className="about_value">
          <div className="about_value_left">
            <div className="content container">
              <h6>
                <span>Company</span> Value
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
                <li>
                  Consectetur adipisicing elit sed do eiusmod temporin cididunt
                  ut labore et dolore.
                </li>
              </ul>
              <button>
                <Link href="/">Learn More</Link>
              </button>
            </div>
            {/*content*/}
          </div>
          {/*about_value_left*/}
          <div className="about_value_right">
            <div className="right_content container">
              <h6>
                <span>Company</span> Value
              </h6>
              <div className="skills">
                <div class="skill-box">
                  <span class="title">Business Solution</span>
                  <div class="skill-bar">
                    <span class="skill-per html"></span>
                  </div>
                </div>
                {/*skill-box*/}
                <div class="skill-box">
                  <span class="title">Business Solution</span>
                  <div class="skill-bar">
                    <span class="skill-per css"></span>
                  </div>
                </div>
                {/*skill-box*/}
                <div class="skill-box">
                  <span class="title">Business Solution</span>
                  <div class="skill-bar">
                    <span class="skill-per javascript"></span>
                  </div>
                </div>
                {/*skill-box*/}
                <div class="skill-box">
                  <span class="title">Business Solution</span>
                  <div class="skill-bar">
                    <span class="skill-per nodejs"></span>
                  </div>
                </div>
                {/*skill-box*/}
              </div>
              {/*skills*/}
            </div>
            {/*right_content*/}
          </div>
          {/*about_value_right*/}
        </div>
        {/*about_value*/}
      </div>
      {/*about_value#*/}
    </>
  );
}

export default AboutValue;
