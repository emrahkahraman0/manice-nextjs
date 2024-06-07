import Page from "@/templates/Page";
import RecentProjects from "@/templates/RecentProjects";
import Image from "next/image";
import ProjectImg from "/public/300x300.png";

function ProjectsDetails() {
  return (
    <>
      <Page />
      <div id="projects_details">
        <div class="container">
          <div class="projects_details align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
            <div class="projects_details_image">
              <Image
                className="img_fluid"
                src={ProjectImg}
                alt="Project Image"
              />
            </div>
            <div class="projects_details_text">
              <h6>Project Name One</h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          {/*projects_details*/}
        </div>
        {/*container*/}
      </div>
      {/*projects_details#*/}
      <RecentProjects />
    </>
  );
}

export default ProjectsDetails;
