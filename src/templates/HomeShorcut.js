import Link from "next/link";
import VideoModal from "./VideoModal";

function HomeShorcut() {
  return (
    <>
      <div id="home_shortcut">
        <div className="container">
          <div className="home_shortcut">
            <div className="home_shortcut_text">
              <div className="content">
                <h6>Business Solutions</h6>
                <p>
                  Teritatis et quasi architecto. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium dolore mque
                  laudantium, totam rem aperiam eaque ipsa quae ab illo invent.
                  Sed ut perspiciatis unde omnis.
                </p>
                <Link href="/" className="read_more">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            {/*home_shortcut_text*/}
            <div className="home_shortcut_video">
              <VideoModal />
            </div>
            {/*home_shortcut_video*/}
          </div>
          {/*home_shortcut*/}
        </div>
        {/*container*/}
      </div>
      {/*home_shortcut#*/}
    </>
  );
}

export default HomeShorcut;
