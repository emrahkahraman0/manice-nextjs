import Page from '@/templates/Page'
import Image from 'next/image'
import TeamImg from '/public/250x250.png'

function TeamDetails({ params }) {
  return (
    <>
      <Page />
      <div id="team_details">
        <div className="container">
          <div className="team_details row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
            <div className="team_details_image">
              <Image className="img_fluid" src={TeamImg} alt="Team Image" />
            </div>
            {/*team_details_image*/}
            <div className="team_details_text">
              <h1>team_details_text {params.slug}</h1>
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
