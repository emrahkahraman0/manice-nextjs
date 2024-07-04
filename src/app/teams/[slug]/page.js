import Page from '@/templates/Page'
import Image from 'next/image'
import TeamImg from '/public/500x500.png'

function TeamDetails() {
  return (
    <>
      <Page />
      <div id="team_details">
        <div className="container">
          <div className="team_details align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
            <div className="team_details_image">
              <Image className="img_fluid" src={TeamImg} alt="Team Image" />
            </div>
            {/*team_details_image*/}
            <div className="team_details_text">
              <h5>Team Name</h5>
              <h6>Team Job</h6>
            </div>
            {/*team_details_text*/}
          </div>
          {/*team_details*/}
        </div>
        {/*container*/}
      </div>
      {/*team_details#*/}
    </>
  )
}

export default TeamDetails
