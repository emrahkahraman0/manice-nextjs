import Link from "next/link";
import Image from "next/image";
import ErrorImage from "/public/error-image.png";

function Error() {
  return (
    <>
      <div id="error_page">
        <div class="container text">
          <Image
            src={ErrorImage}
            alt="Error İmage"
            className="img_fluid"
            priority
          />
          <div class="head">
            <h6>Oh no, something went wrong!</h6>
            <p>
              We provide a professional service for private and commercial
              customers.
            </p>
            <Link className="read_more" href="/">
              Back to Home
            </Link>
          </div>
          {/*head*/}
        </div>
        {/*container*/}
      </div>
      {/*error_page#*/}
    </>
  );
}

export default Error;
