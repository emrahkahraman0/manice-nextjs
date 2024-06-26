import Page from "@/templates/Page";
import Image from "next/image";
import ProjectImg from "/public/300x300.png";
import Link from "next/link";

function Projects() {
  return (
    <>
      <Page />
      <div id="projects">
        <div class="container">
          <div class="projects row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-2">
            <div class="projects_item">
              <Image
                className="img_fluid"
                src={ProjectImg}
                alt="Project Image"
              />
              <h6>
                <Link href="/">Project Name One</Link>
              </h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore eu fugiat nulla pariatur.
              </p>
              <Link className="read_more" href="/">
                Read More
              </Link>
            </div>
            {/*projects_item*/}
            <div class="projects_item">
              <Image
                className="img_fluid"
                src={ProjectImg}
                alt="Project Image"
              />
              <h6>
                <Link href="/">Project Name One</Link>
              </h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore eu fugiat nulla pariatur.
              </p>
              <Link className="read_more" href="/">
                Read More
              </Link>
            </div>
            {/*projects_item*/}
            <div class="projects_item">
              <Image
                className="img_fluid"
                src={ProjectImg}
                alt="Project Image"
              />
              <h6>
                <Link href="/">Project Name One</Link>
              </h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore eu fugiat nulla pariatur.
              </p>
              <Link className="read_more" href="/">
                Read More
              </Link>
            </div>
            {/*projects_item*/}
            <div class="projects_item">
              <Image
                className="img_fluid"
                src={ProjectImg}
                alt="Project Image"
              />
              <h6>
                <Link href="/">Project Name One</Link>
              </h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore eu fugiat nulla pariatur.
              </p>
              <Link className="read_more" href="/">
                Read More
              </Link>
            </div>
            {/*projects_item*/}
            <div class="projects_item">
              <Image
                className="img_fluid"
                src={ProjectImg}
                alt="Project Image"
              />
              <h6>
                <Link href="/">Project Name One</Link>
              </h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore eu fugiat nulla pariatur.
              </p>
              <Link className="read_more" href="/">
                Read More
              </Link>
            </div>
            {/*projects_item*/}
          </div>
          {/*projects*/}
        </div>
        {/*container*/}
      </div>
      {/*projects#*/}
    </>
  );
}

export default Projects;
