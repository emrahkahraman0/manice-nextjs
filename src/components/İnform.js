import Link from "next/link";
import React from "react";

function İnform() {
  return (
    <>
      <div id="inform">
        <div className="container">
          <div className="inform">
            <div className="inform_text">
              <h6>Don't hesitate to contact us any time.</h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat.
              </p>
            </div>
            {/*inform_text*/}
            <div className="inform_btn">
              <button>
                <Link href="/">Get a Quote</Link>
              </button>
            </div>
            {/*inform_btn*/}
          </div>
          {/*inform_text*/}
        </div>
        {/*container*/}
      </div>
      {/*inform#*/}
    </>
  );
}

export default İnform;
