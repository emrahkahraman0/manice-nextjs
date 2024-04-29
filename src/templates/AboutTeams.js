import Image from "next/image";
import TeamImg from "/public/370x370.png";
import Link from "next/link";

function AboutTeams() {
  return (
    <>
      <div id="about_teams">
        <div className="container">
          <div className="about_teams">
            <div className="about_teams_heading">
              <h6>
                <span>our</span> teams
              </h6>
            </div>
            {/*about_teams_heading*/}
            <div className="about_teams_items row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
              <div>
                <div className="about_teams_items_box">
                  <Image className="img_fluid" src={TeamImg} alt="Team Image" />
                  <h6>
                    <Link href="/">John Doe</Link>
                  </h6>
                  <h5>Founder & CEO</h5>
                </div>
              </div>
              {/*about_teams_items_box*/}
              <div>
                <div className="about_teams_items_box">
                  <Image className="img_fluid" src={TeamImg} alt="Team Image" />
                  <h6>
                    <Link href="/">John Doe</Link>
                  </h6>
                  <h5>Founder & CEO</h5>
                </div>
              </div>
              {/*about_teams_items_box*/}
              <div>
                <div className="about_teams_items_box">
                  <Image className="img_fluid" src={TeamImg} alt="Team Image" />
                  <h6>
                    <Link href="/">John Doe</Link>
                  </h6>
                  <h5>Founder & CEO</h5>
                </div>
              </div>
              {/*about_teams_items_box*/}
            </div>
            {/*about_teams_items*/}
          </div>
          {/*about_teams*/}
        </div>
        {/*container*/}
      </div>
      {/*about_teams#*/}
    </>
  );
}

export default AboutTeams;
